> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespace/init(for:content:)](https://developer.apple.com/documentation/swiftui/immersivespace/init(for:content:))

# init(for:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates the immersive space for a specified type of presented data.

## Declaration

```swift
nonisolated init(for type: Data.Type, @ImmersiveSpaceContentBuilder content: @escaping (Binding<Data?>) -> Content)
```

## Parameters

- `type`: The type of presented data this immersive space accepts.
- `content`: An immersive space content builder that defines the content for each instance of the immersive space. The closure receives a binding to the value that you pass to the [openImmersiveSpace](../environmentvalues/openimmersivespace.md) action when you call that action to open an immersive space. The system automatically persists and restores the value of this binding during state restoration.

<a id="discussion"></a>

## Discussion

The space uses the specified content builder to form the content. Your app invokes this initializer when it presents a value of the specified `type` using the [openImmersiveSpace](../environmentvalues/openimmersivespace.md) action.

## See Also

### Creating a data-driven immersive space

- [init(id:for:content:)](init%28id_for_content_%29.md): Creates the immersive space associated with an identifier for a specified type of presented data.
