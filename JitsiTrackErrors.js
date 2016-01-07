module.exports = {
    /**
     * Returns JitsiTrackErrors based on the error object passed by GUM
     * @param error the error
     * @param {Array} devices Array with the requested devices
     */
    parseError: function (error, devices) {
        devices = devices || [];
        if (typeof error == "object" && error.constraintName && error.name
            && (error.name == "ConstraintNotSatisfiedError" ||
            error.name == "OverconstrainedError") &&
            (error.constraintName == "minWidth" ||
            error.constraintName == "maxWidth" ||
            error.constraintName == "minHeight" ||
            error.constraintName == "maxHeight") &&
            devices.indexOf("video") !== -1) {
                return this.UNSUPPORTED_RESOLUTION;
        } else {
            return this.GENERAL;
        }
    },
    UNSUPPORTED_RESOLUTION: "gum.unsupported_resolution",
    GENERAL: "gum.general"
};
