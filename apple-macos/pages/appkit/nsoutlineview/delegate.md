> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/delegate](https://developer.apple.com/documentation/appkit/nsoutlineview/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The outline view’s delegate.

## Declaration

```swift
weak var delegate: (any NSOutlineViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSOutlineViewDelegate](../nsoutlineviewdelegate.md) protocol. Note that in versions of macOS prior to v10.12, the table view did not retain the delegate in a managed memory environment.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The outline view’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSOutlineViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSOutlineViewDelegate](../nsoutlineviewdelegate.md) protocol. Note that in versions of macOS prior to v10.12, the table view did not retain the delegate in a managed memory environment.
