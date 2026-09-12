> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/initwithdirectoryfortemporaryfiles:](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/initwithdirectoryfortemporaryfiles:)

# initWithDirectoryForTemporaryFiles:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an instance of AVAssetWritingPlanner given a unique file directory to host all incremental segment files and other intermediate files.

## Declaration

```objectivec
- (instancetype) initWithDirectoryForTemporaryFiles:(NSURL *) directoryForTemporaryFiles;
```

## Parameters

- `directoryForTemporaryFiles`: The file directory to host all incremental segment files and other intermediate files for the current AVAssetWritingPlanner operation.

<a id="return-value"></a>

## Return Value

An instance of AVAssetWritingPlanner.

<a id="discussion"></a>

## Discussion

The directoryForTemporaryFiles must differ between export operations, but remain identical when resuming the same export operation. The client is responsible for ensuring that this NSURL can be re-synthesized exactly across multiple launches of the app and device reboots (if desired). For example, if there are multiple source assets that need to be exported concurrently, these should result in unique NSURLs so that the planner can correctly identify each one. Another example is if the same source asset is being output with different compression configurations, they also should be uniquely identifiable so that they do not alias to the same output file. Source assets, compression configs, and video composition settings should all be taken into account when generating the unique URL. A resuming planner instance can only find the files from a previous planner instance if presented with the identical URL. All intermediate segment files and metadata files are stored in the specified directoryForTemporaryFiles. This initializer throws NSInvalidArgumentException if directoryForTemporaryFiles does not exist, or it is not writable, or it contains a corrupted AVAssetWritingPlanner incremental state file.
