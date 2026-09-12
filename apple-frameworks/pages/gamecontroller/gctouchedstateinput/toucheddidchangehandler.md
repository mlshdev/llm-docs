> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gctouchedstateinput/toucheddidchangehandler](https://developer.apple.com/documentation/gamecontroller/gctouchedstateinput/toucheddidchangehandler)

# touchedDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A block that the element calls when its touch value changes.

## Declaration

```swift
var touchedDidChangeHandler: ((any GCPhysicalInputElement, any GCTouchedStateInput, Bool) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the latest state of the touch input. The block’s parameters are:

- **element**: The element whose value changes.
- **input**: The input of the element that changes.
- **touched**: A Boolean value that indicates whether the user touches the button.

## See Also

### Getting change information

- [isTouched](istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateTimestamp](lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [lastTouchedStateLatency](lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.

# touchedDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A block that the element calls when its touch value changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^touchedDidChangeHandler)(id<GCPhysicalInputElement>element, id<GCTouchedStateInput>input, BOOL touched);
```

<a id="Discussion"></a>

## Discussion

Use this property to get the latest state of the touch input. The block’s parameters are:

- **element**: The element whose value changes.
- **input**: The input of the element that changes.
- **touched**: A Boolean value that indicates whether the user touches the button.

## See Also

### Getting change information

- [touched](istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateTimestamp](lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [lastTouchedStateLatency](lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
