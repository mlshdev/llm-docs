> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/newdocumentaction/callasfunction(contenttype:preparedocument:)](https://developer.apple.com/documentation/swiftui/newdocumentaction/callasfunction(contenttype:preparedocument:))

# callAsFunction(contentType:prepareDocument:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Presents a new document window with preset contents.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction(contentType: UTType, prepareDocument: @escaping (ModelContext) -> Void)
```

## Parameters

- `contentType`: The content type of the document.
- `prepareDocument`: The closure that accepts `ModelContext` associated with the new document. Use this closure to set the document’s initial contents before it is displayed: insert preconfigured models in the provided `ModelContext`.

<a id="discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [newDocument](../environmentvalues/newdocument.md) action.

For example, a Todo app might have a way to create a sample prepopulated Todo list as a part of onboarding experience:

```swift
newDocument(contentType: .todoList) { modelContext in
    let todoList = TodoList(
        title: "🎬 Movie night",
        items: [
            TodoItem(title: "🍿 Buy popcorn"),
            TodoItem(title: "🍨 Make some ice cream",
            TodoItem(title: "💡 Hang a string of lights")
        ]
    )
    modelContext.insert(todoList)
}
```

For information about how Swift uses the `callAsFunction()` method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.

## See Also

### Calling the action

- [callAsFunction(\_:)](callasfunction%28__%29.md): Presents a new document window.
- [callAsFunction(contentType:)](callasfunction%28contenttype_%29.md): Presents a new document window.
