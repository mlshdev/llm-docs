> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/init(inspectorwithviewcontroller:)](https://developer.apple.com/documentation/appkit/nssplitviewitem/init(inspectorwithviewcontroller:))

# init(inspectorWithViewController:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a split view item that represents an inspector for the specified view controller.

## Declaration

```swift
convenience init(inspectorWithViewController viewController: NSViewController)
```

<a id="Discussion"></a>

## Discussion

In macOS 14.0 and later, inspectors use standard system default values for these properties:

- [canCollapse](cancollapse.md) is [true](https://developer.apple.com/documentation/swift/true).
- [minimumThickness](minimumthickness.md) and [maximumThickness](maximumthickness.md)are the standard inspector size (270) and aren’t resizable by default.

## See Also

### Creating a split view item

- [init(sidebarWithViewController:)](init%28sidebarwithviewcontroller_%29.md): Creates a split view item that represents a sidebar for the specified view controller.
- [init(contentListWithViewController:)](init%28contentlistwithviewcontroller_%29.md): Creates a split view item that represents a content list for the specified view controller.
- [init(viewController:)](init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.

# inspectorWithViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates a split view item that represents an inspector for the specified view controller.

## Declaration

```objectivec
+ (instancetype) inspectorWithViewController:(NSViewController *) viewController;
```

<a id="Discussion"></a>

## Discussion

In macOS 14.0 and later, inspectors use standard system default values for these properties:

- [canCollapse](cancollapse.md) is [true](https://developer.apple.com/documentation/swift/true).
- [minimumThickness](minimumthickness.md) and [maximumThickness](maximumthickness.md)are the standard inspector size (270) and aren’t resizable by default.

## See Also

### Creating a split view item

- [sidebarWithViewController:](init%28sidebarwithviewcontroller_%29.md): Creates a split view item that represents a sidebar for the specified view controller.
- [contentListWithViewController:](init%28contentlistwithviewcontroller_%29.md): Creates a split view item that represents a content list for the specified view controller.
- [splitViewItemWithViewController:](init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
