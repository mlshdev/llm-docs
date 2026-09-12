> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentaction/callasfunction(contenttype:)](https://developer.apple.com/documentation/swiftui/newdocumentaction/callasfunction(contenttype:))

# callAsFunction(contentType:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Presents a new document window.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction(contentType: UTType)
```

## Parameters

- `contentType`: The content type of the document.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [newDocument](../environmentvalues/newdocument.md) action:

```swift
newDocument(contentType: .todoList)

 extension UTType {
     static let todoList = UTType(exportedAs: "com.myApp.todoList")
 }
```

> **Important**

> If your app declares custom uniform type identifiers, include corresponding entries in the app’s `Info.plist` file. For more information, see [Defining file and data types for your app](https://developer.apple.com/documentation/uniformtypeidentifiers/defining-file-and-data-types-for-your-app). Also, remember to specify the supported Document types in the `Info.plist` file as well.

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(\_:)](callasfunction%28__%29.md): Presents a new document window.
- [callAsFunction(contentType:prepareDocument:)](callasfunction%28contenttype_preparedocument_%29.md): Presents a new document window with preset contents.
