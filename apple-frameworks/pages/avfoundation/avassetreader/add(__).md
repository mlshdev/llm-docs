> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/add(_:)](https://developer.apple.com/documentation/avfoundation/avassetreader/add(_:))

# add(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Adds an output to the reader.

> Use the appropriate AVAssetReader.outputProvider(for:...) overload for your output and optional adaptor instead

## Declaration

```swift
func add(_ output: AVAssetReaderOutput)
```

## Parameters

- `output`: The asset reader output to add.

<a id="Discussion"></a>

## Discussion

Add outputs to read from one or more tracks of an asset. You can only add outputs that retrieve media data from the asset that you associate with the asset reader.

You can’t add an output after you start reading.

## See Also

### Managing outputs

- [canAdd(\_:)](canadd%28__%29.md): Determines whether you can add the output to the asset reader.
- [outputs](outputs.md): The outputs from which you read media data.

# addOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Adds an output to the reader.

## Declaration

```objectivec
- (void) addOutput:(AVAssetReaderOutput *) output;
```

## Parameters

- `output`: The asset reader output to add.

<a id="Discussion"></a>

## Discussion

Add outputs to read from one or more tracks of an asset. You can only add outputs that retrieve media data from the asset that you associate with the asset reader.

You can’t add an output after you start reading.

## See Also

### Managing outputs

- [canAddOutput:](canadd%28__%29.md): Determines whether you can add the output to the asset reader.
- [outputs](outputs.md): The outputs from which you read media data.
