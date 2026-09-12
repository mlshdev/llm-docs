> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openimmersivespaceaction/callasfunction(foveatedstreaming:)](https://developer.apple.com/documentation/swiftui/openimmersivespaceaction/callasfunction(foveatedstreaming:))

# callAsFunction(foveatedStreaming:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.4+

Presents the immersive space that your app defines for the specified foveated streaming session.

## Declaration

```swift
@discardableResult @MainActor func callAsFunction(foveatedStreaming session: FoveatedStreamingSession) async -> OpenImmersiveSpaceAction.Result
```

## Parameters

- `session`: The foveated streaming session associated with the immersive space to present.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the `<doc://com.apple.documentation/documentation/swiftui/environmentvalues/openimmersivespace>` action with a foveated streaming session:

```swift
await openImmersiveSpace(foveatedStreaming: session)
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
