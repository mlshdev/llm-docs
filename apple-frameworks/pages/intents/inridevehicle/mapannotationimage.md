> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridevehicle/mapannotationimage](https://developer.apple.com/documentation/intents/inridevehicle/mapannotationimage)

# mapAnnotationImage (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The image to use for the vehicle when displaying its position on the map.

## Declaration

```swift
@NSCopying var mapAnnotationImage: INImage? { get set }
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

The image you provide should be a top-down image of your vehicle, and the front of the vehicle should be at the top of your image. When added to the map, Maps centers the image on the vehicle’s [location](location.md). Maps rotates the image to match the current direction in which the vehicle is going.

## See Also

### Specifying the Vehicle’s Location

- [location](location.md): The most recent location of the vehicle.

# mapAnnotationImage (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The image to use for the vehicle when displaying its position on the map.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INImage * mapAnnotationImage;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INImage * mapAnnotationImage;
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

The image you provide should be a top-down image of your vehicle, and the front of the vehicle should be at the top of your image. When added to the map, Maps centers the image on the vehicle’s [location](location.md). Maps rotates the image to match the current direction in which the vehicle is going.

## See Also

### Specifying the Vehicle’s Location

- [location](location.md): The most recent location of the vehicle.
