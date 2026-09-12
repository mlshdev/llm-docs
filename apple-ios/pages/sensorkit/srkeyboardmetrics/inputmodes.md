> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/inputmodes](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/inputmodes)

# inputModes (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The active keyboard languages in the session.

## Declaration

```swift
var inputModes: [String] { get }
```

<a id="Discussion"></a>

## Discussion

An example array entry is `en_US`. A user may switch between multiple languages in the same session.

## See Also

### Inspecting Keyboard Configuration and Sessions

- [duration](duration.md): The duration that the report spans.
- [keyboardIdentifier](keyboardidentifier.md): The identifier of the keyboard in the keyboard list.
- [version](version.md): The version of keyboard metrics.
- [width](width.md): The width, in millimeters, of the keyboard in the report.
- [height](height.md): The height, in millimeters, of the keyboard in the report.
- [sessionIdentifiers](sessionidentifiers.md): The identifiers for the keyboard sessions that report metrics to the sample.

# inputModes (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The active keyboard languages in the session.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * inputModes;
```

<a id="Discussion"></a>

## Discussion

An example array entry is `en_US`. A user may switch between multiple languages in the same session.

## See Also

### Inspecting Keyboard Configuration and Sessions

- [duration](duration.md): The duration that the report spans.
- [keyboardIdentifier](keyboardidentifier.md): The identifier of the keyboard in the keyboard list.
- [version](version.md): The version of keyboard metrics.
- [width](width.md): The width, in millimeters, of the keyboard in the report.
- [height](height.md): The height, in millimeters, of the keyboard in the report.
- [sessionIdentifiers](sessionidentifiers.md): The identifiers for the keyboard sessions that report metrics to the sample.
