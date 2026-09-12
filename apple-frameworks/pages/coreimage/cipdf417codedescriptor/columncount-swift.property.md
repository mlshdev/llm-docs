> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipdf417codedescriptor/columncount-swift.property](https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/columncount-swift.property)

# columnCount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of columns in the PDF417 code symbol.

## Declaration

```swift
var columnCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Valid column count values are from 1 to 30. This count excluded the columns used to indicate the symbol structure.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [isCompact](iscompact-swift.property.md): A boolean value telling if the PDF417 code is compact.
- [rowCount](rowcount-swift.property.md): The number of rows in the PDF417 code symbol.

# columnCount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of columns in the PDF417 code symbol.

## Declaration

```objectivec
@property (readonly) NSInteger columnCount;
```

<a id="discussion"></a>

## Discussion

Valid column count values are from 1 to 30. This count excluded the columns used to indicate the symbol structure.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [isCompact](iscompact-swift.property.md): A boolean value telling if the PDF417 code is compact.
- [rowCount](rowcount-swift.property.md): The number of rows in the PDF417 code symbol.
