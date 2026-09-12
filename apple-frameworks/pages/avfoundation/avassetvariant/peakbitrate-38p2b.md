> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/peakbitrate-38p2b](https://developer.apple.com/documentation/avfoundation/avassetvariant/peakbitrate-38p2b)

# peakBitRate

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The peak bit rate for the variant.

## Declaration

```objectivec
@property (nonatomic, readonly) double peakBitRate;
```

<a id="Discussion"></a>

## Discussion

If the variant doesn’t define a peak bit rate, the value is negative.

## See Also

### Configuring bit rate

- [averageBitRate](averagebitrate-7bnsq.md): The average bit rate for the variant.
