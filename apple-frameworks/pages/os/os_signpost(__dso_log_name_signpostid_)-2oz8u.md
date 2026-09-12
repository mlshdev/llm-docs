> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_signpost(_:dso:log:name:signpostid:)-2oz8u](https://developer.apple.com/documentation/os/os_signpost(_:dso:log:name:signpostid:)-2oz8u)

# os_signpost(\_:dso:log:name:signpostID:)

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments.

> Use [beginInterval(\_:id:)](ossignposter/begininterval%28__id_%29.md) instead.

## Declaration

```swift
func os_signpost(_ type: OSSignpostType, dso: UnsafeRawPointer = #dsohandle, log: OSLog, name: StaticString, signpostID: OSSignpostID = .exclusive)
```

## Parameters

- `type`: The type of signpost to create.
- `log`: A log object to write the signpost to.
- `name`: The name of the signpost.
- `signpostID`: A signpost identifier you use to disambiguate between signposts with the same name.

## See Also

### Measure Events

- [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](os_signpost%28__dso_log_name_signpostid_____%29-2om9b.md): Deprecated. Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments, and includes a detailed message.
- [OSSignpostType](ossignposttype.md): Deprecated. The different kinds of signpost.
- [os_signpost(\_:dso:log:name:signpostID:)](os_signpost%28__dso_log_name_signpostid_%29-12m3v.md): Deprecated. Logs the beginning of an animation as a point-of-interest in your code, without a message.
- [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](os_signpost%28__dso_log_name_signpostid_____%29-nez5.md): Deprecated. Logs the beginning of an animation as a point-of-interest in your code, and includes the specified message in the logs.
- [OSSignpostAnimationBegin](ossignpostanimationbegin.md): Deprecated. The signpost options to use when measuring animations.
- [AnimationFormatString](animationformatstring.md): Deprecated. A namespace for utilities specific to animation-related signposts.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.
