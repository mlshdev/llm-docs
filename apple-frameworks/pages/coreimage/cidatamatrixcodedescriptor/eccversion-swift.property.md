> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidatamatrixcodedescriptor/eccversion-swift.property](https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/eccversion-swift.property)

# eccVersion (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The error correction version of the Data Matrix code symbol.

## Declaration

```swift
var eccVersion: CIDataMatrixCodeDescriptor.ECCVersion { get }
```

<a id="discussion"></a>

## Discussion

The possible error correction version are enumerated in [CIDataMatrixCodeDescriptor.ECCVersion](eccversion-swift.enum.md). Any symbol with an even number of rows and columns will be ECC 200.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the Data Matrix code symbol.
- [rowCount](rowcount-swift.property.md): The number of rows in the Data Matrix code symbol.
- [columnCount](columncount-swift.property.md): The number of columns in the Data Matrix code symbol.

# eccVersion (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The error correction version of the Data Matrix code symbol.

## Declaration

```objectivec
@property (readonly) CIDataMatrixCodeECCVersion eccVersion;
```

<a id="discussion"></a>

## Discussion

The possible error correction version are enumerated in [CIDataMatrixCodeECCVersion](eccversion-swift.enum.md). Any symbol with an even number of rows and columns will be ECC 200.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the Data Matrix code symbol.
- [rowCount](rowcount-swift.property.md): The number of rows in the Data Matrix code symbol.
- [columnCount](columncount-swift.property.md): The number of columns in the Data Matrix code symbol.
