> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutpriority/scenesizestayput](https://developer.apple.com/documentation/uikit/uilayoutpriority/scenesizestayput)

# sceneSizeStayPut (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.0+ · tvOS · visionOS

The priority level at which the window’s scene prefers to stay the same size.

## Declaration

```swift
static var sceneSizeStayPut: UILayoutPriority { get }
```

<a id="Discussion"></a>

## Discussion

Specify constraint priorities that are either higher or lower than this value, rather than equal to it.

## See Also

### Constants

- [required](required.md): A required constraint.
- [defaultHigh](defaulthigh.md): The priority level with which a button resists compressing its content.
- [dragThatCanResizeScene](dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [dragThatCannotResizeScene](dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [defaultLow](defaultlow.md): The priority level at which a button hugs its contents horizontally.
- [fittingSizeLevel](fittingsizelevel.md): The priority level with which the view wants to conform to the target size in that computation.

# UILayoutPrioritySceneSizeStayPut (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.0+ · tvOS · visionOS

The priority level at which the window’s scene prefers to stay the same size.

## Declaration

```objectivec
static const UILayoutPriority UILayoutPrioritySceneSizeStayPut;
```

<a id="Discussion"></a>

## Discussion

Specify constraint priorities that are either higher or lower than this value, rather than equal to it.

## See Also

### Constants

- [UILayoutPriorityRequired](required.md): A required constraint.
- [UILayoutPriorityDefaultHigh](defaulthigh.md): The priority level with which a button resists compressing its content.
- [UILayoutPriorityDragThatCanResizeScene](dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [UILayoutPriorityDragThatCannotResizeScene](dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [UILayoutPriorityDefaultLow](defaultlow.md): The priority level at which a button hugs its contents horizontally.
- [UILayoutPriorityFittingSizeLevel](fittingsizelevel.md): The priority level with which the view wants to conform to the target size in that computation.
