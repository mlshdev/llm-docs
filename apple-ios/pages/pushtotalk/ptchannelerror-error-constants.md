> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelerror-error-constants](https://developer.apple.com/documentation/pushtotalk/ptchannelerror-error-constants)

# Error constants (Swift)

**Framework:** Push to Talk  
**Kind:** API Collection

Error codes for channel operations.

## Topics

### Constants

- [unknown](ptchannelerror-swift.struct/unknown.md): A channel error that indicates an unknown error.
- [appNotForeground](ptchannelerror-swift.struct/appnotforeground.md): A channel error that indicates the operation failed because the app isn’t in the foreground.
- [channelNotFound](ptchannelerror-swift.struct/channelnotfound.md): A channel error that indicates the system can’t perform the action because there’s no active channel with the UUID you specify.
- [channelLimitReached](ptchannelerror-swift.struct/channellimitreached.md): A channel error that indicates you reached the maximum of one active channel at a time for the entire device.
- [callActive](ptchannelerror-swift.struct/callactive.md): A channel error that indicates there’s an active call that prevents the channel action.
- [transmissionInProgress](ptchannelerror-swift.struct/transmissioninprogress.md): A channel error that indicates a transmission is already in progress.
- [transmissionNotFound](ptchannelerror-swift.struct/transmissionnotfound.md): A channel error that indicates there’s no transmission to stop.
- [deviceManagementRestriction](ptchannelerror-swift.struct/devicemanagementrestriction.md): A channel error that indicates a device-management policy or profile forbids joining the channel.
- [screenTimeRestriction](ptchannelerror-swift.struct/screentimerestriction.md): A channel error that indicates a Screen Time restriction prevents the action.
- [transmissionNotAllowed](ptchannelerror-swift.struct/transmissionnotallowed.md): A channel error that indicates the current transmission mode of the channel doesn’t allow the mode you specify.

## See Also

### Inspecting a channel error

- [PTChannelError.Code](ptchannelerror-swift.struct/code.md): Error codes for channel operations.

# Error constants (Objective-C)

**Framework:** Push to Talk  
**Kind:** API Collection

Error codes for channel operations.

## See Also

### Inspecting a channel error

- [PTChannelError](ptchannelerror-swift.struct/code.md): Error codes for channel operations.
