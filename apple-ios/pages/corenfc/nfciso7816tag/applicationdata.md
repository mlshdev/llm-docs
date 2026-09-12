> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/applicationdata](https://developer.apple.com/documentation/corenfc/nfciso7816tag/applicationdata)

# applicationData (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The application data bytes extracted from the Type B Answer To Request response.

## Declaration

```swift
var applicationData: Data? { get }
```

## See Also

### Getting Tag Information

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.

# applicationData (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The application data bytes extracted from the Type B Answer To Request response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * applicationData;
```

## See Also

### Getting Tag Information

- [initialSelectedAID](initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.
