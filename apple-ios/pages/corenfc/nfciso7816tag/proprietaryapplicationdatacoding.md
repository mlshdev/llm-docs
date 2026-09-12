> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/proprietaryapplicationdatacoding](https://developer.apple.com/documentation/corenfc/nfciso7816tag/proprietaryapplicationdatacoding)

# proprietaryApplicationDataCoding (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the application data follows proprietary data coding.

## Declaration

```swift
var proprietaryApplicationDataCoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), data in the [applicationData](applicationdata.md) property follows the ISO14443-3 specification.

## See Also

### Getting Tag Information

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.

# proprietaryApplicationDataCoding (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the application data follows proprietary data coding.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL proprietaryApplicationDataCoding;
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), data in the [applicationData](applicationdata.md) property follows the ISO14443-3 specification.

## See Also

### Getting Tag Information

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
