> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/supportsrandomaccess](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/supportsrandomaccess)

# supportsRandomAccess (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the output supports reconfiguring the time ranges it reads.

> Use AVAssetReader.outputProviderWithRandomAccess(for:) instead

## Declaration

```swift
var supportsRandomAccess: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which means you can’t reconfigure the output after reading begins. This setting may result in more efficient reading, particularly when you’re using multiple asset reader outputs.

A value of [true](https://developer.apple.com/documentation/swift/true) indicates that you can reconfigure the output’s time ranges after reading begins by calling the [reset(forReadingTimeRanges:)](reset%28forreadingtimeranges_%29.md) method. This setting also prevents the asset reader from progressing to a completed state until you call the [markConfigurationAsFinal()](markconfigurationasfinal%28%29.md) method.

You can’t set this value after you call [startReading()](../avassetreader/startreading%28%29.md) on the asset reader.

## See Also

### Configuring reading

- [alwaysCopiesSampleData](alwayscopiessampledata.md): Deprecated. A Boolean value that indicates whether the output vends copied sample data.
- [reset(forReadingTimeRanges:)](reset%28forreadingtimeranges_%29.md): Deprecated. Restarts reading with a new set of time ranges.
- [markConfigurationAsFinal()](markconfigurationasfinal%28%29.md): Deprecated. Tells the output that it’s finished reconfiguring time ranges, and allows the asset reader to advance to a completed state.

# supportsRandomAccess (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the output supports reconfiguring the time ranges it reads.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsRandomAccess;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which means you can’t reconfigure the output after reading begins. This setting may result in more efficient reading, particularly when you’re using multiple asset reader outputs.

A value of [true](https://developer.apple.com/documentation/swift/true) indicates that you can reconfigure the output’s time ranges after reading begins by calling the [resetForReadingTimeRanges:](reset%28forreadingtimeranges_%29.md) method. This setting also prevents the asset reader from progressing to a completed state until you call the [markConfigurationAsFinal](markconfigurationasfinal%28%29.md) method.

You can’t set this value after you call [startReading](../avassetreader/startreading%28%29.md) on the asset reader.

## See Also

### Configuring reading

- [alwaysCopiesSampleData](alwayscopiessampledata.md): Deprecated. A Boolean value that indicates whether the output vends copied sample data.
- [resetForReadingTimeRanges:](reset%28forreadingtimeranges_%29.md): Deprecated. Restarts reading with a new set of time ranges.
- [markConfigurationAsFinal](markconfigurationasfinal%28%29.md): Deprecated. Tells the output that it’s finished reconfiguring time ranges, and allows the asset reader to advance to a completed state.
