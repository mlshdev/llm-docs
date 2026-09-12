> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/restartpolling(with:)](https://developer.apple.com/documentation/corenfc/nfctagreadersession/restartpolling(with:))

# restartPolling(with:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```swift
func restartPolling(with configuration: NFCTagReaderSessionConfiguration)
```

## Parameters

- `configuration`: Reader configuration used for the polling restart.  The configuration does not persist in the current active session, i.e. `[NFCTagReaderSession restartPolling]` would use the original configuration from session instance initialization.

<a id="discussion"></a>

## Discussion

Restart the polling sequence in this session to discover new tags using the provided configuration.  New tags discovered from polling will return in the subsequent `[NFCTagReaderSessionDelegate tagReaderSession:didDetectTags:]` call. Tags that are returned previously by `[NFCTagReaderSessionDelegate tagReaderSession:didDetectTags:]` will become invalid, and all references to these tags shall be removed to properly release the resources.  Calling this method on an invalidated session will have no effect; a new reader session is required to restart the reader.

# restartPollingWithConfiguration: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```objectivec
- (void) restartPollingWithConfiguration:(NFCTagReaderSessionConfiguration *) configuration;
```

## Parameters

- `configuration`: Reader configuration used for the polling restart.  The configuration does not persist in the current active session, i.e. `[NFCTagReaderSession restartPolling]` would use the original configuration from session instance initialization.

<a id="discussion"></a>

## Discussion

Restart the polling sequence in this session to discover new tags using the provided configuration.  New tags discovered from polling will return in the subsequent `[NFCTagReaderSessionDelegate tagReaderSession:didDetectTags:]` call. Tags that are returned previously by `[NFCTagReaderSessionDelegate tagReaderSession:didDetectTags:]` will become invalid, and all references to these tags shall be removed to properly release the resources.  Calling this method on an invalidated session will have no effect; a new reader session is required to restart the reader.
