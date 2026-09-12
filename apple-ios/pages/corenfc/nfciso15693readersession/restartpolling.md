> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693readersession/restartpolling](https://developer.apple.com/documentation/corenfc/nfciso15693readersession/restartpolling)

# restartPolling

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 17.0) · iPadOS 11.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0)

## Declaration

```objectivec
- (void) restartPolling;
```

<a id="discussion"></a>

## Discussion

Restart the polling sequence in this session to discover new tags.  Tags that are returned previously by @link \[NFCReaderSessionDelegate readerSession:didDetectTags:\] @link/ will become invalid, and all references to these tags shall be removed to properly release the resources.  Calling this method on an invalidated session will have no effect; a new reader session is required to restart the reader.
