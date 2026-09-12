> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodeobservation/payloaddata](https://developer.apple.com/documentation/vision/vnbarcodeobservation/payloaddata)

# payloadData (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The raw data representation of the barcode’s payload.

## Declaration

```swift
var payloadData: Data? { get }
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

# payloadData (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The raw data representation of the barcode’s payload.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * payloadData;
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.
