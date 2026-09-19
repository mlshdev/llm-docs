> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/defaultresourcedownloadtimeout

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
