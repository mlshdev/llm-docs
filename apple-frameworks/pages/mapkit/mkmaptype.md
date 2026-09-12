> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaptype](https://developer.apple.com/documentation/mapkit/mkmaptype)

# MKMapType (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The type of map to display.

> Use the map view’s [preferredConfiguration](mkmapview/preferredconfiguration.md) property with one of the [MKMapConfiguration](mkmapconfiguration.md) subclasses to select a specific map style instead.

## Declaration

```swift
enum MKMapType
```

## Topics

### Constants

- [MKMapType.standard](mkmaptype/standard.md): A street map that shows the position of all roads and some road names.
- [MKMapType.satellite](mkmaptype/satellite.md): Satellite imagery of the area.
- [MKMapType.hybrid](mkmaptype/hybrid.md): A satellite image of the area with road and road name information layered on top.
- [MKMapType.satelliteFlyover](mkmaptype/satelliteflyover.md): A satellite image of the area with flyover data where available.
- [MKMapType.hybridFlyover](mkmaptype/hybridflyover.md): A hybrid satellite image with flyover data where available.
- [MKMapType.mutedStandard](mkmaptype/mutedstandard.md): A street map where MapKit emphasizes your data over the underlying map details.

### Initializers

- [init(rawValue:)](mkmaptype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [MKLocalSearchCompleter.FilterType](mklocalsearchcompleter/filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKPinAnnotationColor](mkpinannotationcolor.md): Deprecated. The supported colors for pin annotations.

# MKMapType (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The type of map to display.

> Use the map view’s [preferredConfiguration](mkmapview/preferredconfiguration.md) property with one of the [MKMapConfiguration](mkmapconfiguration.md) subclasses to select a specific map style instead.

## Declaration

```objectivec
enum MKMapType : NSUInteger;
```

## Topics

### Constants

- [MKMapTypeStandard](mkmaptype/standard.md): A street map that shows the position of all roads and some road names.
- [MKMapTypeSatellite](mkmaptype/satellite.md): Satellite imagery of the area.
- [MKMapTypeHybrid](mkmaptype/hybrid.md): A satellite image of the area with road and road name information layered on top.
- [MKMapTypeSatelliteFlyover](mkmaptype/satelliteflyover.md): A satellite image of the area with flyover data where available.
- [MKMapTypeHybridFlyover](mkmaptype/hybridflyover.md): A hybrid satellite image with flyover data where available.
- [MKMapTypeMutedStandard](mkmaptype/mutedstandard.md): A street map where MapKit emphasizes your data over the underlying map details.

## See Also

### Enumerations

- [MKSearchCompletionFilterType](mklocalsearchcompleter/filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKPinAnnotationColor](mkpinannotationcolor.md): Deprecated. The supported colors for pin annotations.
