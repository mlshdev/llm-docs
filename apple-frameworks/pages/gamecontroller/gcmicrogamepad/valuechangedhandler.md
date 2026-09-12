> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad/valuechangedhandler](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad/valuechangedhandler)

# valueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The block that this profile calls when an element’s value changes.

## Declaration

```swift
var valueChangedHandler: GCMicroGamepadValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If multiple elements change values at the same time, the profile calls this block once for each element that changed. If the value of a child element changes, the profile only calls the block for the containing element.

## See Also

### Receiving a callback when input values change

- [GCMicroGamepadValueChangedHandler](../gcmicrogamepadvaluechangedhandler.md): Signature for the block that this profile calls when an element’s value changes.

# valueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The block that this profile calls when an element’s value changes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCMicroGamepadValueChangedHandler valueChangedHandler;
```

<a id="Discussion"></a>

## Discussion

If multiple elements change values at the same time, the profile calls this block once for each element that changed. If the value of a child element changes, the profile only calls the block for the containing element.

## See Also

### Receiving a callback when input values change

- [GCMicroGamepadValueChangedHandler](../gcmicrogamepadvaluechangedhandler.md): Signature for the block that this profile calls when an element’s value changes.
