> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/sessionidentifiers](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/sessionidentifiers)

# sessionIdentifiers (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The identifiers for the keyboard sessions that report metrics to the sample.

## Declaration

```swift
var sessionIdentifiers: [String] { get }
```

<a id="Discussion"></a>

## Discussion

A keyboard session begins when the system presents the keyboard and ends when the system dismisses it.

## See Also

### Inspecting Keyboard Configuration and Sessions

- [duration](duration.md): The duration that the report spans.
- [keyboardIdentifier](keyboardidentifier.md): The identifier of the keyboard in the keyboard list.
- [version](version.md): The version of keyboard metrics.
- [width](width.md): The width, in millimeters, of the keyboard in the report.
- [height](height.md): The height, in millimeters, of the keyboard in the report.
- [inputModes](inputmodes.md): The active keyboard languages in the session.

# sessionIdentifiers (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The identifiers for the keyboard sessions that report metrics to the sample.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * sessionIdentifiers;
```

<a id="Discussion"></a>

## Discussion

A keyboard session begins when the system presents the keyboard and ends when the system dismisses it.

## See Also

### Inspecting Keyboard Configuration and Sessions

- [duration](duration.md): The duration that the report spans.
- [keyboardIdentifier](keyboardidentifier.md): The identifier of the keyboard in the keyboard list.
- [version](version.md): The version of keyboard metrics.
- [width](width.md): The width, in millimeters, of the keyboard in the report.
- [height](height.md): The height, in millimeters, of the keyboard in the report.
- [inputModes](inputmodes.md): The active keyboard languages in the session.
