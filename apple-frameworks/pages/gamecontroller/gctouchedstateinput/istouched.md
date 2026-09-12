> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gctouchedstateinput/istouched](https://developer.apple.com/documentation/gamecontroller/gctouchedstateinput/istouched)

# isTouched (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the user touches the button.

## Declaration

```swift
var isTouched: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For controllers that support capacitive touch, the user can start touching the button without pressure when the value property is `0`. For controllers that don’t support capacitive touch, the user starts touching the button when the value property is greater than `0`.

## See Also

### Getting change information

- [lastTouchedStateTimestamp](lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [lastTouchedStateLatency](lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
- [touchedDidChangeHandler](toucheddidchangehandler.md): A block that the element calls when its touch value changes.

# touched (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the user touches the button.

## Declaration

```objectivec
@property (readonly, getter=isTouched) BOOL touched;
```

<a id="Discussion"></a>

## Discussion

For controllers that support capacitive touch, the user can start touching the button without pressure when the value property is `0`. For controllers that don’t support capacitive touch, the user starts touching the button when the value property is greater than `0`.

## See Also

### Getting change information

- [lastTouchedStateTimestamp](lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [lastTouchedStateLatency](lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
- [touchedDidChangeHandler](toucheddidchangehandler.md): A block that the element calls when its touch value changes.
