> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uiobservationtrackingenabled

# UIObservationTrackingEnabled

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A Boolean value that indicates whether the system automatically tracks changes to observable objects in iOS 18.

## Details

`UIObservationTrackingEnabled`

<a id="Discussion"></a>

## Discussion

In iOS 18, add this key to your information property list and set the value to `YES` to tell the system to automatically track changes to observable objects.

In iOS 26 and later, this key isn’t required. The system automatically tracks changes to observable objects.

## See Also

### Automatic observation tracking

- [NSObservationTrackingEnabled](nsobservationtrackingenabled.md): A Boolean value that indicates whether the system automatically tracks changes to observable objects in macOS 15.
