> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/readablecontentguide](https://developer.apple.com/documentation/uikit/uiview/readablecontentguide)

# readableContentGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A layout guide representing an area with a readable width within the view.

## Declaration

```swift
var readableContentGuide: UILayoutGuide { get }
```

<a id="Discussion"></a>

## Discussion

This layout guide defines an area that can easily be read without forcing users to move their head to track the lines. The readable content area follows the following rules:

1. The readable content guide never extends beyond the view’s layout margin guide.
2. The readable content guide is vertically centered inside the layout margin guide.
3. The readable content guide’s width is equal to or less than the readable width defined for the current dynamic text size.

Use the readable content guide to lay out a single column of text. If you are laying out multiple columns, you can use the guide’s width to determine the optimal width for your columns.

## See Also

### Working with layout guides

- [addLayoutGuide(\_:)](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [removeLayoutGuide(\_:)](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.

# readableContentGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A layout guide representing an area with a readable width within the view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UILayoutGuide * readableContentGuide;
```

<a id="Discussion"></a>

## Discussion

This layout guide defines an area that can easily be read without forcing users to move their head to track the lines. The readable content area follows the following rules:

1. The readable content guide never extends beyond the view’s layout margin guide.
2. The readable content guide is vertically centered inside the layout margin guide.
3. The readable content guide’s width is equal to or less than the readable width defined for the current dynamic text size.

Use the readable content guide to lay out a single column of text. If you are laying out multiple columns, you can use the guide’s width to determine the optimal width for your columns.

## See Also

### Working with layout guides

- [addLayoutGuide:](addlayoutguide%28__%29.md): Adds the specified layout guide to the view.
- [layoutGuides](layoutguides.md): The array of layout guide objects owned by this view.
- [layoutMarginsGuide](layoutmarginsguide.md): A layout guide representing the view’s margins.
- [removeLayoutGuide:](removelayoutguide%28__%29.md): Removes the specified layout guide from the view.
