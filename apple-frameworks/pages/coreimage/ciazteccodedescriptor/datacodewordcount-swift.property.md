> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciazteccodedescriptor/datacodewordcount-swift.property](https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/datacodewordcount-swift.property)

# dataCodewordCount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of non-error-correction codewords carried by the Aztec code symbol.

## Declaration

```swift
var dataCodewordCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Used to determine the level of error correction in conjunction with the number of data layers. Valid values are 1 to 2048. Compact symbols can have up to 64 message codewords.

> **Note**

> This value can exceed the number of message codewords allowed by the number of data layers in this symbol. In this case, the actual number of message codewords is 1024 fewer than this value and the message payload is to be interpreted in an application-defined manner.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload that comprises the the Aztec code symbol.
- [isCompact](iscompact-swift.property.md): A Boolean value telling if the Aztec code is compact.
- [layerCount](layercount-swift.property.md): The number of data layers in the Aztec code symbol.

# dataCodewordCount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of non-error-correction codewords carried by the Aztec code symbol.

## Declaration

```objectivec
@property (readonly) NSInteger dataCodewordCount;
```

<a id="discussion"></a>

## Discussion

Used to determine the level of error correction in conjunction with the number of data layers. Valid values are 1 to 2048. Compact symbols can have up to 64 message codewords.

> **Note**

> This value can exceed the number of message codewords allowed by the number of data layers in this symbol. In this case, the actual number of message codewords is 1024 fewer than this value and the message payload is to be interpreted in an application-defined manner.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected payload that comprises the the Aztec code symbol.
- [isCompact](iscompact-swift.property.md): A Boolean value telling if the Aztec code is compact.
- [layerCount](layercount-swift.property.md): The number of data layers in the Aztec code symbol.
