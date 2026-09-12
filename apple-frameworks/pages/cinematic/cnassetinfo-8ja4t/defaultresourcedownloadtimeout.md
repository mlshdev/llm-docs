> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-8ja4t/defaultresourcedownloadtimeout](https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/defaultresourcedownloadtimeout)

# defaultResourceDownloadTimeout

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Default timeout value for resource download for `+[CNAssetInfo downloadResourcesForVersions:timeout:completionHandler:]` `-[CNAssetInfo downloadResourcesWithTimeout:completionHandler:]`

## Declaration

```objectivec
@property (class, readonly) NSTimeInterval defaultResourceDownloadTimeout;
```
