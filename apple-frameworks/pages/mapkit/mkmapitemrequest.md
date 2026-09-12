> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemrequest](https://developer.apple.com/documentation/mapkit/mkmapitemrequest)

# MKMapItemRequest (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

A utility class you use to request additional information about a map feature.

## Declaration

```swift
class MKMapItemRequest
```

## Mentioned In

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md)

## Topics

### Creating a request

- [init(feature:)](mkmapitemrequest/init%28feature_%29.md): Creates a new map item request with the specified map feature.
- [init(mapItemIdentifier:)](mkmapitemrequest/init%28mapitemidentifier_%29.md): Create a request with a map item identifier.
- [init(mapFeatureAnnotation:)](mkmapitemrequest/init%28mapfeatureannotation_%29.md): Creates a new map item request with the specified feature annotation.

### Configuring the item request

- [mapFeature](mkmapitemrequest/mapfeature.md): The map feature.
- [mapFeatureAnnotation](mkmapitemrequest/mapfeatureannotation.md): The feature annotation.
- [mapItemIdentifier](mkmapitemrequest/mapitemidentifier.md): The map item identifer.
- [feature](mkmapitemrequest/feature.md): Deprecated. The map feature.
- [featureAnnotation](mkmapitemrequest/featureannotation.md): Deprecated. The feature annotation.
- [placeDescriptor](mkmapitemrequest/placedescriptor.md): The place descriptor that contains information that’s helpful in uniquely identifying this place.

### Starting and stopping requests

- [cancel()](mkmapitemrequest/cancel%28%29.md): Cancels an in-progress map item request.
- [getMapItem(completionHandler:)](mkmapitemrequest/getmapitem%28completionhandler_%29.md): Requests a map item and calls the provided completion handler.

### Checking the status of a request

- [isCancelled](mkmapitemrequest/iscancelled.md): A Boolean value that indicates if the cancellation of the request was successful.
- [isLoading](mkmapitemrequest/isloading.md): A Boolean value that indicates if the request is loading.

### Initializers

- [init(placeDescriptor:)](mkmapitemrequest/init%28placedescriptor_%29.md): Creates a new map item request with the specified place descriptor

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md): A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.
- [MKMapFeatureOptions](mkmapfeatureoptions.md): A structure you use to tell the map which kinds of features users can interact with.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestFilter](mkpointofinterestfilter.md): A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.

# MKMapItemRequest (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

A utility class you use to request additional information about a map feature.

## Declaration

```objectivec
@interface MKMapItemRequest : NSObject
```

## Mentioned In

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md)

## Topics

### Creating a request

- [initWithMapItemIdentifier:](mkmapitemrequest/init%28mapitemidentifier_%29.md): Create a request with a map item identifier.
- [initWithMapFeatureAnnotation:](mkmapitemrequest/init%28mapfeatureannotation_%29.md): Creates a new map item request with the specified feature annotation.

### Configuring the item request

- [mapFeatureAnnotation](mkmapitemrequest/mapfeatureannotation.md): The feature annotation.
- [mapItemIdentifier](mkmapitemrequest/mapitemidentifier.md): The map item identifer.
- [featureAnnotation](mkmapitemrequest/featureannotation.md): Deprecated. The feature annotation.

### Starting and stopping requests

- [cancel](mkmapitemrequest/cancel%28%29.md): Cancels an in-progress map item request.
- [getMapItemWithCompletionHandler:](mkmapitemrequest/getmapitem%28completionhandler_%29.md): Requests a map item and calls the provided completion handler.

### Checking the status of a request

- [cancelled](mkmapitemrequest/iscancelled.md): A Boolean value that indicates if the cancellation of the request was successful.
- [loading](mkmapitemrequest/isloading.md): A Boolean value that indicates if the request is loading.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md): A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.
- [MKMapFeatureOptions](mkmapfeatureoptions.md): A structure you use to tell the map which kinds of features users can interact with.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestFilter](mkpointofinterestfilter.md): A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.
