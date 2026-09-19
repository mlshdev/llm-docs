> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextitem/menuconfiguration/init(preview:menu:)

# init(preview:menu:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

Creates a text item menu configuration with the specified menu and preview.

## Declaration

```swift
@MainActor @preconcurrency convenience init(preview: UITextItem.MenuConfiguration.Preview? = .default, menu: UIMenu)
```

## Parameters

- `preview`: The preview to display alongside the menu.
- `menu`: The menu to present when the user interacts with the text item.

## See Also

### Creating a menu configuration

- [UITextItem.MenuConfiguration.Preview](preview.md): Constants that indicate what type of preview to display alongside the text item’s menu.
