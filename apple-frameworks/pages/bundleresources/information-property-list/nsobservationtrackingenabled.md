> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nsobservationtrackingenabled

# NSObservationTrackingEnabled

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+

A Boolean value that indicates whether the system automatically tracks changes to observable objects in macOS 15.

## Details

`NSObservationTrackingEnabled`

<a id="Discussion"></a>

## Discussion

In macOS 15, add this key to your information property list and set the value to `YES` to tell the system to automatically track changes to observable objects.

In macOS 26 and later, this key isn’t required. The system automatically tracks changes to observable objects.

## See Also

### Automatic observation tracking

- [UIObservationTrackingEnabled](uiobservationtrackingenabled.md): A Boolean value that indicates whether the system automatically tracks changes to observable objects in iOS 18.
