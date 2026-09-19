> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslayoutanchor/constraintsaffectinglayout

# constraintsAffectingLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The constraints that impact the layout of the anchor.

## Declaration

```swift
var constraintsAffectingLayout: [NSLayoutConstraint] { get }
```

## See Also

### Debugging the anchor

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.
- [name](name.md): The name assigned to the anchor for debugging purposes.
- [item](item.md): The layout item used to calculate the anchor’s position.

# constraintsAffectingLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The constraints that impact the layout of the anchor.

## Declaration

```objectivec
@property (readonly) NSArray<NSLayoutConstraint *> * constraintsAffectingLayout;
```

## See Also

### Debugging the anchor

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.
- [name](name.md): The name assigned to the anchor for debugging purposes.
- [item](item.md): The layout item used to calculate the anchor’s position.
