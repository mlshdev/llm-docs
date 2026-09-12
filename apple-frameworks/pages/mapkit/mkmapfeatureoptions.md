> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapfeatureoptions](https://developer.apple.com/documentation/mapkit/mkmapfeatureoptions)

# MKMapFeatureOptions (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A structure you use to tell the map which kinds of features users can interact with.

## Declaration

```swift
struct MKMapFeatureOptions
```

## Topics

### Initializers

- [init(rawValue:)](mkmapfeatureoptions/init%28rawvalue_%29.md): Creates a new feature option structure with the specified value.

### Selecting interactive map features

- [physicalFeatures](mkmapfeatureoptions/physicalfeatures.md): The option that represents physical map features such as mountain ranges, rivers, and ocean basins.
- [pointsOfInterest](mkmapfeatureoptions/pointsofinterest.md): The option that represents points of interest such as museums, cafes, parks, or schools.
- [territories](mkmapfeatureoptions/territories.md): The option that represents territorial boundaries such as a national border, a state boundary, or a neighborhood.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md): A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.
- [MKMapItemRequest](mkmapitemrequest.md): A utility class you use to request additional information about a map feature.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestFilter](mkpointofinterestfilter.md): A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.

# MKMapFeatureOptions (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A structure you use to tell the map which kinds of features users can interact with.

## Declaration

```objectivec
enum MKMapFeatureOptions : NSInteger;
```

## Topics

### Selecting interactive map features

- [MKMapFeatureOptionPhysicalFeatures](mkmapfeatureoptions/physicalfeatures.md): The option that represents physical map features such as mountain ranges, rivers, and ocean basins.
- [MKMapFeatureOptionPointsOfInterest](mkmapfeatureoptions/pointsofinterest.md): The option that represents points of interest such as museums, cafes, parks, or schools.
- [MKMapFeatureOptionTerritories](mkmapfeatureoptions/territories.md): The option that represents territorial boundaries such as a national border, a state boundary, or a neighborhood.

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md): A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.
- [MKMapItemRequest](mkmapitemrequest.md): A utility class you use to request additional information about a map feature.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestFilter](mkpointofinterestfilter.md): A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.
