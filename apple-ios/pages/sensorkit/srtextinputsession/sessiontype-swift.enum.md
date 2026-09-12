> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srtextinputsession/sessiontype-swift.enum](https://developer.apple.com/documentation/sensorkit/srtextinputsession/sessiontype-swift.enum)

# SRTextInputSession.SessionType (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Methods to input text during a session.

## Declaration

```swift
enum SessionType
```

<a id="overview"></a>

## Overview

This class defines available options for the [sessionType](sessiontype-swift.property.md) property.

## Topics

### Sources

- [SRTextInputSession.SessionType.dictation](sessiontype-swift.enum/dictation.md): Indicates that the session contains spoken text.
- [SRTextInputSession.SessionType.keyboard](sessiontype-swift.enum/keyboard.md): Indicates that the session contains text from keyboard input.
- [SRTextInputSession.SessionType.pencil](sessiontype-swift.enum/pencil.md): Indicates that the session contains text drawn with Apple Pencil.
- [SRTextInputSession.SessionType.thirdPartyKeyboard](sessiontype-swift.enum/thirdpartykeyboard.md): Indicates that the session contains text from a third-party keyboard.

### Initializers

- [init(rawValue:)](sessiontype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Text Source

- [sessionType](sessiontype-swift.property.md)

# SRTextInputSessionType (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Methods to input text during a session.

## Declaration

```objectivec
enum SRTextInputSessionType : NSInteger;
```

<a id="overview"></a>

## Overview

This class defines available options for the [sessionType](sessiontype-swift.property.md) property.

## Topics

### Sources

- [SRTextInputSessionTypeDictation](sessiontype-swift.enum/dictation.md): Indicates that the session contains spoken text.
- [SRTextInputSessionTypeKeyboard](sessiontype-swift.enum/keyboard.md): Indicates that the session contains text from keyboard input.
- [SRTextInputSessionTypePencil](sessiontype-swift.enum/pencil.md): Indicates that the session contains text drawn with Apple Pencil.
- [SRTextInputSessionTypeThirdPartyKeyboard](sessiontype-swift.enum/thirdpartykeyboard.md): Indicates that the session contains text from a third-party keyboard.

## See Also

### Inspecting Text Source

- [sessionType](sessiontype-swift.property.md)
