> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodeobservation/supplementalpayloaddata](https://developer.apple.com/documentation/vision/vnbarcodeobservation/supplementalpayloaddata)

# supplementalPayloadData (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
var supplementalPayloadData: Data? { get }
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

# supplementalPayloadData (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * supplementalPayloadData;
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.
