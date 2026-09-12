> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/simultaneousgesture(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/simultaneousgesture(_:isenabled:))

# simultaneousGesture(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Attaches a gesture to the view to process simultaneously with gestures defined by the view.

## Declaration

```swift
@export(implementation) nonisolated func simultaneousGesture<T>(_ gesture: T, isEnabled: Bool) -> some View where T : Gesture

```

## Parameters

- `gesture`: A gesture to attach to the view.
- `isEnabled`: Whether the added gesture is enabled.

<a id="discussion"></a>

## Discussion

Use this method when you need to define and process  a view specific gesture simultaneously with the same priority as the view’s existing gestures. The example below defines a custom gesture that prints a message to the console and attaches it to the view’s [VStack](../vstack.md). Inside the [VStack](../vstack.md) is a red heart [Image](../image.md) defines its own [TapGesture](../tapgesture.md) handler that also prints a message to the console and a blue rectangle with no custom gesture handlers.

You can also use the `isEnabled` parameter to conditionally disable the gesture.

Tapping or clicking the “heart” image sends two messages to the console: one for the image’s tap gesture handler, and the other from a custom gesture handler attached to the enclosing vertical stack. Tapping or clicking on the blue rectangle results only in the single message to the console from the tap recognizer attached to the [VStack](../vstack.md):

```swift
struct SimultaneousGestureExample: View {
    @State private var message = "Message"
    var isGestureEnabled: Bool
    let newGesture = TapGesture().onEnded {
        print("Gesture on VStack.")
    }

    var body: some View {
        VStack(spacing:25) {
            Image(systemName: "heart.fill")
                .resizable()
                .frame(width: 75, height: 75)
                .padding()
                .foregroundColor(.red)
                .onTapGesture {
                    print("Gesture on image.")
                }
            Rectangle()
                .fill(Color.blue)
        }
        .simultaneousGesture(
            newGesture, isEnabled: isGestureEnabled)
        .frame(width: 200, height: 200)
        .border(Color.purple)
    }
}
```

## See Also

### Combining gestures

- [Composing SwiftUI gestures](../composing-swiftui-gestures.md): Combine gestures to create complex interactions.
- [simultaneousGesture(\_:including:)](simultaneousgesture%28__including_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [simultaneousGesture(\_:name:isEnabled:)](simultaneousgesture%28__name_isenabled_%29.md): Attaches a gesture to the view to process simultaneously with gestures defined by the view.
- [SequenceGesture](../sequencegesture.md): A gesture that’s a sequence of two gestures.
- [SimultaneousGesture](../simultaneousgesture.md): A gesture containing two gestures that can happen at the same time with neither of them preceding the other.
- [ExclusiveGesture](../exclusivegesture.md): A gesture that consists of two gestures where only one of them can succeed.
