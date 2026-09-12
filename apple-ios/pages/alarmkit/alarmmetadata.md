> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmetadata](https://developer.apple.com/documentation/alarmkit/alarmmetadata)

# AlarmMetadata

**Framework:** AlarmKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A metadata object that contains information about an alarm.

## Declaration

```swift
protocol AlarmMetadata : Decodable, Encodable, Hashable, Sendable
```

<a id="overview"></a>

## Overview

Provide an implementation of this for your own custom content or other information. The implementation can be empty if you don’t want to provide any additional data for your alarm UI.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [AlarmPresentation](alarmpresentation.md): An object that describes the content required for the alarm UI.
- [AlarmPresentationState](alarmpresentationstate.md): The system managed content state of an alarm Live Activity.
- [AlarmAttributes](alarmattributes.md): An object that contains all information necessary for the alarm UI.
