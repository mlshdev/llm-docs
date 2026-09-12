> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/canadd(_:)](https://developer.apple.com/documentation/avfoundation/avassetreader/canadd(_:))

# canAdd(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Determines whether you can add the output to the asset reader.

## Declaration

```swift
func canAdd(_ output: AVAssetReaderOutput) -> Bool
```

## Parameters

- `output`: The asset reader output to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the output; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You may only add outputs that retrieve media data from the asset that you associate with the asset reader.

## See Also

### Managing outputs

- [add(\_:)](add%28__%29.md): Deprecated. Adds an output to the reader.
- [outputs](outputs.md): The outputs from which you read media data.

# canAddOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Determines whether you can add the output to the asset reader.

## Declaration

```objectivec
- (BOOL) canAddOutput:(AVAssetReaderOutput *) output;
```

## Parameters

- `output`: The asset reader output to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the output; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You may only add outputs that retrieve media data from the asset that you associate with the asset reader.

## See Also

### Managing outputs

- [addOutput:](add%28__%29.md): Deprecated. Adds an output to the reader.
- [outputs](outputs.md): The outputs from which you read media data.
