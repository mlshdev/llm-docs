> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnbarcodeobservation/supplementalpayloadstring](https://developer.apple.com/documentation/vision/vnbarcodeobservation/supplementalpayloadstring)

# supplementalPayloadString (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The supplemental code decoded as a string value.

## Declaration

```swift
var supplementalPayloadString: String? { get }
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.

# supplementalPayloadString (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The supplemental code decoded as a string value.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * supplementalPayloadString;
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
- [isGS1DataCarrier](isgs1datacarrier.md): A Boolean value that indicates whether the barcode carries any global standards data.
