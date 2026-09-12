> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/preferredsurroundingseffect(_:)](https://developer.apple.com/documentation/swiftui/view/preferredsurroundingseffect(_:))

# preferredSurroundingsEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Applies an effect to passthrough video.

## Declaration

```swift
nonisolated func preferredSurroundingsEffect(_ effect: SurroundingsEffect?) -> some View

```

## Parameters

- `effect`: The effect that you want to apply.

<a id="return-value"></a>

## Return Value

A view that exhibits the specified preference.

<a id="discussion"></a>

## Discussion

Use this modifier to indicate a preference for the appearance of passthrough video when displaying the modified view. For example, you can enhance the immersiveness of a scene that uses the default [mixed](../immersionstyle/mixed.md) immersion style by applying the [systemDark](../surroundingseffect/systemdark.md) preference to a view inside the scene:

```swift
ImmersiveSpace(id: "orbit") {
    Orbit()
        .preferredSurroundingsEffect(.dark)
}
```

When the system presents the `Orbit` view in the above code, it also dims passthrough video. This helps to draw attention to the scene’s virtual content while still enabling people to remain aware of their surroundings.

> **Note**

> This modifier expresses a preference, but the system might not be able to honor it.

Use a value of `nil` to indicate that you have no preference. You typically do this to counteract a preference expressed by a view lower in the view hierarchy.

## See Also

### Configuring passthrough

- [SurroundingsEffect](../surroundingseffect.md): Effects that the system can apply to passthrough video.
- [breakthroughEffect(\_:)](breakthrougheffect%28__%29.md): Ensures that the view is always visible to the user, even when other content is occluding it, like 3D models.
- [BreakthroughEffect](../breakthrougheffect.md)
