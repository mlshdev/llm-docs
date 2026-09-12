> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidatamatrixcodedescriptor/init(payload:rowcount:columncount:eccversion:)](https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/init(payload:rowcount:columncount:eccversion:))

# init(payload:rowCount:columnCount:eccVersion:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a Data Matrix code descriptor for the given payload and parameters.

## Declaration

```swift
init?(payload errorCorrectedPayload: Data, rowCount: Int, columnCount: Int, eccVersion: CIDataMatrixCodeDescriptor.ECCVersion)
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the Data Matrix code symbol.
- `rowCount`: The number of rows in the Data Matrix code symbol.
- `columnCount`: The number of columns in the Data Matrix code symbol.
- `eccVersion`: The [CIDataMatrixCodeDescriptor.ECCVersion](eccversion-swift.enum.md) for the Data Matrix code symbol.

<a id="return-value"></a>

## Return Value

 An initialized [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

# initWithPayload:rowCount:columnCount:eccVersion: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a Data Matrix code descriptor for the given payload and parameters.

## Declaration

```objectivec
- (instancetype) initWithPayload:(NSData *) errorCorrectedPayload rowCount:(NSInteger) rowCount columnCount:(NSInteger) columnCount eccVersion:(CIDataMatrixCodeECCVersion) eccVersion;
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the Data Matrix code symbol.
- `rowCount`: The number of rows in the Data Matrix code symbol.
- `columnCount`: The number of columns in the Data Matrix code symbol.
- `eccVersion`: The [CIDataMatrixCodeECCVersion](eccversion-swift.enum.md) for the Data Matrix code symbol.

<a id="return-value"></a>

## Return Value

 An initialized [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

## See Also

### Creating a Descriptor

- [descriptorWithPayload:rowCount:columnCount:eccVersion:](descriptorwithpayload_rowcount_columncount_eccversion_.md): Creates a Data Matrix code descriptor for the given payload and parameters.
