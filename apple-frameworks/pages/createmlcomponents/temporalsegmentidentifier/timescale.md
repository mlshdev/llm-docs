> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalsegmentidentifier/timescale](https://developer.apple.com/documentation/createmlcomponents/temporalsegmentidentifier/timescale)

# timescale

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The identifier’s timescale is the number of uniquely identifiable timestamps in a second.

## Declaration

```swift
var timescale: Int
```

<a id="discussion"></a>

## Discussion

For example an audio file sampled at 44,100 Hz should have a timescale value of 44,100 (or an integer multiple of that) so that every sample has a unique timestamp.

## See Also

### Getting the properties

- [durationInSeconds](durationinseconds.md): The segment duration in seconds.
- [range](range.md): The segment’s timestamp range.
- [rangeInSeconds](rangeinseconds.md): The time range in seconds.
- [source](source.md): The segment source. For files use the full path or URL of the file.
