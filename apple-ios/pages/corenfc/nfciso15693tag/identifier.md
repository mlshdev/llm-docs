> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/identifier](https://developer.apple.com/documentation/corenfc/nfciso15693tag/identifier)

# identifier (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The unique hardware identifier of the tag.

## Declaration

```swift
var identifier: Data { get }
```

<a id="Discussion"></a>

## Discussion

The [identifier](identifier.md) data is in big-endian byte order.

## See Also

### Getting Tag Information

- [icManufacturerCode](icmanufacturercode.md): The IC manufacturer code of the tag.
- [icSerialNumber](icserialnumber.md): The IC serial number assigned to the tag by the manufacturer.

# identifier (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The unique hardware identifier of the tag.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * identifier;
```

<a id="Discussion"></a>

## Discussion

The [identifier](identifier.md) data is in big-endian byte order.

## See Also

### Getting Tag Information

- [icManufacturerCode](icmanufacturercode.md): The IC manufacturer code of the tag.
- [icSerialNumber](icserialnumber.md): The IC serial number assigned to the tag by the manufacturer.
