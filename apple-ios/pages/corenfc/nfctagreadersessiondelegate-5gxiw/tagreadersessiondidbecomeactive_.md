> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-5gxiw/tagreadersessiondidbecomeactive:

# tagReaderSessionDidBecomeActive:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the reader session is active.

## Declaration

```objectivec
- (void) tagReaderSessionDidBecomeActive:(NFCTagReaderSession *) session;
```

## Parameters

- `session`: The active reader session. Only one session can be active at a time.

<a id="Discussion"></a>

## Discussion

The reader session calls this method after the device begins scanning for new tags.
