> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/sourceframe](https://developer.apple.com/documentation/foundation/nsitemprovider/sourceframe)

# sourceFrame (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rectangle that the item occupies in the host app’s source window.

## Declaration

```swift
var sourceFrame: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the rectangle, in screen coordinates, that encloses the item. This rectangle includes areas that might be clipped and not currently visible onscreen.

## See Also

### Getting the provider’s frame

- [containerFrame](containerframe.md): The rectangle of the item’s visible content.

# sourceFrame (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The rectangle that the item occupies in the host app’s source window.

## Declaration

```objectivec
@property (readonly) NSRect sourceFrame;
```

<a id="Discussion"></a>

## Discussion

This property contains the rectangle, in screen coordinates, that encloses the item. This rectangle includes areas that might be clipped and not currently visible onscreen.

## See Also

### Getting the provider’s frame

- [containerFrame](containerframe.md): The rectangle of the item’s visible content.
