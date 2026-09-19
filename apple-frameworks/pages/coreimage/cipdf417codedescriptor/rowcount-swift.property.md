> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/rowcount-swift.property

# rowCount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of rows in the PDF417 code symbol.

## Declaration

```swift
var rowCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Valid row count values are from 3 to 90.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [isCompact](iscompact-swift.property.md): A boolean value telling if the PDF417 code is compact.
- [columnCount](columncount-swift.property.md): The number of columns in the PDF417 code symbol.

# rowCount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of rows in the PDF417 code symbol.

## Declaration

```objectivec
@property (readonly) NSInteger rowCount;
```

<a id="discussion"></a>

## Discussion

Valid row count values are from 3 to 90.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [isCompact](iscompact-swift.property.md): A boolean value telling if the PDF417 code is compact.
- [columnCount](columncount-swift.property.md): The number of columns in the PDF417 code symbol.
