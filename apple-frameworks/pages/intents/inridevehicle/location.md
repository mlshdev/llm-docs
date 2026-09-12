> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridevehicle/location](https://developer.apple.com/documentation/intents/inridevehicle/location)

# location (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The most recent location of the vehicle.

## Declaration

```swift
@NSCopying var location: CLLocation? { get set }
```

<a id="Discussion"></a>

## Discussion

Siri uses this information to display the vehicle’s approximate location on the map. Siri and Maps use the image in the [mapAnnotationImage](mapannotationimage.md) property to display the vehicle on the map.

## See Also

### Specifying the Vehicle’s Location

- [mapAnnotationImage](mapannotationimage.md): The image to use for the vehicle when displaying its position on the map.

# location (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The most recent location of the vehicle.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) CLLocation * location;
```

```objectivec
@property (atomic, copy, readwrite, nullable) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

Siri uses this information to display the vehicle’s approximate location on the map. Siri and Maps use the image in the [mapAnnotationImage](mapannotationimage.md) property to display the vehicle on the map.

## See Also

### Specifying the Vehicle’s Location

- [mapAnnotationImage](mapannotationimage.md): The image to use for the vehicle when displaying its position on the map.
