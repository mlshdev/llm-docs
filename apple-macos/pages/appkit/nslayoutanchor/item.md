> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslayoutanchor/item

# item (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The layout item used to calculate the anchor’s position.

## Declaration

```swift
weak var item: AnyObject? { get }
```

## See Also

### Debugging the anchor

- [constraintsAffectingLayout](constraintsaffectinglayout.md): The constraints that impact the layout of the anchor.
- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.
- [name](name.md): The name assigned to the anchor for debugging purposes.

# item (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The layout item used to calculate the anchor’s position.

## Declaration

```objectivec
@property (weak, readonly, nullable) id item;
```

## See Also

### Debugging the anchor

- [constraintsAffectingLayout](constraintsaffectinglayout.md): The constraints that impact the layout of the anchor.
- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.
- [name](name.md): The name assigned to the anchor for debugging purposes.
