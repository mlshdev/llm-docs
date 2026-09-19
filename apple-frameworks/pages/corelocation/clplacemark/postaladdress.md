> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clplacemark/postaladdress

# postalAddress (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.2) · iPadOS 11.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 4.0+ (deprecated in 27.2)

The postal address associated with the location, formatted for use with the Contacts framework.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var postalAddress: CNPostalAddress? { get }
```

## See Also

### Getting the associated contact details

- [addressDictionary](addressdictionary.md): Deprecated. A dictionary containing the Address Book keys and values for the placemark.

# postalAddress (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.2) · iPadOS 11.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 4.0+ (deprecated in 27.2)

The postal address associated with the location, formatted for use with the Contacts framework.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CNPostalAddress * postalAddress;
```

## See Also

### Getting the associated contact details

- [addressDictionary](addressdictionary.md): Deprecated. A dictionary containing the Address Book keys and values for the placemark.
