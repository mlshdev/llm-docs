> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelerror-swift.struct/code/transmissioninprogress](https://developer.apple.com/documentation/pushtotalk/ptchannelerror-swift.struct/code/transmissioninprogress)

# PTChannelError.Code.transmissionInProgress (Swift)

**Framework:** Push to Talk  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A channel error that indicates a transmission is already in progress.

## Declaration

```swift
case transmissionInProgress
```

## See Also

### Error codes

- [PTChannelError.Code.unknown](unknown.md): A channel error that indicates an unknown error.
- [PTChannelError.Code.appNotForeground](appnotforeground.md): A channel error that indicates the operation failed because the app isn’t in the foreground.
- [PTChannelError.Code.channelNotFound](channelnotfound.md): A channel error that indicates the system can’t perform the action because there’s no active channel with the UUID you specify.
- [PTChannelError.Code.channelLimitReached](channellimitreached.md): A channel error that indicates you reached the maximum of one active channel at a time for the entire device.
- [PTChannelError.Code.callActive](callactive.md): A channel error that indicates there’s an active call that prevents the channel action.
- [PTChannelError.Code.transmissionNotFound](transmissionnotfound.md): A channel error that indicates there’s no transmission to stop.
- [PTChannelError.Code.deviceManagementRestriction](devicemanagementrestriction.md): A channel error that indicates a device-management policy or profile forbids joining the channel.
- [PTChannelError.Code.screenTimeRestriction](screentimerestriction.md): A channel error that indicates a Screen Time restriction prevents the action.
- [PTChannelError.Code.transmissionNotAllowed](transmissionnotallowed.md): A channel error that indicates the current transmission mode of the channel doesn’t allow the mode you specify.

# PTChannelErrorTransmissionInProgress (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A channel error that indicates a transmission is already in progress.

## Declaration

```objectivec
PTChannelErrorTransmissionInProgress
```

## See Also

### Error codes

- [PTChannelErrorUnknown](unknown.md): A channel error that indicates an unknown error.
- [PTChannelErrorAppNotForeground](appnotforeground.md): A channel error that indicates the operation failed because the app isn’t in the foreground.
- [PTChannelErrorChannelNotFound](channelnotfound.md): A channel error that indicates the system can’t perform the action because there’s no active channel with the UUID you specify.
- [PTChannelErrorChannelLimitReached](channellimitreached.md): A channel error that indicates you reached the maximum of one active channel at a time for the entire device.
- [PTChannelErrorCallActive](callactive.md): A channel error that indicates there’s an active call that prevents the channel action.
- [PTChannelErrorTransmissionNotFound](transmissionnotfound.md): A channel error that indicates there’s no transmission to stop.
- [PTChannelErrorDeviceManagementRestriction](devicemanagementrestriction.md): A channel error that indicates a device-management policy or profile forbids joining the channel.
- [PTChannelErrorScreenTimeRestriction](screentimerestriction.md): A channel error that indicates a Screen Time restriction prevents the action.
- [PTChannelErrorTransmissionNotAllowed](transmissionnotallowed.md): A channel error that indicates the current transmission mode of the channel doesn’t allow the mode you specify.
