> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/opendocumentaction/callasfunction(at:)](https://developer.apple.com/documentation/swiftui/opendocumentaction/callasfunction(at:))

# callAsFunction(at:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Opens the document at the specified file URL.

## Declaration

```swift
@MainActor func callAsFunction(at url: URL) async throws
```

## Parameters

- `url`: A file URL that points at an existing document.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [openDocument](../environmentvalues/opendocument.md) action:

```swift
do {
    try await openDocument(at: url)
} catch {
    // Handle error
}
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
