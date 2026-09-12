> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentaction/callasfunction(_:)](https://developer.apple.com/documentation/swiftui/newdocumentaction/callasfunction(_:))

# callAsFunction(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Presents a new document window.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction<D>(_ newDocument: @autoclosure @escaping @Sendable () -> D) where D : FileDocument
```

## Parameters

- `newDocument`: The new file document to present.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [newDocument](../environmentvalues/newdocument.md) action:

```swift
newDocument(TextDocument(text: selectedText))
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(contentType:)](callasfunction%28contenttype_%29.md): Presents a new document window.
- [callAsFunction(contentType:prepareDocument:)](callasfunction%28contenttype_preparedocument_%29.md): Presents a new document window with preset contents.
