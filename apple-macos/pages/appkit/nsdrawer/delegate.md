> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/delegate](https://developer.apple.com/documentation/appkit/nsdrawer/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The receiver’s delegate.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
unowned(unsafe) var delegate: (any NSDrawerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You may find it useful to associate a delegate with a drawer, especially since drawers do not open and close instantly. A drawer’s delegate can better regulate drawer behavior.

## See Also

### Creating Drawers

- [init(contentSize:preferredEdge:)](init%28contentsize_preferrededge_%29.md): Deprecated. Creates a new drawer with the given size on the specified edge of the parent window.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The receiver’s delegate.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
@property (assign, nullable) id<NSDrawerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You may find it useful to associate a delegate with a drawer, especially since drawers do not open and close instantly. A drawer’s delegate can better regulate drawer behavior.

## See Also

### Creating Drawers

- [initWithContentSize:preferredEdge:](init%28contentsize_preferrededge_%29.md): Deprecated. Creates a new drawer with the given size on the specified edge of the parent window.
