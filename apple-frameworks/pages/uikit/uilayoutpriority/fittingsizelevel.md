> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutpriority/fittingsizelevel](https://developer.apple.com/documentation/uikit/uilayoutpriority/fittingsizelevel)

# fittingSizeLevel (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The priority level with which the view wants to conform to the target size in that computation.

## Declaration

```swift
static var fittingSizeLevel: UILayoutPriority { get }
```

<a id="Discussion"></a>

## Discussion

When you send a [systemLayoutSizeFitting(\_:)](../uiview/systemlayoutsizefitting%28__%29.md) message to a view, the size fitting most closely to the target size is computed. This priority is quite low. It’s generally not appropriate to make a constraint at exactly this priority. You want to be higher or lower.

## See Also

### Constants

- [required](required.md): A required constraint.
- [defaultHigh](defaulthigh.md): The priority level with which a button resists compressing its content.
- [dragThatCanResizeScene](dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [sceneSizeStayPut](scenesizestayput.md): The priority level at which the window’s scene prefers to stay the same size.
- [dragThatCannotResizeScene](dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [defaultLow](defaultlow.md): The priority level at which a button hugs its contents horizontally.

# UILayoutPriorityFittingSizeLevel (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The priority level with which the view wants to conform to the target size in that computation.

## Declaration

```objectivec
static const UILayoutPriority UILayoutPriorityFittingSizeLevel;
```

<a id="Discussion"></a>

## Discussion

When you send a [systemLayoutSizeFittingSize:](../uiview/systemlayoutsizefitting%28__%29.md) message to a view, the size fitting most closely to the target size is computed. This priority is quite low. It’s generally not appropriate to make a constraint at exactly this priority. You want to be higher or lower.

## See Also

### Constants

- [UILayoutPriorityRequired](required.md): A required constraint.
- [UILayoutPriorityDefaultHigh](defaulthigh.md): The priority level with which a button resists compressing its content.
- [UILayoutPriorityDragThatCanResizeScene](dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [UILayoutPrioritySceneSizeStayPut](scenesizestayput.md): The priority level at which the window’s scene prefers to stay the same size.
- [UILayoutPriorityDragThatCannotResizeScene](dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [UILayoutPriorityDefaultLow](defaultlow.md): The priority level at which a button hugs its contents horizontally.
