> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/delegate](https://developer.apple.com/documentation/appkit/nsanimation/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The animation delegate.

## Declaration

```swift
weak var delegate: (any NSAnimationDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSAnimationDelegate](../nsanimationdelegate.md).

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The animation delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSAnimationDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSAnimationDelegate](../nsanimationdelegate.md).
