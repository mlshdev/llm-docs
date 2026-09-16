> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/helplink/init(anchor:)

# init(anchor:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Constructs a new help link with the specified anchor in the main app bundle’s book.

## Declaration

```swift
@MainActor @preconcurrency init(anchor: NSHelpManager.AnchorName)
```

## Parameters

- `anchor`: The anchor within the help book to open to.

<a id="discussion"></a>

## Discussion

The main app bundle book name is defined by the `CFBundleHelpBookName` key in its Info.plist file.

## See Also

### Creating a help link

- [init(action:)](init%28action_%29.md): Constructs a new help link with the specified action.
- [init(destination:)](init%28destination_%29.md): Constructs a new help link that opens the specified destination URL.
- [init(anchor:book:)](init%28anchor_book_%29.md): Constructs a new help link with the specified anchor and book.
