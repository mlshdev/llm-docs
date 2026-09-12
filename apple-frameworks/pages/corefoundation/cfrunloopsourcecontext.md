> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext)

# CFRunLoopSourceContext (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a version 0 CFRunLoopSource’s behavior.

## Declaration

```swift
struct CFRunLoopSourceContext
```

## Topics

### Initializers

- [init()](cfrunloopsourcecontext/init%28%29.md)
- [init(version:info:retain:release:copyDescription:equal:hash:schedule:cancel:perform:)](cfrunloopsourcecontext/init%28version_info_retain_release_copydescription_equal_hash_schedule_cancel_perform_%29.md)

### Instance Properties

- [cancel](cfrunloopsourcecontext/cancel.md)
- [copyDescription](cfrunloopsourcecontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [equal](cfrunloopsourcecontext/equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](cfrunloopsourcecontext/hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunloopsourcecontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the CFRunLoopSource at creation time. This pointer is passed to all the callbacks defined in the context.
- [perform](cfrunloopsourcecontext/perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [release](cfrunloopsourcecontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunloopsourcecontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [schedule](cfrunloopsourcecontext/schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.
- [version](cfrunloopsourcecontext/version.md): Version number of the structure. Must be 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFRunLoopSourceContext1](cfrunloopsourcecontext1.md): A structure that contains program-defined data and callbacks with which you can configure a version 1 CFRunLoopSource’s behavior.

# CFRunLoopSourceContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a version 0 CFRunLoopSource’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFRunLoopSourceContext;
```

## Topics

### Instance Properties

- [cancel](cfrunloopsourcecontext/cancel.md)
- [copyDescription](cfrunloopsourcecontext/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [equal](cfrunloopsourcecontext/equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [hash](cfrunloopsourcecontext/hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunloopsourcecontext/info.md): An arbitrary pointer to program-defined data, which can be associated with the CFRunLoopSource at creation time. This pointer is passed to all the callbacks defined in the context.
- [perform](cfrunloopsourcecontext/perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [release](cfrunloopsourcecontext/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunloopsourcecontext/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [schedule](cfrunloopsourcecontext/schedule.md): A scheduling callback for the run loop source. This callback is called when the source is added to a run loop mode. Can be `NULL`.
- [version](cfrunloopsourcecontext/version.md): Version number of the structure. Must be 0.

## See Also

### Data Types

- [CFRunLoopSourceContext1](cfrunloopsourcecontext1.md): A structure that contains program-defined data and callbacks with which you can configure a version 1 CFRunLoopSource’s behavior.
