> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/helplink/init(action:)](https://developer.apple.com/documentation/swiftui/helplink/init(action:))

# init(action:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Constructs a new help link with the specified action.

## Declaration

```swift
@MainActor @preconcurrency init(action: @escaping () -> Void)
```

## Parameters

- `action`: The action to perform when the user clicks the button.

<a id="discussion"></a>

## Discussion

Use this initializer when you want the standard help button appearance with a custom button action that does not open an article in an Apple Help book.

## See Also

### Creating a help link

- [init(destination:)](init%28destination_%29.md): Constructs a new help link that opens the specified destination URL.
- [init(anchor:)](init%28anchor_%29.md): Constructs a new help link with the specified anchor in the main app bundle’s book.
- [init(anchor:book:)](init%28anchor_book_%29.md): Constructs a new help link with the specified anchor and book.
