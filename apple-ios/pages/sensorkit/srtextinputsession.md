> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srtextinputsession](https://developer.apple.com/documentation/sensorkit/srtextinputsession)

# SRTextInputSession (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The characters a user types for a particular keyboard.

## Declaration

```swift
class SRTextInputSession
```

<a id="overview"></a>

## Overview

The framework instantiates a new instance of this class every time the keyboard displays after dismissal.

## Topics

### Identifying the Session

- [sessionIdentifier](srtextinputsession/sessionidentifier.md): A unique identifier for the keyboard session.

### Timing Text Input

- [duration](srtextinputsession/duration.md): The length of time, in seconds, that the session spans.

### Inspecting Text Source

- [sessionType](srtextinputsession/sessiontype-swift.property.md)
- [SRTextInputSession.SessionType](srtextinputsession/sessiontype-swift.enum.md): Methods to input text during a session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Text Input

- [textInputSessions](srdeviceusagereport/applicationusage/textinputsessions.md): The text input session types that occur during application usage.

# SRTextInputSession (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The characters a user types for a particular keyboard.

## Declaration

```objectivec
@interface SRTextInputSession : NSObject
```

<a id="overview"></a>

## Overview

The framework instantiates a new instance of this class every time the keyboard displays after dismissal.

## Topics

### Identifying the Session

- [sessionIdentifier](srtextinputsession/sessionidentifier.md): A unique identifier for the keyboard session.

### Timing Text Input

- [duration](srtextinputsession/duration.md): The length of time, in seconds, that the session spans.

### Inspecting Text Source

- [sessionType](srtextinputsession/sessiontype-swift.property.md)
- [SRTextInputSessionType](srtextinputsession/sessiontype-swift.enum.md): Methods to input text during a session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Inspecting Text Input

- [textInputSessions](srdeviceusagereport/applicationusage/textinputsessions.md): The text input session types that occur during application usage.
