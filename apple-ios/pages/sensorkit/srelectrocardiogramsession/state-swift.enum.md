> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsession/state-swift.enum](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsession/state-swift.enum)

# SRElectrocardiogramSession.State (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The state of a session used to record a ECG sample.

## Declaration

```swift
enum State
```

## Topics

### States

- [SRElectrocardiogramSession.State.begin](state-swift.enum/begin.md): The session begins.
- [SRElectrocardiogramSession.State.active](state-swift.enum/active.md): The session is ongoing.
- [SRElectrocardiogramSession.State.end](state-swift.enum/end.md): The session ends.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting session information

- [identifier](identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](sessionguidance-swift.property.md): The type of session used to record the sample.
- [SRElectrocardiogramSession.SessionGuidance](sessionguidance-swift.enum.md): The type of session guidance used to record a ECG sample.
- [state](state-swift.property.md): The state of the session used to record the sample.

# SRElectrocardiogramSessionState (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The state of a session used to record a ECG sample.

## Declaration

```objectivec
enum SRElectrocardiogramSessionState : NSInteger;
```

## Topics

### States

- [SRElectrocardiogramSessionStateBegin](state-swift.enum/begin.md): The session begins.
- [SRElectrocardiogramSessionStateActive](state-swift.enum/active.md): The session is ongoing.
- [SRElectrocardiogramSessionStateEnd](state-swift.enum/end.md): The session ends.

## See Also

### Getting session information

- [identifier](identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](sessionguidance-swift.property.md): The type of session used to record the sample.
- [SRElectrocardiogramSessionGuidance](sessionguidance-swift.enum.md): The type of session guidance used to record a ECG sample.
- [state](state-swift.property.md): The state of the session used to record the sample.
