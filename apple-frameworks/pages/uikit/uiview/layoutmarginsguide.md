> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/layoutmarginsguide](https://developer.apple.com/documentation/uikit/uiview/layoutmarginsguide)

# layoutMarginsGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A layout guide representing the view’s margins.

## Declaration

```swift
var layoutMarginsGuide: UILayoutGuide { get }
```

<a id="Discussion"></a>

## Discussion

Use this layout guide’s anchors to create constraints with the view’s margin.

## See Also

### Related Documentation

- [layoutMargins](layoutmargins.md): The default spacing to use when laying out content in the view.

### Working with layout guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.

# layoutMarginsGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A layout guide representing the view’s margins.

## Declaration

```objectivec
@property (strong, readonly) UILayoutGuide * layoutMarginsGuide;
```

<a id="Discussion"></a>

## Discussion

Use this layout guide’s anchors to create constraints with the view’s margin.

## See Also

### Related Documentation

- [layoutMargins](layoutmargins.md): The default spacing to use when laying out content in the view.

### Working with layout guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [readableContentGuide](readablecontentguide.md): A layout guide representing an area with a readable width within the view.
- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.
