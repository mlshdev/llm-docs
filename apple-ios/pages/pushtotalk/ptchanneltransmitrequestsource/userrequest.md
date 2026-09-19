> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pushtotalk/ptchanneltransmitrequestsource/userrequest

# PTChannelTransmitRequestSource.userRequest (Swift)

**Framework:** Push to Talk  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A transmission request that indicates the user pressed the transmit button in the system user interface.

## Declaration

```swift
case userRequest
```

## See Also

### Transmission sources

- [PTChannelTransmitRequestSource.developerRequest](developerrequest.md): A transmission request that indicates the app calls the begin transmission method.
- [PTChannelTransmitRequestSource.handsfreeButton](handsfreebutton.md): A transmission request that indicates a user pressed a button on a hands-free device.
- [PTChannelTransmitRequestSource.unknown](unknown.md): A transmission request that indicates an unknown reason.

# PTChannelTransmitRequestSourceUserRequest (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A transmission request that indicates the user pressed the transmit button in the system user interface.

## Declaration

```objectivec
PTChannelTransmitRequestSourceUserRequest
```

## See Also

### Transmission sources

- [PTChannelTransmitRequestSourceDeveloperRequest](developerrequest.md): A transmission request that indicates the app calls the begin transmission method.
- [PTChannelTransmitRequestSourceHandsfreeButton](handsfreebutton.md): A transmission request that indicates a user pressed a button on a hands-free device.
- [PTChannelTransmitRequestSourceUnknown](unknown.md): A transmission request that indicates an unknown reason.
