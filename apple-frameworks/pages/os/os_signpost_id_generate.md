> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_signpost_id_generate](https://developer.apple.com/documentation/os/os_signpost_id_generate)

# os_signpost_id_generate

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a signpost identifier that’s unique among signposts logged to a specified log.

## Declaration

```objectivec
extern os_signpost_id_t os_signpost_id_generate(os_log_t log);
```

## See Also

### Creating a Signpost Identifier

- [os_signpost_id_make_with_pointer](os_signpost_id_make_with_pointer.md): Creates a signpost identifier that’s unique among signposts logging to the specified log, using a pointer value to generate the unique value.
