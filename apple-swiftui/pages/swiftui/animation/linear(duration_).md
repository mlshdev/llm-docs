> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/linear(duration:)](https://developer.apple.com/documentation/swiftui/animation/linear(duration:))

# linear(duration:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An animation that moves at a constant speed during a specified duration.

## Declaration

```swift
static func linear(duration: TimeInterval) -> Animation
```

## Parameters

- `duration`: The length of time, expressed in seconds, that the animation takes to complete.

<a id="return-value"></a>

## Return Value

A linear animation with a specified duration.

<a id="discussion"></a>

## Discussion

A linear animation provides a mechanical feel to the motion because its speed is consistent from start to finish of the animation. This constant speed makes a linear animation ideal for animating the movement of objects where changes in the speed might feel awkward, such as with an activity indicator.

Use `linear(duration:)` when you want to specify the time it takes for the animation to complete. Otherwise, use [linear](linear.md) to perform the animation for a default length of time.

The following code shows an example of using linear animation with a duration of two seconds to animate the movement of a circle as it moves between the leading and trailing edges of the view. The color of the circle also animates from red to blue as it moves across the view.

```swift
struct ContentView: View {
    @State private var isActive = false

    var body: some View {
        VStack(alignment: isActive ? .trailing : .leading) {
            Circle()
                .fill(isActive ? Color.red : Color.blue)
                .frame(width: 50, height: 50)

            Button("Animate") {
                withAnimation(.linear(duration: 2.0)) {
                    isActive.toggle()
                }
            }
            .frame(maxWidth: .infinity)
        }
    }
}
```

Video: animation-07-linear-duration.mp4

## See Also

### Getting linear animations

- [linear](linear.md): An animation that moves at a constant speed.
