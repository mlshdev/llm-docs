> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/zpriority](https://developer.apple.com/documentation/mapkit/mkannotationview/zpriority)

# zPriority (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.

## Declaration

```swift
var zPriority: MKAnnotationViewZPriority { get set }
```

<a id="Discussion"></a>

## Discussion

The constant [defaultUnselected](../mkannotationviewzpriority/defaultunselected.md) is the default value for [zPriority](zpriority.md).

## See Also

### Setting the priority for display

- [displayPriority](displaypriority.md): The display priority of the annotation view.
- [MKFeatureDisplayPriority](../mkfeaturedisplaypriority.md): Constants that indicates the display priority for annotations.
- [selectedZPriority](selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
- [MKAnnotationViewZPriority](../mkannotationviewzpriority.md): Constants that indicates the priority for ordering overlapping annotation views.

# zPriority (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.

## Declaration

```objectivec
@property (nonatomic) MKAnnotationViewZPriority zPriority;
```

<a id="Discussion"></a>

## Discussion

The constant [MKAnnotationViewZPriorityDefaultUnselected](../mkannotationviewzpriority/defaultunselected.md) is the default value for [zPriority](zpriority.md).

## See Also

### Setting the priority for display

- [displayPriority](displaypriority.md): The display priority of the annotation view.
- [MKFeatureDisplayPriority](../mkfeaturedisplaypriority.md): Constants that indicates the display priority for annotations.
- [selectedZPriority](selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
- [MKAnnotationViewZPriority](../mkannotationviewzpriority.md): Constants that indicates the priority for ordering overlapping annotation views.
