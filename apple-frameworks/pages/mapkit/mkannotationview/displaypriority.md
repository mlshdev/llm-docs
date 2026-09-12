> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/displaypriority](https://developer.apple.com/documentation/mapkit/mkannotationview/displaypriority)

# displayPriority (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The display priority of the annotation view.

## Declaration

```swift
var displayPriority: MKFeatureDisplayPriority { get set }
```

<a id="Discussion"></a>

## Discussion

An annotation view with a priority of [required](../mkfeaturedisplaypriority/required.md) is always visible on the map, whereas other priorities may result in a hidden annotation view. Defaults to `required`.

## See Also

### Setting the priority for display

- [MKFeatureDisplayPriority](../mkfeaturedisplaypriority.md): Constants that indicates the display priority for annotations.
- [zPriority](zpriority.md): The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.
- [selectedZPriority](selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
- [MKAnnotationViewZPriority](../mkannotationviewzpriority.md): Constants that indicates the priority for ordering overlapping annotation views.

# displayPriority (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The display priority of the annotation view.

## Declaration

```objectivec
@property (nonatomic) MKFeatureDisplayPriority displayPriority;
```

<a id="Discussion"></a>

## Discussion

An annotation view with a priority of [MKFeatureDisplayPriorityRequired](../mkfeaturedisplaypriority/required.md) is always visible on the map, whereas other priorities may result in a hidden annotation view. Defaults to `required`.

## See Also

### Setting the priority for display

- [MKFeatureDisplayPriority](../mkfeaturedisplaypriority.md): Constants that indicates the display priority for annotations.
- [zPriority](zpriority.md): The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.
- [selectedZPriority](selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
- [MKAnnotationViewZPriority](../mkannotationviewzpriority.md): Constants that indicates the priority for ordering overlapping annotation views.
