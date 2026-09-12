> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/valuechangedhandler](https://developer.apple.com/documentation/gamecontroller/gcmotion/valuechangedhandler)

# valueChangedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The block that the profile calls when an element’s value changes.

## Declaration

```swift
var valueChangedHandler: GCMotionValueChangedHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If multiple elements change values at the same time, the profile calls this block once for each element that changes. If the value of a subelement changes, the profile only calls the block for the containing element.

## See Also

### Receiving a Callback When Input Values Change

- [GCMotionValueChangedHandler](../gcmotionvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.

# valueChangedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The block that the profile calls when an element’s value changes.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCMotionValueChangedHandler valueChangedHandler;
```

<a id="Discussion"></a>

## Discussion

If multiple elements change values at the same time, the profile calls this block once for each element that changes. If the value of a subelement changes, the profile only calls the block for the containing element.

## See Also

### Receiving a Callback When Input Values Change

- [GCMotionValueChangedHandler](../gcmotionvaluechangedhandler.md): The signature for the block that the profile calls when an element’s value changes.
