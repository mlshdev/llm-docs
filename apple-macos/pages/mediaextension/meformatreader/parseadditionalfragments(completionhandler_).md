> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreader/parseadditionalfragments(completionhandler:)](https://developer.apple.com/documentation/mediaextension/meformatreader/parseadditionalfragments(completionhandler:))

# parseAdditionalFragments(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Incorporates additional fragments that the file received after the last time the format reader parsed it.

## Declaration

```swift
optional func parseAdditionalFragments(completionHandler: @escaping @Sendable (MEFormatReaderParseAdditionalFragmentsStatus, (any Error)?) -> Void)
```

```swift
optional func parseAdditionalFragments() async throws -> MEFormatReaderParseAdditionalFragmentsStatus
```

## Parameters

- `completionHandler`: The completion block to execute when the parse operation finishes.

<a id="Discussion"></a>

## Discussion

This method additional fragments of the media asset if they exist. Media asset formats that don’t support incremental fragments don’t need implement this method. Create the [MEFormatReader](../meformatreader.md) object with the [MEFormatReaderInstantiationOptions](../meformatreaderinstantiationoptions.md) property [allowIncrementalFragmentParsing](../meformatreaderinstantiationoptions/allowincrementalfragmentparsing.md) set to [true](https://developer.apple.com/documentation/swift/true). This method does nothing if the value for [MEFileInfo.FragmentsStatus](../mefileinfo/fragmentsstatus-swift.enum.md) is [MEFileInfo.FragmentsStatus.containsFragments](../mefileinfo/fragmentsstatus-swift.enum/containsfragments.md). Once this method returns an error, additional calls fail.

## See Also

### Reading and parsing media assets

- [loadFileInfo(completionHandler:)](loadfileinfo%28completionhandler_%29.md): Loads the file info object with the properties of the media asset.
- [loadMetadata(completionHandler:)](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset.
- [loadTrackReaders(completionHandler:)](loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [MEFormatReaderParseAdditionalFragmentsStatus](../meformatreaderparseadditionalfragmentsstatus.md): Informational status flags that the format reader returns after parsing additional fragments.

# parseAdditionalFragmentsWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Incorporates additional fragments that the file received after the last time the format reader parsed it.

## Declaration

```objectivec
- (void) parseAdditionalFragmentsWithCompletionHandler:(void (^)(MEFormatReaderParseAdditionalFragmentsStatus fragmentStatus, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion block to execute when the parse operation finishes.

<a id="Discussion"></a>

## Discussion

This method additional fragments of the media asset if they exist. Media asset formats that don’t support incremental fragments don’t need implement this method. Create the [MEFormatReader](../meformatreader.md) object with the [MEFormatReaderInstantiationOptions](../meformatreaderinstantiationoptions.md) property [allowIncrementalFragmentParsing](../meformatreaderinstantiationoptions/allowincrementalfragmentparsing.md) set to [true](https://developer.apple.com/documentation/swift/true). This method does nothing if the value for [MEFileInfoFragmentsStatus](../mefileinfo/fragmentsstatus-swift.enum.md) is [MEFileInfoContainsFragments](../mefileinfo/fragmentsstatus-swift.enum/containsfragments.md). Once this method returns an error, additional calls fail.

## See Also

### Reading and parsing media assets

- [loadFileInfoWithCompletionHandler:](loadfileinfo%28completionhandler_%29.md): Loads the file info object with the properties of the media asset.
- [loadMetadataWithCompletionHandler:](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset.
- [loadTrackReadersWithCompletionHandler:](loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [MEFormatReaderParseAdditionalFragmentsStatus](../meformatreaderparseadditionalfragmentsstatus.md): Informational status flags that the format reader returns after parsing additional fragments.
