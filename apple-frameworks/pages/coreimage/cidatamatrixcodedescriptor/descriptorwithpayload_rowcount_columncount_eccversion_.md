> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidatamatrixcodedescriptor/descriptorwithpayload:rowcount:columncount:eccversion:](https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/descriptorwithpayload:rowcount:columncount:eccversion:)

# descriptorWithPayload:rowCount:columnCount:eccVersion:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a Data Matrix code descriptor for the given payload and parameters.

## Declaration

```objectivec
+ (instancetype) descriptorWithPayload:(NSData *) errorCorrectedPayload rowCount:(NSInteger) rowCount columnCount:(NSInteger) columnCount eccVersion:(CIDataMatrixCodeECCVersion) eccVersion;
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the Data Matrix code symbol.
- `rowCount`: The number of rows in the Data Matrix code symbol.
- `columnCount`: The number of columns in the Data Matrix code symbol.
- `eccVersion`: The [CIDataMatrixCodeECCVersion](eccversion-swift.enum.md) for the Data Matrix code symbol.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

## See Also

### Creating a Descriptor

- [initWithPayload:rowCount:columnCount:eccVersion:](init%28payload_rowcount_columncount_eccversion_%29.md): Initializes a Data Matrix code descriptor for the given payload and parameters.
