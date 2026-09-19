> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenuitem/sectionheader(withtitle:)

# sectionHeader(withTitle:)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Returns a menu item representing a section header for a logical grouping of menu commands.

> Use [sectionHeader(title:)](sectionheader%28title_%29.md) instead.

## Declaration

```swift
static func sectionHeader(withTitle title: String) -> NSMenuItem
```

## Parameters

- `title`: The title string to display on the section header.

<a id="Discussion"></a>

## Discussion

Use section headers to provide context to a group of menu items. Items created using this method are non-interactive and don’t perform actions.

## See Also

### Type Methods

- [sectionHeader(title:)](sectionheader%28title_%29.md): Returns a menu item representing a section header for a logical grouping of menu commands.
