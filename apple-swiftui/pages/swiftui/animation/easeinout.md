> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/easeinout](https://developer.apple.com/documentation/swiftui/animation/easeinout)

# easeInOut

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An animation that combines the behaviors of in and out easing animations.

## Declaration

```swift
static var easeInOut: Animation { get }
```

<a id="return-value"></a>

## Return Value

An ease-in ease-out animation with the default duration.

<a id="discussion"></a>

## Discussion

An easing animation provides motion with a natural feel by varying the acceleration and deceleration of the animation, which matches how things tend to move in reality. An ease in and out animation starts slowly, increasing its speed towards the halfway point, and finally decreasing the speed towards the end of the animation.

The `easeInOut` animation has a default duration of 0.35 seconds. To specify the duration, use the [easeInOut(duration:)](easeinout%28duration_%29.md) method.

The following code shows an example of animating the size changes of a [Circle](../circle.md) using an ease in and out animation.

```swift
struct ContentView: View {
    @State private var scale = 0.5

    var body: some View {
        VStack {
            Circle()
                .scale(scale)
                .animation(.easeInOut, value: scale)
            HStack {
                Button("+") { scale += 0.1 }
                Button("-") { scale -= 0.1 }
            }
        }
    }
}
```

Video: animation-12-easeineaseout.mp4

## See Also

### Getting eased animations

- [easeIn](easein.md): An animation that starts slowly and then increases speed towards the end of the movement.
- [easeIn(duration:)](easein%28duration_%29.md): An animation with a specified duration that starts slowly and then increases speed towards the end of the movement.
- [easeOut](easeout.md): An animation that starts quickly and then slows towards the end of the movement.
- [easeOut(duration:)](easeout%28duration_%29.md): An animation with a specified duration that starts quickly and then slows towards the end of the movement.
- [easeInOut(duration:)](easeinout%28duration_%29.md): An animation with a specified duration that combines the behaviors of in and out easing animations.
