> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/referencedisplaymodestatus-swift.enum](https://developer.apple.com/documentation/uikit/uiscreen/referencedisplaymodestatus-swift.enum)

# UIScreen.ReferenceDisplayModeStatus (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

Describes a screen’s reference display mode status.

## Declaration

```swift
enum ReferenceDisplayModeStatus
```

## Topics

### Statuses

- [UIScreen.ReferenceDisplayModeStatus.notSupported](referencedisplaymodestatus-swift.enum/notsupported.md): A status that indicates the screen doesn’t provide a reference display mode.
- [UIScreen.ReferenceDisplayModeStatus.notEnabled](referencedisplaymodestatus-swift.enum/notenabled.md): A status that indicates the screen provides a reference display mode but it’s in a disabled state.
- [UIScreen.ReferenceDisplayModeStatus.limited](referencedisplaymodestatus-swift.enum/limited.md): A status that indicates the screen’s in a limited reference display mode.
- [UIScreen.ReferenceDisplayModeStatus.enabled](referencedisplaymodestatus-swift.enum/enabled.md): A status that indicates the screen’s in an accurate reference display mode.

### Initializers

- [init(rawValue:)](referencedisplaymodestatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the reference display mode status

- [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [currentEDRHeadroom](currentedrheadroom.md): The screen’s current headroom when displaying extended dynamic range content.
- [potentialEDRHeadroom](potentialedrheadroom.md): The screen’s maximum headroom when displaying extended dynamic range content.

# UIScreenReferenceDisplayModeStatus (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

Describes a screen’s reference display mode status.

## Declaration

```objectivec
enum UIScreenReferenceDisplayModeStatus : NSInteger;
```

## Topics

### Statuses

- [UIScreenReferenceDisplayModeStatusNotSupported](referencedisplaymodestatus-swift.enum/notsupported.md): A status that indicates the screen doesn’t provide a reference display mode.
- [UIScreenReferenceDisplayModeStatusNotEnabled](referencedisplaymodestatus-swift.enum/notenabled.md): A status that indicates the screen provides a reference display mode but it’s in a disabled state.
- [UIScreenReferenceDisplayModeStatusLimited](referencedisplaymodestatus-swift.enum/limited.md): A status that indicates the screen’s in a limited reference display mode.
- [UIScreenReferenceDisplayModeStatusEnabled](referencedisplaymodestatus-swift.enum/enabled.md): A status that indicates the screen’s in an accurate reference display mode.

## See Also

### Getting the reference display mode status

- [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [currentEDRHeadroom](currentedrheadroom.md): The screen’s current headroom when displaying extended dynamic range content.
- [potentialEDRHeadroom](potentialedrheadroom.md): The screen’s maximum headroom when displaying extended dynamic range content.
