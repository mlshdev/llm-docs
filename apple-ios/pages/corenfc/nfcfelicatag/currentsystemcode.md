> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/currentsystemcode](https://developer.apple.com/documentation/corenfc/nfcfelicatag/currentsystemcode)

# currentSystemCode (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The system code most recently selected by the reader session during a polling sequence.

## Declaration

```swift
var currentSystemCode: Data { get }
```

<a id="Discussion"></a>

## Discussion

The system code matches one of the entries in the array for the [ISO18092 system codes for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.felica.systemcodes) information property list key.

## See Also

### Getting Current Information

- [currentIDm](currentidm.md): The manufacturer identifier for the system currently selected by the reader session.

# currentSystemCode (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The system code most recently selected by the reader session during a polling sequence.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSData * currentSystemCode;
```

<a id="Discussion"></a>

## Discussion

The system code matches one of the entries in the array for the [ISO18092 system codes for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.felica.systemcodes) information property list key.

## See Also

### Getting Current Information

- [currentIDm](currentidm.md): The manufacturer identifier for the system currently selected by the reader session.
