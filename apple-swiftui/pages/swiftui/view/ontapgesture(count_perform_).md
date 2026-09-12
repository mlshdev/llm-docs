> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ontapgesture(count:perform:)](https://developer.apple.com/documentation/swiftui/view/ontapgesture(count:perform:))

# onTapGesture(count:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform when this view recognizes a tap gesture.

## Declaration

```swift
nonisolated func onTapGesture(count: Int = 1, perform action: @escaping () -> Void) -> some View

```

## Parameters

- `count`: The number of taps or clicks required to trigger the action closure provided in `action`. Defaults to `1`.
- `action`: The action to perform.

<a id="discussion"></a>

## Discussion

Use this method to perform the specified `action` when the user clicks or taps on the view or container `count` times.

> **Note**

> If you create a control that’s functionally equivalent to a [Button](../button.md), use [ButtonStyle](../buttonstyle.md) to create a customized button instead.

In the example below, the color of the heart images changes to a random color from the `colors` array whenever the user clicks or taps on the view twice:

```swift
struct TapGestureExample: View {
    let colors: [Color] = [.gray, .red, .orange, .yellow,
                           .green, .blue, .purple, .pink]
    @State private var fgColor: Color = .gray

    var body: some View {
        Image(systemName: "heart.fill")
            .resizable()
            .frame(width: 200, height: 200)
            .foregroundColor(fgColor)
            .onTapGesture(count: 2) {
                fgColor = colors.randomElement()!
            }
    }
}
```

![A screenshot of a view of a heart.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-TapGesture@2x.png)

## See Also

### Recognizing tap gestures

- [onTapGesture(count:coordinateSpace:perform:)](ontapgesture%28count_coordinatespace_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onTapGesture(count:coordinateSpace:inputKinds:perform:)](ontapgesture%28count_coordinatespace_inputkinds_perform_%29.md): Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [TapGesture](../tapgesture.md): A gesture that recognizes one or more taps.
- [SpatialTapGesture](../spatialtapgesture.md): A gesture that recognizes one or more taps and reports their location.
