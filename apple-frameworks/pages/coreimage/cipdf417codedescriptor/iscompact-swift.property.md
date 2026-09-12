> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipdf417codedescriptor/iscompact-swift.property](https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/iscompact-swift.property)

# isCompact (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A boolean value telling if the PDF417 code is compact.

## Declaration

```swift
var isCompact: Bool { get }
```

<a id="discussion"></a>

## Discussion

Compact PDF417 symbols have abbreviated right-side guard bars.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [rowCount](rowcount-swift.property.md): The number of rows in the PDF417 code symbol.
- [columnCount](columncount-swift.property.md): The number of columns in the PDF417 code symbol.

# isCompact (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A boolean value telling if the PDF417 code is compact.

## Declaration

```objectivec
@property (readonly) BOOL isCompact;
```

<a id="discussion"></a>

## Discussion

Compact PDF417 symbols have abbreviated right-side guard bars.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [rowCount](rowcount-swift.property.md): The number of rows in the PDF417 code symbol.
- [columnCount](columncount-swift.property.md): The number of columns in the PDF417 code symbol.
