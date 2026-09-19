> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/temporalsegmentidentifier/range

# range

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The segment’s timestamp range.

## Declaration

```swift
var range: Range<Int>
```

<a id="discussion"></a>

## Discussion

To get a timestamp in seconds divide the value by the timescale.

## See Also

### Getting the properties

- [durationInSeconds](durationinseconds.md): The segment duration in seconds.
- [rangeInSeconds](rangeinseconds.md): The time range in seconds.
- [source](source.md): The segment source. For files use the full path or URL of the file.
- [timescale](timescale.md): The identifier’s timescale is the number of uniquely identifiable timestamps in a second.
