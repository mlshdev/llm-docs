> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignpostanimationbegin](https://developer.apple.com/documentation/os/ossignpostanimationbegin)

# OSSignpostAnimationBegin

**Framework:** os  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The signpost options to use when measuring animations.

> Use [OSSignposter](ossignposter.md) instead.

## Declaration

```swift
enum OSSignpostAnimationBegin
```

## Topics

### Getting the Animation Options

- [OSSignpostAnimationBegin.animationBegin](ossignpostanimationbegin/animationbegin.md): A signpost that marks the start of an animation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Measure Events

- [os_signpost(\_:dso:log:name:signpostID:)](os_signpost%28__dso_log_name_signpostid_%29-2oz8u.md): Deprecated. Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments.
- [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](os_signpost%28__dso_log_name_signpostid_____%29-2om9b.md): Deprecated. Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments, and includes a detailed message.
- [OSSignpostType](ossignposttype.md): Deprecated. The different kinds of signpost.
- [os_signpost(\_:dso:log:name:signpostID:)](os_signpost%28__dso_log_name_signpostid_%29-12m3v.md): Deprecated. Logs the beginning of an animation as a point-of-interest in your code, without a message.
- [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](os_signpost%28__dso_log_name_signpostid_____%29-nez5.md): Deprecated. Logs the beginning of an animation as a point-of-interest in your code, and includes the specified message in the logs.
- [AnimationFormatString](animationformatstring.md): Deprecated. A namespace for utilities specific to animation-related signposts.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.
