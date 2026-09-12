> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/alert-swift.struct/secondarybuttonbehavior-swift.enum](https://developer.apple.com/documentation/alarmkit/alarmpresentation/alert-swift.struct/secondarybuttonbehavior-swift.enum)

# AlarmPresentation.Alert.SecondaryButtonBehavior

**Framework:** AlarmKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Describes the behaviour of the second button.

## Declaration

```swift
enum SecondaryButtonBehavior
```

<a id="overview"></a>

## Overview

You define your secondary action using `SecondaryButtonBehavior` parameter when creating alerting state of your alarm attributes. The secondary button is optional, you can choose to exclude it. The secondary button displays if you use `custom`.

## Topics

### Enumeration Cases

- [AlarmPresentation.Alert.SecondaryButtonBehavior.countdown](secondarybuttonbehavior-swift.enum/countdown.md): A case that indicates the secondary button is a countdown.
- [AlarmPresentation.Alert.SecondaryButtonBehavior.custom](secondarybuttonbehavior-swift.enum/custom.md): A case that indicates the secondary button has a custom behavior.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a second button

- [secondaryButton](secondarybutton.md): The appearance of the secondary button.
- [secondaryButtonBehavior](secondarybuttonbehavior-swift.property.md): The defined behavior of the second button.
