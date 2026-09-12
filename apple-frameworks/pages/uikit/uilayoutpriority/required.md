> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutpriority/required](https://developer.apple.com/documentation/uikit/uilayoutpriority/required)

# required (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A required constraint.

## Declaration

```swift
static var required: UILayoutPriority { get }
```

<a id="Discussion"></a>

## Discussion

Don’t specify a layout constraint that exceeds this number.

## See Also

### Constants

- [defaultHigh](defaulthigh.md): The priority level with which a button resists compressing its content.
- [dragThatCanResizeScene](dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [sceneSizeStayPut](scenesizestayput.md): The priority level at which the window’s scene prefers to stay the same size.
- [dragThatCannotResizeScene](dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [defaultLow](defaultlow.md): The priority level at which a button hugs its contents horizontally.
- [fittingSizeLevel](fittingsizelevel.md): The priority level with which the view wants to conform to the target size in that computation.

# UILayoutPriorityRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A required constraint.

## Declaration

```objectivec
static const UILayoutPriority UILayoutPriorityRequired;
```

<a id="Discussion"></a>

## Discussion

Don’t specify a layout constraint that exceeds this number.

## See Also

### Constants

- [UILayoutPriorityDefaultHigh](defaulthigh.md): The priority level with which a button resists compressing its content.
- [UILayoutPriorityDragThatCanResizeScene](dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [UILayoutPrioritySceneSizeStayPut](scenesizestayput.md): The priority level at which the window’s scene prefers to stay the same size.
- [UILayoutPriorityDragThatCannotResizeScene](dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [UILayoutPriorityDefaultLow](defaultlow.md): The priority level at which a button hugs its contents horizontally.
- [UILayoutPriorityFittingSizeLevel](fittingsizelevel.md): The priority level with which the view wants to conform to the target size in that computation.
