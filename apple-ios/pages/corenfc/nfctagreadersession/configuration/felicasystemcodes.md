> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagreadersession/configuration/felicasystemcodes

# feliCaSystemCodes

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

List of FeliCa System Codes to be used in tag detection when NFCTagReaderSession is configured with PollingOption.iso18092 option. Entries must be specified in “com.apple.developer.nfc.readersession.felica.systemcodes” in Info.plist; all unknown / not matched entries will be dropped. An empty array indicates all system codes specified in Info.plist will be used.  Subsequent duplicate elements will get dropped.

## Declaration

```swift
var feliCaSystemCodes: [String]
```
