> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkfeaturedisplaypriority](https://developer.apple.com/documentation/mapkit/mkfeaturedisplaypriority)

# MKFeatureDisplayPriority (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicates the display priority for annotations.

## Declaration

```swift
struct MKFeatureDisplayPriority
```

## Topics

### Priorities

- [required](mkfeaturedisplaypriority/required.md): A constant indicating that the item is required.
- [defaultHigh](mkfeaturedisplaypriority/defaulthigh.md): A constant indicating that the item’s display priority is high.
- [defaultLow](mkfeaturedisplaypriority/defaultlow.md): A constant indicating that the item’s display priority is low.

### Creating Feature Display Priorities

- [init(\_:)](mkfeaturedisplaypriority/init%28__%29.md): Creates a feature display priority using the specified floating point value.
- [init(rawValue:)](mkfeaturedisplaypriority/init%28rawvalue_%29.md): Creates a feature display priority using the specified raw floating point value.

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
- [zPriority](mkannotationview/zpriority.md): The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.
- [selectedZPriority](mkannotationview/selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
- [MKAnnotationViewZPriority](mkannotationviewzpriority.md): Constants that indicates the priority for ordering overlapping annotation views.

# MKFeatureDisplayPriority (Objective-C)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicates the display priority for annotations.

## Declaration

```objectivec
typedef float MKFeatureDisplayPriority;
```

## Topics

### Priorities

- [MKFeatureDisplayPriorityRequired](mkfeaturedisplaypriority/required.md): A constant indicating that the item is required.
- [MKFeatureDisplayPriorityDefaultHigh](mkfeaturedisplaypriority/defaulthigh.md): A constant indicating that the item’s display priority is high.
- [MKFeatureDisplayPriorityDefaultLow](mkfeaturedisplaypriority/defaultlow.md): A constant indicating that the item’s display priority is low.

## See Also

### Setting the priority for display

- [displayPriority](mkannotationview/displaypriority.md): The display priority of the annotation view.
- [zPriority](mkannotationview/zpriority.md): The relative importance of the annotation view when in an unselected state with respect to its ordering along the z-axis.
- [selectedZPriority](mkannotationview/selectedzpriority.md): The relative importance of the annotation view when in a selected state with respect to its ordering along the z-axis.
- [MKAnnotationViewZPriority](mkannotationviewzpriority.md): Constants that indicates the priority for ordering overlapping annotation views.
