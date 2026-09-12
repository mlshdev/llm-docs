> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/geocodeaddressstring(_:inregioncenteredat:inregionradius:preferredlocale:completionhandler:)](https://developer.apple.com/documentation/corelocation/clgeocoder/geocodeaddressstring(_:inregioncenteredat:inregionradius:preferredlocale:completionhandler:))

# geocodeAddressString(\_:inRegionCenteredAt:inRegionRadius:preferredLocale:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

> Use MKGeocodingRequest

## Declaration

```swift
func geocodeAddressString(_ addressString: String, inRegionCenteredAt centroid: CLLocationCoordinate2D, inRegionRadius radius: CLLocationDistance, preferredLocale locale: Locale?, completionHandler: @escaping @Sendable ([CLPlacemark]?, (any Error)?) -> Void)
```

```swift
func geocodeAddressString(_ addressString: String, inRegionCenteredAt centroid: CLLocationCoordinate2D, inRegionRadius radius: CLLocationDistance, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
```

# geocodeAddressString:inRegionCenteredAt:inRegionRadius:preferredLocale:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

> Use MKGeocodingRequest

## Declaration

```objectivec
- (void) geocodeAddressString:(NSString *) addressString inRegionCenteredAt:(CLLocationCoordinate2D) centroid inRegionRadius:(CLLocationDistance) radius preferredLocale:(NSLocale *) locale completionHandler:(CLGeocodeCompletionHandler) completionHandler;
```
