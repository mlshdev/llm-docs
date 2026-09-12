> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/delay(_:)](https://developer.apple.com/documentation/swiftui/animation/delay(_:))

# delay(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Delays the start of the animation by the specified number of seconds.

## Declaration

```swift
func delay(_ delay: TimeInterval) -> Animation
```

## Parameters

- `delay`: The number of seconds to delay the start of the animation.

<a id="return-value"></a>

## Return Value

An animation with a delayed start.

<a id="discussion"></a>

## Discussion

Use this method to delay the start of an animation. For example, the following code animates the height change of two capsules. Animation of the first [Capsule](../capsule.md) begins immediately. However, animation of the second one doesn’t begin until a half second later.

```swift
struct ContentView: View {
    @State private var adjustBy = 100.0

    var body: some View {
        VStack(spacing: 40) {
            HStack(alignment: .bottom) {
                Capsule()
                    .frame(width: 50, height: 175 - adjustBy)
                    .animation(.easeInOut, value: adjustBy)
                Capsule()
                    .frame(width: 50, height: 175 + adjustBy)
                    .animation(.easeInOut.delay(0.5), value: adjustBy)
            }

            Button("Animate") {
                adjustBy *= -1
            }
        }
    }
}
```

Video: animation-15-delay.mp4

## See Also

### Configuring an animation

- [repeatCount(\_:autoreverses:)](repeatcount%28__autoreverses_%29.md): Repeats the animation for a specific number of times.
- [repeatForever(autoreverses:)](repeatforever%28autoreverses_%29.md): Repeats the animation for the lifespan of the view containing the animation.
- [speed(\_:)](speed%28__%29.md): Changes the duration of an animation by adjusting its speed.
