> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemrequest/init(mapfeatureannotation:)](https://developer.apple.com/documentation/mapkit/mkmapitemrequest/init(mapfeatureannotation:))

# init(mapFeatureAnnotation:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new map item request with the specified feature annotation.

## Declaration

```swift
init(mapFeatureAnnotation: MKMapFeatureAnnotation)
```

## Parameters

- `mapFeatureAnnotation`: The [MKMapFeatureAnnotation](../mkmapfeatureannotation.md) to use to initialize the map item request.

## See Also

### Creating a request

- [init(feature:)](init%28feature_%29.md): Creates a new map item request with the specified map feature.
- [init(mapItemIdentifier:)](init%28mapitemidentifier_%29.md): Create a request with a map item identifier.

# initWithMapFeatureAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new map item request with the specified feature annotation.

## Declaration

```objectivec
- (instancetype) initWithMapFeatureAnnotation:(MKMapFeatureAnnotation *) mapFeatureAnnotation;
```

## Parameters

- `mapFeatureAnnotation`: The [MKMapFeatureAnnotation](../mkmapfeatureannotation.md) to use to initialize the map item request.

## See Also

### Creating a request

- [initWithMapItemIdentifier:](init%28mapitemidentifier_%29.md): Create a request with a map item identifier.
