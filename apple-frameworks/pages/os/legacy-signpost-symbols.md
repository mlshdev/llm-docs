> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/legacy-signpost-symbols](https://developer.apple.com/documentation/os/legacy-signpost-symbols)

# Legacy Signpost Symbols (Swift)

**Framework:** os  
**Kind:** API Collection

Migrate your code away from using these legacy symbols.

## Topics

### Measure Events

- [os_signpost(\_:dso:log:name:signpostID:)](os_signpost%28__dso_log_name_signpostid_%29-2oz8u.md): Deprecated. Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments.
- [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](os_signpost%28__dso_log_name_signpostid_____%29-2om9b.md): Deprecated. Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments, and includes a detailed message.
- [OSSignpostType](ossignposttype.md): Deprecated. The different kinds of signpost.
- [os_signpost(\_:dso:log:name:signpostID:)](os_signpost%28__dso_log_name_signpostid_%29-12m3v.md): Deprecated. Logs the beginning of an animation as a point-of-interest in your code, without a message.
- [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](os_signpost%28__dso_log_name_signpostid_____%29-nez5.md): Deprecated. Logs the beginning of an animation as a point-of-interest in your code, and includes the specified message in the logs.
- [OSSignpostAnimationBegin](ossignpostanimationbegin.md): Deprecated. The signpost options to use when measuring animations.
- [AnimationFormatString](animationformatstring.md): Deprecated. A namespace for utilities specific to animation-related signposts.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.

## See Also

### Measure Events

- [Recording Performance Data](recording-performance-data.md): Add signposts to record interesting time-based events.
- [OSSignposter](ossignposter.md): An object for measuring task performance using the unified logging system.
- [OSSignpostType](ossignposttype.md): Deprecated. The different kinds of signpost.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.

# Legacy Signpost Symbols (Objective-C)

**Framework:** os  
**Kind:** API Collection

Migrate your code away from using these legacy symbols.

## Topics

### Measure Events

- [os_signpost_type_t](ossignposttype.md): Deprecated. The different kinds of signpost.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.

## See Also

### Measure Events

- [Recording Performance Data](recording-performance-data.md): Add signposts to record interesting time-based events.
- [os_signpost_emit_with_type](os_signpost_emit_with_type.md): Logs a point of interest in your code as a time interval or as an event for debugging performance in Instruments.
- [os_signpost_type_t](ossignposttype.md): Deprecated. The different kinds of signpost.
- [os_signpost_interval_begin](os_signpost_interval_begin.md): Marks the start of a time interval in your code using a signpost.
- [os_signpost_interval_end](os_signpost_interval_end.md): Marks the end of a time interval in your code using a signpost.
- [os_signpost_event_emit](os_signpost_event_emit.md): Marks a point of interest in time.
- [os_signpost_id_t](os_signpost_id_t.md): An identifier you use to distinguish between signposts that have the same name and destination log.
