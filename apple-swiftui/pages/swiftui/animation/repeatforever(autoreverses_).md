> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/repeatforever(autoreverses:)](https://developer.apple.com/documentation/swiftui/animation/repeatforever(autoreverses:))

# repeatForever(autoreverses:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Repeats the animation for the lifespan of the view containing the animation.

## Declaration

```swift
func repeatForever(autoreverses: Bool = true) -> Animation
```

## Parameters

- `autoreverses`: A Boolean value that indicates whether the animation sequence plays in reverse after playing forward.

<a id="return-value"></a>

## Return Value

An animation that continuously repeats.

<a id="discussion"></a>

## Discussion

Use this method to repeat the animation until the instance of the view no longer exists, or the view’s explicit or structural identity changes. For example, the following code continuously rotates a gear symbol for the lifespan of the view.

```swift
struct ContentView: View {
    @State private var rotationDegrees = 0.0

    private var animation: Animation {
        .linear
        .speed(0.1)
        .repeatForever(autoreverses: false)
    }

    var body: some View {
        Image(systemName: "gear")
            .font(.system(size: 86))
            .rotationEffect(.degrees(rotationDegrees))
            .onAppear {
                withAnimation(animation) {
                    rotationDegrees = 360.0
                }
            }
    }
}
```

Video: animation-17-repeat-forever.mp4

## See Also

### Configuring an animation

- [delay(\_:)](delay%28__%29.md): Delays the start of the animation by the specified number of seconds.
- [repeatCount(\_:autoreverses:)](repeatcount%28__autoreverses_%29.md): Repeats the animation for a specific number of times.
- [speed(\_:)](speed%28__%29.md): Changes the duration of an animation by adjusting its speed.
