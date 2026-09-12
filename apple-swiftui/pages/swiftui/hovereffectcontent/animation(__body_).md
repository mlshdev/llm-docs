> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent/animation(_:body:)](https://developer.apple.com/documentation/swiftui/hovereffectcontent/animation(_:body:))

# animation(\_:body:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Applies the given [Animation](../animation.md) to all effects within the `body` closure.

## Declaration

```swift
func animation(_ animation: Animation?, body: (EmptyHoverEffectContent) -> some HoverEffectContent) -> some HoverEffectContent

```

## Parameters

- `animation`: The animation to use for the effect transition. If `nil` the effects will not animate.
- `body`: A block used to specify the effects to animate. You must use the provided content to build the effects, or behavior is undefined.

<a id="return-value"></a>

## Return Value

A new effect that combines the effects defined in `body` with

<a id="discussion"></a>

## Discussion

Any effects defined within the `body` closure will be combined with this effect, and the `animation` will used to animate those effects’ changes when the effects are applied.

In the following example, the view will use the `.easeIn` animation when activating the effect, but `.easeOut` when the effect becomes inactive:

```swift
Color.red
    .hoverEffect { effect, isActive, proxy in
        effect.animation(isActive ? .easeIn : .easeOut) {
            $0.opacity(isActive ? 1 : 0.5)
        }
    }
```
