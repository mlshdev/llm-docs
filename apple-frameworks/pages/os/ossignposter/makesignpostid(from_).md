> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/makesignpostid(from:)](https://developer.apple.com/documentation/os/ossignposter/makesignpostid(from:))

# makeSignpostID(from:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns an identifier that the signposter derives from the specified object.

## Declaration

```swift
func makeSignpostID(from object: AnyObject) -> OSSignpostID
```

## Parameters

- `object`: The object the signposter uses to match the begin and end calls of a signposted interval.

<a id="return-value"></a>

## Return Value

A signpost ID that you use to match an interval’s signposts.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Don’t use this method to generate an identifier for a signposted interval that crosses process boundaries. Instead, use the [makeSignpostID()](makesignpostid%28%29.md) method.

The signposter uses a signpost ID to pair the beginning and the end of a signposted interval, which is necessary because multiple intervals with the same configuration and scope can be in-flight simultaneously.

Use this method instead of [init(log:object:)](../ossignpostid/init%28log_object_%29.md).

## See Also

### Generating Signpost IDs

- [makeSignpostID()](makesignpostid%28%29.md): Returns an identifier that’s unique within the scope of the signposter.
- [OSSignpostID](../ossignpostid.md): An identifier that disambiguates signposted intervals.
