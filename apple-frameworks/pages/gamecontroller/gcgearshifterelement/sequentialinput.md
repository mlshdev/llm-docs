> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgearshifterelement/sequentialinput](https://developer.apple.com/documentation/gamecontroller/gcgearshifterelement/sequentialinput)

# sequentialInput (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The input object for a sequential gear shift.

## Declaration

```swift
var sequentialInput: (any GCRelativeInput)? { get }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, this gear shift isn’t a sequential gear shift. A sequential gear shift requires the user to move through the gears in sequence.

## See Also

### Accessing input values

- [patternInput](patterninput.md): The input object for a pattern gear shift.

# sequentialInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The input object for a sequential gear shift.

## Declaration

```objectivec
@property (readonly, nullable) id<GCRelativeInput> sequentialInput;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, this gear shift isn’t a sequential gear shift. A sequential gear shift requires the user to move through the gears in sequence.

## See Also

### Accessing input values

- [patternInput](patterninput.md): The input object for a pattern gear shift.
