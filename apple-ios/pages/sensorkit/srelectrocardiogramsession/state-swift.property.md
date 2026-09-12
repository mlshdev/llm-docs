> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srelectrocardiogramsession/state-swift.property](https://developer.apple.com/documentation/sensorkit/srelectrocardiogramsession/state-swift.property)

# state (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The state of the session used to record the sample.

## Declaration

```swift
var state: SRElectrocardiogramSession.State { get }
```

## See Also

### Getting session information

- [identifier](identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](sessionguidance-swift.property.md): The type of session used to record the sample.
- [SRElectrocardiogramSession.SessionGuidance](sessionguidance-swift.enum.md): The type of session guidance used to record a ECG sample.
- [SRElectrocardiogramSession.State](state-swift.enum.md): The state of a session used to record a ECG sample.

# state (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The state of the session used to record the sample.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) SRElectrocardiogramSessionState state;
```

## See Also

### Getting session information

- [identifier](identifier.md): A unique identifier for the ECG session.
- [sessionGuidance](sessionguidance-swift.property.md): The type of session used to record the sample.
- [SRElectrocardiogramSessionGuidance](sessionguidance-swift.enum.md): The type of session guidance used to record a ECG sample.
- [SRElectrocardiogramSessionState](state-swift.enum.md): The state of a session used to record a ECG sample.
