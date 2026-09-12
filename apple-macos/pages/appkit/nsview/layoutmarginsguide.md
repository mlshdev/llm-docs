> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/layoutmarginsguide](https://developer.apple.com/documentation/appkit/nsview/layoutmarginsguide)

# layoutMarginsGuide (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A layout guide that provides the recommended amount of padding for content inside of a view.

## Declaration

```swift
var layoutMarginsGuide: NSLayoutGuide { get }
```

<a id="Discussion"></a>

## Discussion

To ensure you pad your view’s content by the correct amount, constrain against the anchors of the layout margins guide on all sides. The system automatically updates the guide when a view becomes the content view.

For views that aren’t the content view, the layout margins guide is equivalent to the system’s standard spacing from the safe area.

## See Also

### Managing Layout Guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.

# layoutMarginsGuide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A layout guide that provides the recommended amount of padding for content inside of a view.

## Declaration

```objectivec
@property (strong, readonly) NSLayoutGuide * layoutMarginsGuide;
```

<a id="Discussion"></a>

## Discussion

To ensure you pad your view’s content by the correct amount, constrain against the anchors of the layout margins guide on all sides. The system automatically updates the guide when a view becomes the content view.

For views that aren’t the content view, the layout margins guide is equivalent to the system’s standard spacing from the safe area.

## See Also

### Managing Layout Guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the provided layout guide to the view.
- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the provided layout guide from the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
