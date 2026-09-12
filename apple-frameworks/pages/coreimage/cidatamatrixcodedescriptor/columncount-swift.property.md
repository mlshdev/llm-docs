> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidatamatrixcodedescriptor/columncount-swift.property](https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/columncount-swift.property)

# columnCount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of columns in the Data Matrix code symbol.

## Declaration

```swift
var columnCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Refer to ISO/IEC 16022:2006(E) for valid module row and column count combinations.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the Data Matrix code symbol.
- [rowCount](rowcount-swift.property.md): The number of rows in the Data Matrix code symbol.
- [eccVersion](eccversion-swift.property.md): The error correction version of the Data Matrix code symbol.

# columnCount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of columns in the Data Matrix code symbol.

## Declaration

```objectivec
@property (readonly) NSInteger columnCount;
```

<a id="discussion"></a>

## Discussion

Refer to ISO/IEC 16022:2006(E) for valid module row and column count combinations.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the Data Matrix code symbol.
- [rowCount](rowcount-swift.property.md): The number of rows in the Data Matrix code symbol.
- [eccVersion](eccversion-swift.property.md): The error correction version of the Data Matrix code symbol.
