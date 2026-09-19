> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextlayoutmanager/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the text layout manager object.

## Declaration

```swift
weak var delegate: (any NSTextLayoutManagerDelegate)? { get set }
```

## See Also

### Managing the layout process

- [NSTextLayoutManagerDelegate](../nstextlayoutmanagerdelegate.md): Optional methods that delegates implement to respond to layout changes.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the text layout manager object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextLayoutManagerDelegate> delegate;
```

## See Also

### Managing the layout process

- [NSTextLayoutManagerDelegate](../nstextlayoutmanagerdelegate.md): Optional methods that delegates implement to respond to layout changes.
