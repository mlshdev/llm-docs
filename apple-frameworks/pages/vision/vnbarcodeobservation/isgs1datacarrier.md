> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnbarcodeobservation/isgs1datacarrier

# isGS1DataCarrier (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the barcode carries any global standards data.

## Declaration

```swift
var isGS1DataCarrier: Bool { get }
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.

# isGS1DataCarrier (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the barcode carries any global standards data.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isGS1DataCarrier;
```

## See Also

### Parsing the Payload

- [payloadStringValue](payloadstringvalue.md): A string value that represents the barcode payload.
- [payloadData](payloaddata.md): The raw data representation of the barcode’s payload.
- [supplementalPayloadString](supplementalpayloadstring.md): The supplemental code decoded as a string value.
- [supplementalPayloadData](supplementalpayloaddata.md)
- [supplementalCompositeType](supplementalcompositetype.md): The supplemental composite type.
