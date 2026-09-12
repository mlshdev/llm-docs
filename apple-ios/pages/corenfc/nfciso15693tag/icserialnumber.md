> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/icserialnumber](https://developer.apple.com/documentation/corenfc/nfciso15693tag/icserialnumber)

# icSerialNumber (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The IC serial number assigned to the tag by the manufacturer.

## Declaration

```swift
var icSerialNumber: Data { get }
```

<a id="Discussion"></a>

## Discussion

The IC serial number comes from bits 1 through 48 of the [identifier](identifier.md) data and is in big-endian byte order.

## See Also

### Getting Tag Information

- [icManufacturerCode](icmanufacturercode.md): The IC manufacturer code of the tag.
- [identifier](identifier.md): The unique hardware identifier of the tag.

# icSerialNumber (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The IC serial number assigned to the tag by the manufacturer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * icSerialNumber;
```

<a id="Discussion"></a>

## Discussion

The IC serial number comes from bits 1 through 48 of the [identifier](identifier.md) data and is in big-endian byte order.

## See Also

### Getting Tag Information

- [icManufacturerCode](icmanufacturercode.md): The IC manufacturer code of the tag.
- [identifier](identifier.md): The unique hardware identifier of the tag.
