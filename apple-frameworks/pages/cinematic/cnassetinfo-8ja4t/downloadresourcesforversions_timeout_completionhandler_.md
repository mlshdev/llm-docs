> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/downloadresourcesforversions:timeout:completionhandler:

# downloadResourcesForVersions:timeout:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Downloads the resources required to render cinematic effects on assets Resources are device-wide and are cached once downloaded

## Declaration

```objectivec
+ (NSProgress *) downloadResourcesForVersions:(NSSet<NSNumber *> *) resourceVersions timeout:(NSTimeInterval) downloadTimeout completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `resourceVersions`: Resource version(s) to download. Pass an empty set to download all available resources
- `downloadTimeout`: Maximum seconds to wait before timeout. Pass \\c defaultResourceDownloadTimeout for the system default.
- `completionHandler`: Called on completion; \\c error is \\c nil on success.

<a id="return-value"></a>

## Return Value

A \\c NSProgress tracking the download.
