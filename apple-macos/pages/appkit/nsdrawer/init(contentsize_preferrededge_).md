> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/init(contentsize:preferrededge:)](https://developer.apple.com/documentation/appkit/nsdrawer/init(contentsize:preferrededge:))

# init(contentSize:preferredEdge:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Creates a new drawer with the given size on the specified edge of the parent window.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
init(contentSize: NSSize, preferredEdge edge: NSRectEdge)
```

## Parameters

- `contentSize`: The size of the new drawer.
- `edge`: The edge to which to attach the new drawer.

<a id="Discussion"></a>

## Discussion

You must specify the parent window and content view of the drawer using the methods in this class. When you create a drawer in Interface Builder, this constructor is invoked. The NSDrawer Inspector in Interface Builder allows you to set the edge, and you can specify the size by changing the content view in Interface Builder.

See [Positioning and Sizing a Drawer](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Concepts/DrawerSizing.html#//apple_ref/doc/uid/20001524) for additional detail on content size and drawer positioning.

## See Also

### Related Documentation

- [Drawer Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Drawers.html#//apple_ref/doc/uid/10000001i)

### Creating Drawers

- [delegate](delegate.md): Deprecated. The receiver’s delegate.

# initWithContentSize:preferredEdge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Creates a new drawer with the given size on the specified edge of the parent window.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (instancetype) initWithContentSize:(NSSize) contentSize preferredEdge:(NSRectEdge) edge;
```

## Parameters

- `contentSize`: The size of the new drawer.
- `edge`: The edge to which to attach the new drawer.

<a id="Discussion"></a>

## Discussion

You must specify the parent window and content view of the drawer using the methods in this class. When you create a drawer in Interface Builder, this constructor is invoked. The NSDrawer Inspector in Interface Builder allows you to set the edge, and you can specify the size by changing the content view in Interface Builder.

See [Positioning and Sizing a Drawer](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Concepts/DrawerSizing.html#//apple_ref/doc/uid/20001524) for additional detail on content size and drawer positioning.

## See Also

### Related Documentation

- [Drawer Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Drawers.html#//apple_ref/doc/uid/10000001i)

### Creating Drawers

- [delegate](delegate.md): Deprecated. The receiver’s delegate.
