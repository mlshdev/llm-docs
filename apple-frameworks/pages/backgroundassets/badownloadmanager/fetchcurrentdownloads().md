> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/fetchcurrentdownloads()](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/fetchcurrentdownloads())

# fetchCurrentDownloads() (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
func fetchCurrentDownloads() throws -> [BADownload]
```

## See Also

### Fetching in-progress downloads

- [fetchCurrentDownloads(completionHandler:)](fetchcurrentdownloads%28completionhandler_%29.md): Fetches the contents of the manager’s download queue.

# fetchCurrentDownloads: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (NSArray<BADownload *> *) fetchCurrentDownloads:(NSError **) error;
```

## See Also

### Fetching in-progress downloads

- [fetchCurrentDownloadsWithCompletionHandler:](fetchcurrentdownloads%28completionhandler_%29.md): Fetches the contents of the manager’s download queue.
