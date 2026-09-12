> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalsegmentidentifier/rangeinseconds](https://developer.apple.com/documentation/createmlcomponents/temporalsegmentidentifier/rangeinseconds)

# rangeInSeconds

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The time range in seconds.

## Declaration

```swift
var rangeInSeconds: Range<TimeInterval> { get }
```

## See Also

### Getting the properties

- [durationInSeconds](durationinseconds.md): The segment duration in seconds.
- [range](range.md): The segment’s timestamp range.
- [source](source.md): The segment source. For files use the full path or URL of the file.
- [timescale](timescale.md): The identifier’s timescale is the number of uniquely identifiable timestamps in a second.
