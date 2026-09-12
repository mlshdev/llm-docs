> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointereffect-swift.enum/hover(_:preferredtintmode:prefersshadow:prefersscaledcontent:)](https://developer.apple.com/documentation/uikit/uipointereffect-swift.enum/hover(_:preferredtintmode:prefersshadow:prefersscaledcontent:))

# UIPointerEffect.hover(\_:preferredTintMode:prefersShadow:prefersScaledContent:)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS

An effect where visual changes apply to the view and the pointer retains its default shape.

## Declaration

```swift
case hover(UITargetedPreview, preferredTintMode: UIPointerEffect.TintMode = .overlay, prefersShadow: Bool = false, prefersScaledContent: Bool = true)
```

## Topics

### Specifying the Tint Mode

- [UIPointerEffect.TintMode](tintmode.md): An effect that defines how to apply a tint to a view during a pointer interaction.

## See Also

### Creating a specific effect

- [UIPointerEffect.highlight(\_:)](highlight%28__%29.md): An effect where the pointer slides under the given view and morphs into the view’s shape.
- [UIPointerEffect.lift(\_:)](lift%28__%29.md): An effect where the pointer slides under the given view and disappears as the view scales up and gains a shadow.
