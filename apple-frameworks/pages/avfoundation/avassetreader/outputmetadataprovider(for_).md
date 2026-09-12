> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/outputmetadataprovider(for:)](https://developer.apple.com/documentation/avfoundation/avassetreader/outputmetadataprovider(for:))

# outputMetadataProvider(for:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Attaches the output to the reader and returns an output provider for reading timed metadata groups.

## Declaration

```swift
func outputMetadataProvider(for output: AVAssetReaderTrackOutput) -> sending AVAssetReaderOutput.Provider<AVTimedMetadataGroup>
```

## Parameters

- `output`: The output to be attached to the reader.

<a id="return-value"></a>

## Return Value

A reader output provider with an interface for reading timed metadata groups.

## See Also

### Accessing output providers

- [outputProvider(for:)](outputprovider%28for_%29.md): Attaches the output to the reader and returns an output provider for reading sample buffers.
- [outputProviderWithRandomAccess(for:)](outputproviderwithrandomaccess%28for_%29.md): Attaches the output to the reader and returns a tuple with an output provider for reading sample buffers, and an associated random access controller.
- [outputCaptionProvider(for:validationDelegate:)](outputcaptionprovider%28for_validationdelegate_%29.md): Attaches the output to the reader and returns an output provider for reading caption groups.
- [outputCaptionProviderWithRandomAccess(for:validationDelegate:)](outputcaptionproviderwithrandomaccess%28for_validationdelegate_%29.md): Attaches the output to the reader and returns a tuple with an output provider for reading caption groups, and an associated random access controller.
- [outputMetadataProviderWithRandomAccess(for:)](outputmetadataproviderwithrandomaccess%28for_%29.md): Attaches the output to the reader and returns a tuple with an output provider for timed metadata groups buffers, and an associated random access controller.
