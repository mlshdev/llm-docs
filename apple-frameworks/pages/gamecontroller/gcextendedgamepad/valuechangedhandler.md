> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepad/valuechangedhandler](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepad/valuechangedhandler)

# valueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The block that the profile calls when an element’s value changes.

## Declaration

```swift
var valueChangedHandler: GCExtendedGamepadValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If multiple elements change values at the same time, the profile calls this block once for each element that changes. If the value of a subelement changes, the profile only calls the block for the containing element.

## See Also

### Getting change information

- [GCExtendedGamepadValueChangedHandler](../gcextendedgamepadvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.

# valueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The block that the profile calls when an element’s value changes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCExtendedGamepadValueChangedHandler valueChangedHandler;
```

<a id="Discussion"></a>

## Discussion

If multiple elements change values at the same time, the profile calls this block once for each element that changes. If the value of a subelement changes, the profile only calls the block for the containing element.

## See Also

### Getting change information

- [GCExtendedGamepadValueChangedHandler](../gcextendedgamepadvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.
