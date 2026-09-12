> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openimmersivespaceaction/callasfunction(value:)](https://developer.apple.com/documentation/swiftui/openimmersivespaceaction/callasfunction(value:))

# callAsFunction(value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Presents the immersive space that handles the type of the presented value.

## Declaration

```swift
@discardableResult @MainActor func callAsFunction<D>(value: D) async -> OpenImmersiveSpaceAction.Result where D : Decodable, D : Encodable, D : Hashable
```

## Parameters

- `value`: The value to present.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [openImmersiveSpace](../environmentvalues/openimmersivespace.md) action with a value:

```swift
await openImmersiveSpace(value: planet.ID)
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/declarations/#Methods-with-Special-Names) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(id:)](callasfunction%28id_%29.md): Presents an immersive space for the scene with the specified identifier.
- [callAsFunction(id:value:)](callasfunction%28id_value_%29.md): Presents the immersive space that your app defines for the specified identifier and that handles the type of the presented value.
