> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapfeatureannotation](https://developer.apple.com/documentation/mapkit/mkmapfeatureannotation)

# MKMapFeatureAnnotation (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.

## Declaration

```swift
class MKMapFeatureAnnotation
```

## Topics

### Customizing the annotation

- [featureType](mkmapfeatureannotation/featuretype-swift.property.md): The type of map feature this annotation represents.
- [MKMapFeatureAnnotation.FeatureType](mkmapfeatureannotation/featuretype-swift.enum.md): Values that describe the kinds of features visible on the map.
- [iconStyle](mkmapfeatureannotation/iconstyle.md): The icon style of a feature annotation.
- [pointOfInterestCategory](mkmapfeatureannotation/pointofinterestcategory.md): The feature annotation’s point of interest category.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureOptions](mkmapfeatureoptions.md): A structure you use to tell the map which kinds of features users can interact with.
- [MKMapItemRequest](mkmapitemrequest.md): A utility class you use to request additional information about a map feature.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestFilter](mkpointofinterestfilter.md): A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.

# MKMapFeatureAnnotation (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.

## Declaration

```objectivec
@interface MKMapFeatureAnnotation : NSObject
```

## Topics

### Customizing the annotation

- [featureType](mkmapfeatureannotation/featuretype-swift.property.md): The type of map feature this annotation represents.
- [MKMapFeatureType](mkmapfeatureannotation/featuretype-swift.enum.md): Values that describe the kinds of features visible on the map.
- [iconStyle](mkmapfeatureannotation/iconstyle.md): The icon style of a feature annotation.
- [pointOfInterestCategory](mkmapfeatureannotation/pointofinterestcategory.md): The feature annotation’s point of interest category.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MKAnnotation](mkannotation.md)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureOptions](mkmapfeatureoptions.md): A structure you use to tell the map which kinds of features users can interact with.
- [MKMapItemRequest](mkmapitemrequest.md): A utility class you use to request additional information about a map feature.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestFilter](mkpointofinterestfilter.md): A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.
