> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelerror-swift.struct/transmissioninprogress](https://developer.apple.com/documentation/pushtotalk/ptchannelerror-swift.struct/transmissioninprogress)

# transmissionInProgress

**Framework:** Push to Talk  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A channel error that indicates a transmission is already in progress.

## Declaration

```swift
static var transmissionInProgress: PTChannelError.Code { get }
```

## See Also

### Constants

- [unknown](unknown.md): A channel error that indicates an unknown error.
- [appNotForeground](appnotforeground.md): A channel error that indicates the operation failed because the app isn’t in the foreground.
- [channelNotFound](channelnotfound.md): A channel error that indicates the system can’t perform the action because there’s no active channel with the UUID you specify.
- [channelLimitReached](channellimitreached.md): A channel error that indicates you reached the maximum of one active channel at a time for the entire device.
- [callActive](callactive.md): A channel error that indicates there’s an active call that prevents the channel action.
- [transmissionNotFound](transmissionnotfound.md): A channel error that indicates there’s no transmission to stop.
- [deviceManagementRestriction](devicemanagementrestriction.md): A channel error that indicates a device-management policy or profile forbids joining the channel.
- [screenTimeRestriction](screentimerestriction.md): A channel error that indicates a Screen Time restriction prevents the action.
- [transmissionNotAllowed](transmissionnotallowed.md): A channel error that indicates the current transmission mode of the channel doesn’t allow the mode you specify.
