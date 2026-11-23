> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/init(centerpoint:locationthreshold:name:address:entrypoints:timezone:)

# init(centerPoint:locationThreshold:name:address:entryPoints:timeZone:)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```swift
convenience init(centerPoint: CPLocationCoordinate3D, locationThreshold: Measurement<UnitLength>?, name: String?, address: String?, entryPoints: [CPLocationCoordinate3D], timeZone: TimeZone?)
```

## See Also

### Creating a trip

- [init(centerPoint:locationThreshold:nameVariants:addressVariants:entryPoints:timeZone:)](init%28centerpoint_locationthreshold_namevariants_addressvariants_entrypoints_timezone_%29.md)
- [init(mapItem:locationThreshold:entryPoints:)](init%28mapitem_locationthreshold_entrypoints_%29.md)
- [init(coder:)](init%28coder_%29.md)
