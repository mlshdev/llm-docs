> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationviewzpriority](https://developer.apple.com/documentation/mapkit/mkannotationviewzpriority)

# MKAnnotationViewZPriority (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that indicates the priority for ordering overlapping annotation views.

## Declaration

```swift
struct MKAnnotationViewZPriority
```

## Topics

### Priorities

- [defaultSelected](mkannotationviewzpriority/defaultselected.md): The default view overlapping priority for a selected view.
- [defaultUnselected](mkannotationviewzpriority/defaultunselected.md): The default view overlapping priority for an unselected view.
- [max](mkannotationviewzpriority/max.md): The maximum allowed priority for overlapping views.
- [min](mkannotationviewzpriority/min.md): The minimum allowed priority for overlapping views.

### Initializers

- [init(\_:)](mkannotationviewzpriority/init%28__%29.md): Creates an overlapping priority from the value.
- [init(rawValue:)](mkannotationviewzpriority/init%28rawvalue_%29.md): Creates an overlapping priority from the value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the priority for display

- [displayPriority](mkannotationview/displaypriority.md): The display priority of the annotation view.
- [MKFeatureDisplayPriority](mkfeaturedisplaypriority.md): Constants that indicates the display priority for annotations.
- [zPriority](mkannotationview/zpriority.md): The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.
- [selectedZPriority](mkannotationview/selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.

# MKAnnotationViewZPriority (Objective-C)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that indicates the priority for ordering overlapping annotation views.

## Declaration

```objectivec
typedef float MKAnnotationViewZPriority;
```

## Topics

### Priorities

- [MKAnnotationViewZPriorityDefaultSelected](mkannotationviewzpriority/defaultselected.md): The default view overlapping priority for a selected view.
- [MKAnnotationViewZPriorityDefaultUnselected](mkannotationviewzpriority/defaultunselected.md): The default view overlapping priority for an unselected view.
- [MKAnnotationViewZPriorityMax](mkannotationviewzpriority/max.md): The maximum allowed priority for overlapping views.
- [MKAnnotationViewZPriorityMin](mkannotationviewzpriority/min.md): The minimum allowed priority for overlapping views.

## See Also

### Setting the priority for display

- [displayPriority](mkannotationview/displaypriority.md): The display priority of the annotation view.
- [MKFeatureDisplayPriority](mkfeaturedisplaypriority.md): Constants that indicates the display priority for annotations.
- [zPriority](mkannotationview/zpriority.md): The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.
- [selectedZPriority](mkannotationview/selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
