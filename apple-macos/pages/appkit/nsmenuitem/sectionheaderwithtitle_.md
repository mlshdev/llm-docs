> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/sectionheaderwithtitle:](https://developer.apple.com/documentation/appkit/nsmenuitem/sectionheaderwithtitle:)

# sectionHeaderWithTitle:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Returns a menu item representing a section header for a logical grouping of menu commands.

## Declaration

```objectivec
+ (instancetype) sectionHeaderWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title string to display on the section header.

<a id="return-value"></a>

## Return Value

A menu item representing a section header for a logical grouping of menu commands.

<a id="Discussion"></a>

## Discussion

Use section headers to provide context to a group of menu items. Items created using this method are non-interactive and don’t perform actions.

## See Also

### Managing the section header

- [sectionHeader](issectionheader.md): A Boolean value indicating whether the menu item is a section header.
