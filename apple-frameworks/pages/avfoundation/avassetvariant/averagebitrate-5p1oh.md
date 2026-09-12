> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/averagebitrate-5p1oh](https://developer.apple.com/documentation/avfoundation/avassetvariant/averagebitrate-5p1oh)

# averageBitRate

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The average bit rate for the variant.

## Declaration

```swift
@nonobjc var averageBitRate: Double? { get }
```

<a id="Discussion"></a>

## Discussion

If the variant doesn’t define a peak bit rate, the value is negative.

## See Also

### Configuring bit rate

- [peakBitRate](peakbitrate-9hzpi.md): The peak bit rate for the variant.
