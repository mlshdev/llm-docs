> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/directoryfortemporaryfiles](https://developer.apple.com/documentation/avfoundation/avassetexportsession/directoryfortemporaryfiles)

# directoryForTemporaryFiles (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A directory suitable to store temporary files that the export process generates.

## Declaration

```swift
var directoryForTemporaryFiles: URL? { get set }
```

## See Also

### Configuring output

- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.

# directoryForTemporaryFiles (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A directory suitable to store temporary files that the export process generates.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * directoryForTemporaryFiles;
```

## See Also

### Configuring output

- [outputURL](outputurl.md): Deprecated. A URL where an asset export session writes its output.
- [outputFileType](outputfiletype.md): Deprecated. The file type of the output an asset export session writes.
- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.
