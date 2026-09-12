> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/canperformmultiplepassesoversourcemediadata](https://developer.apple.com/documentation/avfoundation/avassetexportsession/canperformmultiplepassesoversourcemediadata)

# canPerformMultiplePassesOverSourceMediaData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.

## Declaration

```swift
var canPerformMultiplePassesOverSourceMediaData: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value for this property is [true](https://developer.apple.com/documentation/swift/true), the export session can produce higher quality results at the expense of longer export times. Setting this property to [true](https://developer.apple.com/documentation/swift/true) may also require the export session to write temporary data to disk during the export. To control the location of temporary data, use the property [directoryForTemporaryFiles](directoryfortemporaryfiles.md).

The default value is [false](https://developer.apple.com/documentation/swift/false). Not all export session configurations can benefit from performing multiple passes over the source media. In these cases, setting this property to [true](https://developer.apple.com/documentation/swift/true) has no effect.

You can’t set this property after the export starts.

## See Also

### Configuring output

- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.

# canPerformMultiplePassesOverSourceMediaData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the export session can perform multiple passes over the source media to achieve better results.

## Declaration

```objectivec
@property (nonatomic) BOOL canPerformMultiplePassesOverSourceMediaData;
```

<a id="Discussion"></a>

## Discussion

When the value for this property is [true](https://developer.apple.com/documentation/swift/true), the export session can produce higher quality results at the expense of longer export times. Setting this property to [true](https://developer.apple.com/documentation/swift/true) may also require the export session to write temporary data to disk during the export. To control the location of temporary data, use the property [directoryForTemporaryFiles](directoryfortemporaryfiles.md).

The default value is [false](https://developer.apple.com/documentation/swift/false). Not all export session configurations can benefit from performing multiple passes over the source media. In these cases, setting this property to [true](https://developer.apple.com/documentation/swift/true) has no effect.

You can’t set this property after the export starts.

## See Also

### Configuring output

- [outputURL](outputurl.md): Deprecated. A URL where an asset export session writes its output.
- [outputFileType](outputfiletype.md): Deprecated. The file type of the output an asset export session writes.
- [supportedFileTypes](supportedfiletypes.md): An array containing the types of files the session can write.
- [allowsParallelizedExport](allowsparallelizedexport.md): A Boolean value that indicates whether the session can parallelize its export operation.
- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to optimize the movie for network use.
- [timeRange](timerange.md): The time range of the source asset to export.
- [fileLengthLimit](filelengthlimit.md): The file length that the output of the session must not exceed.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory suitable to store temporary files that the export process generates.
