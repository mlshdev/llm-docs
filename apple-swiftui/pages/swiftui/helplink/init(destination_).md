> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/helplink/init(destination:)](https://developer.apple.com/documentation/swiftui/helplink/init(destination:))

# init(destination:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Constructs a new help link that opens the specified destination URL.

## Declaration

```swift
@MainActor @preconcurrency init(destination: URL)
```

## Parameters

- `destination`: The URL to open when the button is clicked.

<a id="discussion"></a>

## Discussion

Use this initializer when you want the standard help button appearance that opens a link to a website.

You can override the default behavior when the button is clicked by setting the [openURL](../environmentvalues/openurl.md) environment value with a custom [OpenURLAction](../openurlaction.md).

## See Also

### Creating a help link

- [init(action:)](init%28action_%29.md): Constructs a new help link with the specified action.
- [init(anchor:)](init%28anchor_%29.md): Constructs a new help link with the specified anchor in the main app bundle’s book.
- [init(anchor:book:)](init%28anchor_book_%29.md): Constructs a new help link with the specified anchor and book.
