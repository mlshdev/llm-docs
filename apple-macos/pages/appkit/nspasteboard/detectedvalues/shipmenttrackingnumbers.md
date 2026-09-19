> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspasteboard/detectedvalues/shipmenttrackingnumbers

# shipmentTrackingNumbers

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An array of parcel tracking numbers and carriers that the data detection system identifies.

## Declaration

```swift
var shipmentTrackingNumbers: [DDMatchShipmentTrackingNumber] { get }
```

## See Also

### Transportation-related values

- [flightNumbers](flightnumbers.md): An array of flight numbers that the data detection system identifies.
