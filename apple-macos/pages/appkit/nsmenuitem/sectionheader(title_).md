> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/sectionheader(title:)](https://developer.apple.com/documentation/appkit/nsmenuitem/sectionheader(title:))

# sectionHeader(title:)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Returns a menu item representing a section header for a logical grouping of menu commands.

## Declaration

```swift
static func sectionHeader(title: String) -> NSMenuItem
```

## Parameters

- `title`: The title string to display on the section header.

<a id="Discussion"></a>

## Discussion

Use section headers to provide context to a group of menu items. Items created using this method are non-interactive and don’t perform actions.

## See Also

### Type Methods

- [sectionHeader(withTitle:)](sectionheader%28withtitle_%29.md): Deprecated. Returns a menu item representing a section header for a logical grouping of menu commands.
