> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/identifier](https://developer.apple.com/documentation/corenfc/nfciso7816tag/identifier)

# identifier (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

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

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.

# identifier (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

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

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.
