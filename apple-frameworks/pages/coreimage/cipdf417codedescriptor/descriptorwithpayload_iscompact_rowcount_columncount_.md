> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipdf417codedescriptor/descriptorwithpayload:iscompact:rowcount:columncount:](https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/descriptorwithpayload:iscompact:rowcount:columncount:)

# descriptorWithPayload:isCompact:rowCount:columnCount:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates an PDF417 code descriptor for the given payload and parameters.

## Declaration

```objectivec
+ (instancetype) descriptorWithPayload:(NSData *) errorCorrectedPayload isCompact:(BOOL) isCompact rowCount:(NSInteger) rowCount columnCount:(NSInteger) columnCount;
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the PDF417 code symbol.
- `isCompact`: A Boolean indicating whether or not the PDF417 code is compact.
- `rowCount`: The number of rows in the PDF417 code, from 3 to 90.
- `columnCount`: The number of columns in the Aztec code, from 1 to 30.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIPDF417CodeDescriptor](../cipdf417codedescriptor.md) instance or `nil` if the parameters are invalid

## See Also

### Creating a Descriptor

- [initWithPayload:isCompact:rowCount:columnCount:](init%28payload_iscompact_rowcount_columncount_%29.md): Initializes an PDF417 code descriptor for the given payload and parameters.
