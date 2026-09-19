> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsanimation/delegate

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
