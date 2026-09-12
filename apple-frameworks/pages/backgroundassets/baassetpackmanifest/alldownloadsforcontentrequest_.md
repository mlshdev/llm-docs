> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanifest/alldownloadsforcontentrequest:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanifest/alldownloadsforcontentrequest:)

# allDownloadsForContentRequest:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates download objects for every asset pack in this manifest.

## Declaration

```objectivec
- (NSSet<BADownload *> *) allDownloadsForContentRequest:(BAContentRequest) contentRequest;
```

## Parameters

- `contentRequest`: The content request for the current extension invocation.

<a id="return-value"></a>

## Return Value

A collection of download objects.

<a id="discussion"></a>

## Discussion

The returned download objects can be scheduled with the download manager.

> **Remark**

> Use this method in your downloader extension; use [allDownloads](alldownloads.md) instead in your main application.

## See Also

### Accessing downloads

- [allDownloads](alldownloads.md): Creates download objects for every asset pack in this manifest.
