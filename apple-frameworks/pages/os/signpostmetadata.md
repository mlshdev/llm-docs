> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/signpostmetadata](https://developer.apple.com/documentation/os/signpostmetadata)

# SignpostMetadata

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The type that represents a message you attach to a signpost.

## Declaration

```swift
typealias SignpostMetadata = OSLogMessage
```

## See Also

### Starting a Signposted Interval

- [beginInterval(\_:id:)](ossignposter/begininterval%28__id_%29.md): Begins a signposted interval.
- [beginInterval(\_:id:\_:)](ossignposter/begininterval%28__id___%29.md): Begins a signposted interval and attaches the specified message.
- [beginAnimationInterval(\_:id:)](ossignposter/beginanimationinterval%28__id_%29.md): Begins a signposted interval for measuring an animation.
- [beginAnimationInterval(\_:id:\_:)](ossignposter/beginanimationinterval%28__id___%29.md): Begins a signposted interval for measuring an animation, and attaches a message.
- [OSSignpostIntervalState](ossignpostintervalstate.md): An object that tracks the state of a signposted interval.
