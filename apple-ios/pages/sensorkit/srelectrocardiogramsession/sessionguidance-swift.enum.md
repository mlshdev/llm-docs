> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsession/sessionguidance-swift.enum](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsession/sessionguidance-swift.enum)

# SRElectrocardiogramSession.SessionGuidance (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The type of session guidance used to record a ECG sample.

## Declaration

```swift
enum SessionGuidance
```

## Topics

### Types

- [SRElectrocardiogramSession.SessionGuidance.guided](sessionguidance-swift.enum/guided.md): The system coaches the user to guide the ECG readings.
- [SRElectrocardiogramSession.SessionGuidance.unguided](sessionguidance-swift.enum/unguided.md): The system doesn’t coach the user to guide the ECG readings.

### Initializers

- [init(rawValue:)](sessionguidance-swift.enum/init%28rawvalue_%29.md)

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
- [state](state-swift.property.md): The state of the session used to record the sample.
- [SRElectrocardiogramSession.State](state-swift.enum.md): The state of a session used to record a ECG sample.

# SRElectrocardiogramSessionGuidance (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The type of session guidance used to record a ECG sample.

## Declaration

```objectivec
enum SRElectrocardiogramSessionGuidance : NSInteger;
```

## Topics

### Types

- [SRElectrocardiogramSessionGuidanceGuided](sessionguidance-swift.enum/guided.md): The system coaches the user to guide the ECG readings.
- [SRElectrocardiogramSessionGuidanceUnguided](sessionguidance-swift.enum/unguided.md): The system doesn’t coach the user to guide the ECG readings.

## See Also

### Getting session information

- [identifier](identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](sessionguidance-swift.property.md): The type of session used to record the sample.
- [state](state-swift.property.md): The state of the session used to record the sample.
- [SRElectrocardiogramSessionState](state-swift.enum.md): The state of a session used to record a ECG sample.
