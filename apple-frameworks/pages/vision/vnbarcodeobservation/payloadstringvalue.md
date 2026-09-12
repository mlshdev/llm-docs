> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodeobservation/payloadstringvalue](https://developer.apple.com/documentation/vision/vnbarcodeobservation/payloadstringvalue)

# payloadStringValue (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A string value that represents the barcode payload.

## Declaration

```swift
var payloadStringValue: String? { get }
```

<a id="Discussion"></a>

## Discussion

Depending on the symbology or the payload data itself, a string representation of the payload may not be available.

## See Also

### Parsing the Payload

- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

# payloadStringValue (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A string value that represents the barcode payload.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * payloadStringValue;
```

<a id="Discussion"></a>

## Discussion

Depending on the symbology or the payload data itself, a string representation of the payload may not be available.

## See Also

### Parsing the Payload

- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.
