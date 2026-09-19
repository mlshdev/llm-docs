> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagreadersessionconfiguration/polling

# polling

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Configures the RF polling of the reader session; multiple options can be OR’ed together.  This option affects the possible NFC tag type discover.

## Declaration

```objectivec
@property (nonatomic) NFCPollingOption polling;
```
