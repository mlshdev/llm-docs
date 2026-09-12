> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-8ja4t/downloadresourceswithtimeout:completionhandler:](https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/downloadresourceswithtimeout:completionhandler:)

# downloadResourcesWithTimeout:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Downloads the resources required to render cinematic effects for the given asset Resources are device-wide and are cached once downloaded

## Declaration

```objectivec
- (NSProgress *) downloadResourcesWithTimeout:(NSTimeInterval) downloadTimeout completionHandler:(void (^)(CNAssetInfo *newAssetInfo, NSError *error)) completionHandler;
```

## Parameters

- `downloadTimeout`: Maximum seconds to wait before timeout. Pass \\c defaultResourceDownloadTimeout for the system default.
- `completionHandler`: Called on completion; On success, \\c newAssetInfo is a refreshed instance with the downloaded resources available; \\c error is non-nil on failure

<a id="return-value"></a>

## Return Value

A \\c NSProgress tracking the download.
