> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextitemmenuconfiguration/configurationwithpreview:menu:

# configurationWithPreview:menu:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a menu configuration with the specified menu and custom preview.

## Declaration

```objectivec
+ (instancetype) configurationWithPreview:(UITextItemMenuPreview *) preview menu:(UIMenu *) menu;
```

## Parameters

- `preview`: The preview associated with the menu. Specify @c nil for no preview.
- `menu`: The menu to be presented.

## See Also

### Creating a menu configuration

- [configurationWithMenu:](configurationwithmenu_.md): Creates a menu configuration with the specified menu and a default preview.
- [UITextItemMenuPreview](../uitextitemmenupreview.md): An object representing the preview for a text item.
