> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/outputs](https://developer.apple.com/documentation/avfoundation/avassetreader/outputs)

# outputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The outputs from which you read media data.

## Declaration

```swift
var outputs: [AVAssetReaderOutput] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains the concrete instances of [AVAssetReaderOutput](../avassetreaderoutput.md) that you associate with the reader.

## See Also

### Managing outputs

- [canAdd(\_:)](canadd%28__%29.md): Determines whether you can add the output to the asset reader.
- [add(\_:)](add%28__%29.md): Deprecated. Adds an output to the reader.

# outputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The outputs from which you read media data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetReaderOutput *> * outputs;
```

<a id="Discussion"></a>

## Discussion

The array contains the concrete instances of [AVAssetReaderOutput](../avassetreaderoutput.md) that you associate with the reader.

## See Also

### Managing outputs

- [canAddOutput:](canadd%28__%29.md): Determines whether you can add the output to the asset reader.
- [addOutput:](add%28__%29.md): Deprecated. Adds an output to the reader.
