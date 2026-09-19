> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagreadersession/restartpolling(configuration:)

# restartPolling(configuration:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Restart the polling sequence in this session to discover new tags using the provided configuration.  New tags discovered from polling will return in the subsequent `NFCTagReaderSessionDelegate.tagReaderSession(_:, didDetect:)` call. Tags that are returned previously by `NFCTagReaderSessionDelegate.tagReaderSession(_:, didDetect:)` will become invalid, and all references to these tags shall be removed to properly release the resources. Calling this method on an invalidated session will have no effect; a new reader session is required to restart the reader.

## Declaration

```swift
func restartPolling(configuration: NFCTagReaderSession.Configuration)
```
