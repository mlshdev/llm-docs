> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/historicalbytes](https://developer.apple.com/documentation/corenfc/nfciso7816tag/historicalbytes)

# historicalBytes (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The historical bytes extracted from the Type A Answer To Select response.

## Declaration

```swift
var historicalBytes: Data? { get }
```

## See Also

### Getting Tag Information

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](identifier.md): The unique hardware identifier of the tag.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.

# historicalBytes (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The historical bytes extracted from the Type A Answer To Select response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * historicalBytes;
```

## See Also

### Getting Tag Information

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](identifier.md): The unique hardware identifier of the tag.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.
