> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslayoutanchor/hasambiguouslayout

# hasAmbiguousLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.

## Declaration

```swift
var hasAmbiguousLayout: Bool { get }
```

## See Also

### Debugging the anchor

- [constraintsAffectingLayout](constraintsaffectinglayout.md): The constraints that impact the layout of the anchor.
- [name](name.md): The name assigned to the anchor for debugging purposes.
- [item](item.md): The layout item used to calculate the anchor’s position.

# hasAmbiguousLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.

## Declaration

```objectivec
@property (readonly) BOOL hasAmbiguousLayout;
```

## See Also

### Debugging the anchor

- [constraintsAffectingLayout](constraintsaffectinglayout.md): The constraints that impact the layout of the anchor.
- [name](name.md): The name assigned to the anchor for debugging purposes.
- [item](item.md): The layout item used to calculate the anchor’s position.
