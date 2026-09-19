> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmiccreservedflagsmask

# cmICCReservedFlagsMask

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmICCReservedFlagsMask: Int { get }
```

<a id="discussion"></a>

## Discussion

This mask provides access to bits 0 through 15 of the `flags` field, which are defined and reserved by the ICC. For more information, see the International Color Consortium Profile Format Specification, and the next two mask definitions.

To obtain a copy of the ICC specification, or to get other information about the ICC, visit the ICC Web site at [http://www.color.org/](http://www.color.org/).
