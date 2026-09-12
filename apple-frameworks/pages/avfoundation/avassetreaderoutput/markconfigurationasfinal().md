> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/markconfigurationasfinal()](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/markconfigurationasfinal())

# markConfigurationAsFinal() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the output that it’s finished reconfiguring time ranges, and allows the asset reader to advance to a completed state.

> Use RandomAccessController.markConfigurationAsFinal() instead

## Declaration

```swift
func markConfigurationAsFinal()
```

<a id="Discussion"></a>

## Discussion

When the value of the [supportsRandomAccess](supportsrandomaccess.md) property is [true](https://developer.apple.com/documentation/swift/true), the asset reader doesn’t advance to an [AVAssetReader.Status.completed](../avassetreader/status-swift.enum/completed.md) state until you call this method.

After you call this method, you can’t make further calls to the [reset(forReadingTimeRanges:)](reset%28forreadingtimeranges_%29.md) method.

When the destination of the output’s media data is an [AVAssetWriterInput](../avassetwriterinput.md) that you configure for multi-pass encoding, an appropriate time to call this method is after the asset writer input indicates that it doesn’t require performing additional passes.

## See Also

### Configuring reading

- [alwaysCopiesSampleData](alwayscopiessampledata.md): Deprecated. A Boolean value that indicates whether the output vends copied sample data.
- [supportsRandomAccess](supportsrandomaccess.md): Deprecated. A Boolean value that indicates whether the output supports reconfiguring the time ranges it reads.
- [reset(forReadingTimeRanges:)](reset%28forreadingtimeranges_%29.md): Deprecated. Restarts reading with a new set of time ranges.

# markConfigurationAsFinal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the output that it’s finished reconfiguring time ranges, and allows the asset reader to advance to a completed state.

## Declaration

```objectivec
- (void) markConfigurationAsFinal;
```

<a id="Discussion"></a>

## Discussion

When the value of the [supportsRandomAccess](supportsrandomaccess.md) property is [true](https://developer.apple.com/documentation/swift/true), the asset reader doesn’t advance to an [AVAssetReaderStatusCompleted](../avassetreader/status-swift.enum/completed.md) state until you call this method.

After you call this method, you can’t make further calls to the [resetForReadingTimeRanges:](reset%28forreadingtimeranges_%29.md) method.

When the destination of the output’s media data is an [AVAssetWriterInput](../avassetwriterinput.md) that you configure for multi-pass encoding, an appropriate time to call this method is after the asset writer input indicates that it doesn’t require performing additional passes.

## See Also

### Configuring reading

- [alwaysCopiesSampleData](alwayscopiessampledata.md): Deprecated. A Boolean value that indicates whether the output vends copied sample data.
- [supportsRandomAccess](supportsrandomaccess.md): Deprecated. A Boolean value that indicates whether the output supports reconfiguring the time ranges it reads.
- [resetForReadingTimeRanges:](reset%28forreadingtimeranges_%29.md): Deprecated. Restarts reading with a new set of time ranges.
