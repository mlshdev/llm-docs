> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/containerframe](https://developer.apple.com/documentation/foundation/nsitemprovider/containerframe)

# containerFrame (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rectangle of the item’s visible content.

## Declaration

```swift
var containerFrame: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property corresponds to the onscreen frame rectangle of the item. This rectangle may or may not intersect the [sourceFrame](sourceframe.md) rectangle of the item. An intersection of the rectangles means that at least part of the item is visible onscreen.

The rectangle in this property may be a clipped version of the source frame or it might be [NSZeroRect](../nszerorect.md) if the item is offscreen or the system can’t determine the clipping rectangle. The system treats a value of [NSZeroRect](../nszerorect.md) as meaning the item is fully visible.

## See Also

### Getting the provider’s frame

- [sourceFrame](sourceframe.md): The rectangle that the item occupies in the host app’s source window.

# containerFrame (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rectangle of the item’s visible content.

## Declaration

```objectivec
@property (readonly) NSRect containerFrame;
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property corresponds to the onscreen frame rectangle of the item. This rectangle may or may not intersect the [sourceFrame](sourceframe.md) rectangle of the item. An intersection of the rectangles means that at least part of the item is visible onscreen.

The rectangle in this property may be a clipped version of the source frame or it might be [NSZeroRect](../nszerorect.md) if the item is offscreen or the system can’t determine the clipping rectangle. The system treats a value of [NSZeroRect](../nszerorect.md) as meaning the item is fully visible.

## See Also

### Getting the provider’s frame

- [sourceFrame](sourceframe.md): The rectangle that the item occupies in the host app’s source window.
