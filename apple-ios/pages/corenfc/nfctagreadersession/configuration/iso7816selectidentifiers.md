> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagreadersession/configuration/iso7816selectidentifiers

# iso7816SelectIdentifiers

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

List of ISO7816 Application Identifiers to be used in tag detection when NFCTagReaderSession is configured with PollingOption.iso14443 and/or PollingOption.pace option. Entries must be specified in “com.apple.developer.nfc.readersession.iso7816.select-identifiers” in Info.plist; all unknown / not matched entries will be dropped. An empty array indicates all applications specified in Info.plist will be used.  Subsequent duplicate elements will get dropped.

## Declaration

```swift
var iso7816SelectIdentifiers: [String]
```
