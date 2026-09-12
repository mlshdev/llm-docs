> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/helplink/init(anchor:book:)](https://developer.apple.com/documentation/swiftui/helplink/init(anchor:book:))

# init(anchor:book:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Constructs a new help link with the specified anchor and book.

## Declaration

```swift
@MainActor @preconcurrency init(anchor: NSHelpManager.AnchorName, book: NSHelpManager.BookName)
```

## Parameters

- `anchor`: The anchor within the help book to open to.
- `book`: The specific book name to open.

## See Also

### Creating a help link

- [init(action:)](init%28action_%29.md): Constructs a new help link with the specified action.
- [init(destination:)](init%28destination_%29.md): Constructs a new help link that opens the specified destination URL.
- [init(anchor:)](init%28anchor_%29.md): Constructs a new help link with the specified anchor in the main app bundle’s book.
