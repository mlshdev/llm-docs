> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/init(contentlistwithviewcontroller:)](https://developer.apple.com/documentation/appkit/nssplitviewitem/init(contentlistwithviewcontroller:))

# init(contentListWithViewController:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates a split view item that represents a content list for the specified view controller.

## Declaration

```swift
convenience init(contentListWithViewController viewController: NSViewController)
```

<a id="Discussion"></a>

## Discussion

You use a content list to display information like the Mail app’s list of messages or the Notes app’s list of notes.

Content lists use standard system default values for these properties:

- [minimumThickness](minimumthickness.md), [maximumThickness](maximumthickness.md), and [automaticMaximumThickness](automaticmaximumthickness.md) use the standard system defaults for content lists
- [preferredThicknessFraction](preferredthicknessfraction.md) uses the standard fraction for content lists (`0.28` if an adjacent sidebar is visible, `0.33` if not)

## See Also

### Creating a split view item

- [init(sidebarWithViewController:)](init%28sidebarwithviewcontroller_%29.md): Creates a split view item that represents a sidebar for the specified view controller.
- [init(viewController:)](init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
- [init(inspectorWithViewController:)](init%28inspectorwithviewcontroller_%29.md): Creates a split view item that represents an inspector for the specified view controller.

# contentListWithViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates a split view item that represents a content list for the specified view controller.

## Declaration

```objectivec
+ (instancetype) contentListWithViewController:(NSViewController *) viewController;
```

<a id="Discussion"></a>

## Discussion

You use a content list to display information like the Mail app’s list of messages or the Notes app’s list of notes.

Content lists use standard system default values for these properties:

- [minimumThickness](minimumthickness.md), [maximumThickness](maximumthickness.md), and [automaticMaximumThickness](automaticmaximumthickness.md) use the standard system defaults for content lists
- [preferredThicknessFraction](preferredthicknessfraction.md) uses the standard fraction for content lists (`0.28` if an adjacent sidebar is visible, `0.33` if not)

## See Also

### Creating a split view item

- [sidebarWithViewController:](init%28sidebarwithviewcontroller_%29.md): Creates a split view item that represents a sidebar for the specified view controller.
- [splitViewItemWithViewController:](init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
- [inspectorWithViewController:](init%28inspectorwithviewcontroller_%29.md): Creates a split view item that represents an inspector for the specified view controller.
