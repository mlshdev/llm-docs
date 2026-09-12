> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/icmanufacturercode](https://developer.apple.com/documentation/corenfc/nfciso15693tag/icmanufacturercode)

# icManufacturerCode (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The IC manufacturer code of the tag.

## Declaration

```swift
var icManufacturerCode: Int { get }
```

<a id="Discussion"></a>

## Discussion

The IC manufacturer code comes from bits 49 through 56 of the [identifier](identifier.md) data, in accordance with ISO/IEC 7816-6:2004.

## See Also

### Getting Tag Information

- [icSerialNumber](icserialnumber.md): The IC serial number assigned to the tag by the manufacturer.
- [identifier](identifier.md): The unique hardware identifier of the tag.

# icManufacturerCode (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The IC manufacturer code of the tag.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger icManufacturerCode;
```

<a id="Discussion"></a>

## Discussion

The IC manufacturer code comes from bits 49 through 56 of the [identifier](identifier.md) data, in accordance with ISO/IEC 7816-6:2004.

## See Also

### Getting Tag Information

- [icSerialNumber](icserialnumber.md): The IC serial number assigned to the tag by the manufacturer.
- [identifier](identifier.md): The unique hardware identifier of the tag.
