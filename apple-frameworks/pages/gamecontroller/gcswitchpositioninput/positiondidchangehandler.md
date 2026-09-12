> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput/positiondidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/positiondidchangehandler)

# positionDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when the value of the switch changes.

## Declaration

```swift
var positionDidChangeHandler: ((any GCPhysicalInputElement, any GCSwitchPositionInput, Int) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose position changes.
- **`input`**: The input object that represents the position.
- **`position`**: The new position of the element.

## See Also

### Getting the position

- [position](position.md): The position of the switch.
- [lastPositionTimestamp](lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
- [lastPositionLatency](lastpositionlatency.md): The time in seconds between the current and previous positions.

# positionDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when the value of the switch changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^positionDidChangeHandler)(id<GCPhysicalInputElement>element, id<GCSwitchPositionInput>input, NSInteger position);
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose position changes.
- **`input`**: The input object that represents the position.
- **`position`**: The new position of the element.

## See Also

### Getting the position

- [position](position.md): The position of the switch.
- [lastPositionTimestamp](lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
- [lastPositionLatency](lastpositionlatency.md): The time in seconds between the current and previous positions.
