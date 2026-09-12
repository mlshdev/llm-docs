> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/init(sidebarwithviewcontroller:)](https://developer.apple.com/documentation/appkit/nssplitviewitem/init(sidebarwithviewcontroller:))

# init(sidebarWithViewController:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates a split view item that represents a sidebar for the specified view controller.

## Declaration

```swift
convenience init(sidebarWithViewController viewController: NSViewController)
```

<a id="Discussion"></a>

## Discussion

Sidebar items take advantage of the standard system appearance and behavior for sidebars, including:

- The translucent material background
- The ability to collapse and expand on split view size changes
- The ability to overlay at small split view sizes in full-screen mode

Additionally, sidebars use standard system default values for these properties:

- [canCollapse](cancollapse.md) and [isSpringLoaded](isspringloaded.md) are [true](https://developer.apple.com/documentation/swift/true)
- [minimumThickness](minimumthickness.md) and [maximumThickness](maximumthickness.md) use the standard minimum and maximum sidebar size
- [preferredThicknessFraction](preferredthicknessfraction.md) uses the standard fraction for sidebars (`0.15`)

## See Also

### Creating a split view item

- [init(contentListWithViewController:)](init%28contentlistwithviewcontroller_%29.md): Creates a split view item that represents a content list for the specified view controller.
- [init(viewController:)](init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
- [init(inspectorWithViewController:)](init%28inspectorwithviewcontroller_%29.md): Creates a split view item that represents an inspector for the specified view controller.

# sidebarWithViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates a split view item that represents a sidebar for the specified view controller.

## Declaration

```objectivec
+ (instancetype) sidebarWithViewController:(NSViewController *) viewController;
```

<a id="Discussion"></a>

## Discussion

Sidebar items take advantage of the standard system appearance and behavior for sidebars, including:

- The translucent material background
- The ability to collapse and expand on split view size changes
- The ability to overlay at small split view sizes in full-screen mode

Additionally, sidebars use standard system default values for these properties:

- [canCollapse](cancollapse.md) and [springLoaded](isspringloaded.md) are [true](https://developer.apple.com/documentation/swift/true)
- [minimumThickness](minimumthickness.md) and [maximumThickness](maximumthickness.md) use the standard minimum and maximum sidebar size
- [preferredThicknessFraction](preferredthicknessfraction.md) uses the standard fraction for sidebars (`0.15`)

## See Also

### Creating a split view item

- [contentListWithViewController:](init%28contentlistwithviewcontroller_%29.md): Creates a split view item that represents a content list for the specified view controller.
- [splitViewItemWithViewController:](init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
- [inspectorWithViewController:](init%28inspectorwithviewcontroller_%29.md): Creates a split view item that represents an inspector for the specified view controller.
