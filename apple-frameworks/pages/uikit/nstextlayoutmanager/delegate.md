> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlayoutmanager/delegate

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the text layout manager object.

## Declaration

```swift
weak var delegate: (any NSTextLayoutManagerDelegate)? { get set }
```

## See Also

### Managing the layout process

- [NSTextLayoutManagerDelegate](../nstextlayoutmanagerdelegate.md): Optional methods that delegates implement to respond to layout changes.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the text layout manager object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextLayoutManagerDelegate> delegate;
```

## See Also

### Managing the layout process

- [NSTextLayoutManagerDelegate](../nstextlayoutmanagerdelegate.md): Optional methods that delegates implement to respond to layout changes.
