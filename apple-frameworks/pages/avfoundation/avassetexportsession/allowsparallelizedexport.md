> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/allowsparallelizedexport](https://developer.apple.com/documentation/avfoundation/avassetexportsession/allowsparallelizedexport)

# allowsParallelizedExport (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates whether the session can parallelize its export operation.

## Declaration

```swift
var allowsParallelizedExport: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) by default, which indicates that the export session is allowed to expedite its processing by using additional resources in parallel on select Mac systems. If parallelization isn’t achievable, export proceeds as normal.

> **Note**

>  Parallelized exports reduce the amount of time it takes to export media, but require additional power consumption. If your app requires opting out of the default behavior, set this value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring output

- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.

# allowsParallelizedExport (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates whether the session can parallelize its export operation.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsParallelizedExport;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) by default, which indicates that the export session is allowed to expedite its processing by using additional resources in parallel on select Mac systems. If parallelization isn’t achievable, export proceeds as normal.

> **Note**

>  Parallelized exports reduce the amount of time it takes to export media, but require additional power consumption. If your app requires opting out of the default behavior, set this value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring output

- [outputURL](outputurl.md): Deprecated. A URL where an asset export session writes its output.
- [outputFileType](outputfiletype.md): Deprecated. The file type of the output an asset export session writes.
- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [canPerformMultiplePassesOverSourceMediaData](canperformmultiplepassesoversourcemediadata.md): A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.
