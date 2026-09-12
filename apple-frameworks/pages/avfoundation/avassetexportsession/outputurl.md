> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/outputurl](https://developer.apple.com/documentation/avfoundation/avassetexportsession/outputurl)

# outputURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A URL where an asset export session writes its output.

> Use `export(to:as:isolation:)` instead.

## Declaration

```swift
var outputURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

This property value is key-value observable.

# outputURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A URL where an asset export session writes its output.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * outputURL;
```

<a id="Discussion"></a>

## Discussion

This property value is key-value observable.

## See Also

### Configuring output

- [outputFileType](outputfiletype.md): Deprecated. The file type of the output an asset export session writes.
- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.
