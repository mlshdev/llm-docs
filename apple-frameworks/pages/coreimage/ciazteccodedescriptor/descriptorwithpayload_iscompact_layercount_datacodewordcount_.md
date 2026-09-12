> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciazteccodedescriptor/descriptorwithpayload:iscompact:layercount:datacodewordcount:](https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/descriptorwithpayload:iscompact:layercount:datacodewordcount:)

# descriptorWithPayload:isCompact:layerCount:dataCodewordCount:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates an Aztec code descriptor for the given payload and parameters.

## Declaration

```objectivec
+ (instancetype) descriptorWithPayload:(NSData *) errorCorrectedPayload isCompact:(BOOL) isCompact layerCount:(NSInteger) layerCount dataCodewordCount:(NSInteger) dataCodewordCount;
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the Aztec code symbol.
- `isCompact`: A Boolean indicating whether or not the Aztec code is compact.
- `layerCount`: The number of layers in the Aztec code, from 1 to 32.
- `dataCodewordCount`: The number of codewords in the Aztec code, from 1 to 2048.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

## See Also

### Creating a Descriptor

- [initWithPayload:isCompact:layerCount:dataCodewordCount:](init%28payload_iscompact_layercount_datacodewordcount_%29.md): Initializes an Aztec code descriptor for the given payload and parameters.
