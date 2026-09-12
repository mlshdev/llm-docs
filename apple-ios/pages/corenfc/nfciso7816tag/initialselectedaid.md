> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/initialselectedaid](https://developer.apple.com/documentation/corenfc/nfciso7816tag/initialselectedaid)

# initialSelectedAID (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.

## Declaration

```swift
var initialSelectedAID: String { get }
```

<a id="Discussion"></a>

## Discussion

The value matches one of the entries in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) information property list key.

## See Also

### Getting Tag Information

- [identifier](identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.

# initialSelectedAID (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSString * initialSelectedAID;
```

<a id="Discussion"></a>

## Discussion

The value matches one of the entries in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) information property list key.

## See Also

### Getting Tag Information

- [identifier](identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.
