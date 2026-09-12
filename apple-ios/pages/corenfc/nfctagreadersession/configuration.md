> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/configuration](https://developer.apple.com/documentation/corenfc/nfctagreadersession/configuration)

# NFCTagReaderSession.Configuration

**Framework:** Core NFC  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+

## Declaration

```swift
struct Configuration
```

## Topics

### Initializers

- [init(pollingOption:iso7816SelectIdentifiers:feliCaSystemCodes:)](configuration/init%28pollingoption_iso7816selectidentifiers_felicasystemcodes_%29.md)

### Instance Properties

- [feliCaSystemCodes](configuration/felicasystemcodes.md): List of FeliCa System Codes to be used in tag detection when NFCTagReaderSession is configured with PollingOption.iso18092 option. Entries must be specified in “com.apple.developer.nfc.readersession.felica.systemcodes” in Info.plist; all unknown / not matched entries will be dropped. An empty array indicates all system codes specified in Info.plist will be used. Subsequent duplicate elements will get dropped.
- [iso7816SelectIdentifiers](configuration/iso7816selectidentifiers.md): List of ISO7816 Application Identifiers to be used in tag detection when NFCTagReaderSession is configured with PollingOption.iso14443 and/or PollingOption.pace option. Entries must be specified in “com.apple.developer.nfc.readersession.iso7816.select-identifiers” in Info.plist; all unknown / not matched entries will be dropped. An empty array indicates all applications specified in Info.plist will be used. Subsequent duplicate elements will get dropped.
- [pollingOption](configuration/pollingoption.md): RF polling types to perform tag discovery.
