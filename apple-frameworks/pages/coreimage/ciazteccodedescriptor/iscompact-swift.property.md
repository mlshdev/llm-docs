> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/iscompact-swift.property

# isCompact (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value telling if the Aztec code is compact.

## Declaration

```swift
var isCompact: Bool { get }
```

<a id="discussion"></a>

## Discussion

Compact Aztec symbols use one-fewer ring in the central finder pattern than full-range Aztec symbols of the same number of data layers.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload that comprises the the Aztec code symbol.
- [layerCount](layercount-swift.property.md): The number of data layers in the Aztec code symbol.
- [dataCodewordCount](datacodewordcount-swift.property.md): The number of non-error-correction codewords carried by the Aztec code symbol.

# isCompact (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value telling if the Aztec code is compact.

## Declaration

```objectivec
@property (readonly) BOOL isCompact;
```

<a id="discussion"></a>

## Discussion

Compact Aztec symbols use one-fewer ring in the central finder pattern than full-range Aztec symbols of the same number of data layers.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload that comprises the the Aztec code symbol.
- [layerCount](layercount-swift.property.md): The number of data layers in the Aztec code symbol.
- [dataCodewordCount](datacodewordcount-swift.property.md): The number of non-error-correction codewords carried by the Aztec code symbol.
