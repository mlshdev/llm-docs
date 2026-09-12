> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/makesignpostid()](https://developer.apple.com/documentation/os/ossignposter/makesignpostid())

# makeSignpostID()

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns an identifier that’s unique within the scope of the signposter.

## Declaration

```swift
func makeSignpostID() -> OSSignpostID
```

<a id="return-value"></a>

## Return Value

A signpost ID that you use to match an interval’s signposts.

## Mentioned In

- [Recording Performance Data](../recording-performance-data.md)

<a id="Discussion"></a>

## Discussion

The signposter uses a signpost ID to pair the beginning and the end of a signposted interval, which is necessary because multiple intervals with the same configuration and scope can be in-flight simultaneously.

Use this method instead of [init(log:)](../ossignpostid/init%28log_%29.md).

## See Also

### Generating Signpost IDs

- [makeSignpostID(from:)](makesignpostid%28from_%29.md): Returns an identifier that the signposter derives from the specified object.
- [OSSignpostID](../ossignpostid.md): An identifier that disambiguates signposted intervals.
