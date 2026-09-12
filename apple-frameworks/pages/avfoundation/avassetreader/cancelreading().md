> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/cancelreading()](https://developer.apple.com/documentation/avfoundation/avassetreader/cancelreading())

# cancelReading() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels any background work and stops the reader’s outputs from reading more samples.

## Declaration

```swift
func cancelReading()
```

<a id="Discussion"></a>

## Discussion

To stop reading samples before reaching the end of the time range, call this method to stop any in-progress background read operations.

## See Also

### Controlling reading

- [start()](start%28%29.md): Prepares the reader to read media data from the asset.
- [startReading()](startreading%28%29.md): Deprecated. Prepares the asset reader to start reading sample buffers from the asset.

# cancelReading (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cancels any background work and stops the reader’s outputs from reading more samples.

## Declaration

```objectivec
- (void) cancelReading;
```

<a id="Discussion"></a>

## Discussion

To stop reading samples before reaching the end of the time range, call this method to stop any in-progress background read operations.

## See Also

### Controlling reading

- [startReading](startreading%28%29.md): Deprecated. Prepares the asset reader to start reading sample buffers from the asset.
