> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcrelativeinput/deltadidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcrelativeinput/deltadidchangehandler)

# deltaDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when the element’s input changes.

## Declaration

```swift
var deltaDidChangeHandler: ((any GCPhysicalInputElement, any GCRelativeInput, Float) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose input changes.
- **`input`**: The input object that represents the relative or delta value.
- **`delta`**: The amount that the input changed since the last time the profile called this block.

## See Also

### Getting the delta value and timestamp

- [delta](delta.md): The most recent amount of change in values that the profile records.
- [lastDeltaTimestamp](lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
- [lastDeltaLatency](lastdeltalatency.md): The time in seconds between the current and the previous delta values.

# deltaDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when the element’s input changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^deltaDidChangeHandler)(id<GCPhysicalInputElement>element, id<GCRelativeInput>input, float delta);
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose input changes.
- **`input`**: The input object that represents the relative or delta value.
- **`delta`**: The amount that the input changed since the last time the profile called this block.

## See Also

### Getting the delta value and timestamp

- [delta](delta.md): The most recent amount of change in values that the profile records.
- [lastDeltaTimestamp](lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
- [lastDeltaLatency](lastdeltalatency.md): The time in seconds between the current and the previous delta values.
