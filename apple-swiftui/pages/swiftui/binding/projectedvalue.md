> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/binding/projectedvalue](https://developer.apple.com/documentation/swiftui/binding/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A projection of the binding value that returns a binding.

## Declaration

```swift
var projectedValue: Binding<Value> { get }
```

<a id="discussion"></a>

## Discussion

Use the projected value to pass a binding value down a view hierarchy. To get the `projectedValue`, prefix the property variable with `$`. For example, in the following code example `PlayerView` projects a binding of the state property `isPlaying` to the `PlayButton` view using `$isPlaying`.

```swift
struct PlayerView: View {
    var episode: Episode
    @State private var isPlaying: Bool = false

    var body: some View {
        VStack {
            Text(episode.title)
                .foregroundStyle(isPlaying ? .primary : .secondary)
            PlayButton(isPlaying: $isPlaying)
        }
    }
}
```

## See Also

### Getting the value

- [wrappedValue](wrappedvalue.md): The underlying value referenced by the binding variable.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29.md): Returns a binding to the resulting value of a given key path.
