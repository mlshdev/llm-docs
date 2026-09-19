> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextitemmenuconfiguration/configurationwithmenu:

# configurationWithMenu:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a menu configuration with the specified menu and a default preview.

## Declaration

```objectivec
+ (instancetype) configurationWithMenu:(UIMenu *) menu;
```

## Parameters

- `menu`: The menu to be presented.

## See Also

### Creating a menu configuration

- [configurationWithPreview:menu:](configurationwithpreview_menu_.md): Creates a menu configuration with the specified menu and custom preview.
- [UITextItemMenuPreview](../uitextitemmenupreview.md): An object representing the preview for a text item.
