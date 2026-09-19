> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloaderextension-zuvm/backgrounddownload:finishedwithfileurl:

# backgroundDownload:finishedWithFileURL:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (void) backgroundDownload:(BADownload *) download finishedWithFileURL:(NSURL *) fileURL;
```

## See Also

### Processing downloads

- [backgroundDownload:didReceiveChallenge:completionHandler:](backgrounddownload_didreceivechallenge_completionhandler_.md)
- [backgroundDownload:failedWithError:](backgrounddownload_failedwitherror_.md)
