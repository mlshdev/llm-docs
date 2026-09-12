> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointofinterestfilter](https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter)

# MKPointOfInterestFilter (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.

## Declaration

```swift
class MKPointOfInterestFilter
```

<a id="overview"></a>

## Overview

You can apply a point of interest filter in a map view ([pointOfInterestFilter](mkmapview/pointofinterestfilter.md)), a local search request ([pointOfInterestFilter](mklocalsearchcompleter/pointofinterestfilter.md)), a search completer ([pointOfInterestFilter](mklocalsearchcompleter/pointofinterestfilter.md)), and in snapshot options ([pointOfInterestFilter](mkmapsnapshotter/options/pointofinterestfilter.md)).

## Topics

### Creating filters

- [excludingAll](mkpointofinterestfilter/excludingall.md): A filter that excludes all point of interest categories.
- [includingAll](mkpointofinterestfilter/includingall.md): A filter that includes all point of interest categories.
- [init(excluding:)](mkpointofinterestfilter/init%28excluding_%29.md): Initialize the point of interest filter with a list of categories to exclude.
- [init(including:)](mkpointofinterestfilter/init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.

### Querying filter behavior

- [excludes(\_:)](mkpointofinterestfilter/excludes%28__%29.md): Returns a Boolean value indicating whether the filter excludes the point of interest category.
- [includes(\_:)](mkpointofinterestfilter/includes%28__%29.md): Returns a Boolean value indicating whether the filter includes the point of interest category.

### Initializers

- [init(coder:)](mkpointofinterestfilter/init%28coder_%29.md)
- [init(excludingCategories:)](mkpointofinterestfilter/init%28excludingcategories_%29.md)
- [init(includingCategories:)](mkpointofinterestfilter/init%28includingcategories_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md): A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.
- [MKMapFeatureOptions](mkmapfeatureoptions.md): A structure you use to tell the map which kinds of features users can interact with.
- [MKMapItemRequest](mkmapitemrequest.md): A utility class you use to request additional information about a map feature.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.

# MKPointOfInterestFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.

## Declaration

```objectivec
@interface MKPointOfInterestFilter : NSObject
```

<a id="overview"></a>

## Overview

You can apply a point of interest filter in a map view ([pointOfInterestFilter](mkmapview/pointofinterestfilter.md)), a local search request ([pointOfInterestFilter](mklocalsearchcompleter/pointofinterestfilter.md)), a search completer ([pointOfInterestFilter](mklocalsearchcompleter/pointofinterestfilter.md)), and in snapshot options ([pointOfInterestFilter](mkmapsnapshotter/options/pointofinterestfilter.md)).

## Topics

### Creating filters

- [filterExcludingAllCategories](mkpointofinterestfilter/excludingall.md): A filter that excludes all point of interest categories.
- [filterIncludingAllCategories](mkpointofinterestfilter/includingall.md): A filter that includes all point of interest categories.
- [initExcludingCategories:](mkpointofinterestfilter/init%28excluding_%29.md): Initialize the point of interest filter with a list of categories to exclude.
- [initIncludingCategories:](mkpointofinterestfilter/init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.

### Querying filter behavior

- [excludesCategory:](mkpointofinterestfilter/excludes%28__%29.md): Returns a Boolean value indicating whether the filter excludes the point of interest category.
- [includesCategory:](mkpointofinterestfilter/includes%28__%29.md): Returns a Boolean value indicating whether the filter includes the point of interest category.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Points of interest

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md): Obtain information about a point of interest that persists over its lifetime.
- [MKMapFeatureAnnotation](mkmapfeatureannotation.md): A class that describes an annotation element on the map’s display such as a point of interest, territorial boundary, or physical feature.
- [MKMapFeatureOptions](mkmapfeatureoptions.md): A structure you use to tell the map which kinds of features users can interact with.
- [MKMapItemRequest](mkmapitemrequest.md): A utility class you use to request additional information about a map feature.
- [MKIconStyle](mkiconstyle.md): A class you use to customize the annotation view icon of a point of interest (POI) on the map.
- [MKPointOfInterestCategory](mkpointofinterestcategory.md): A point of interest category.
