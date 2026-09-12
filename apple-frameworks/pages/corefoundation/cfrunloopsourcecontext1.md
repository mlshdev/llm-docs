> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecontext1](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext1)

# CFRunLoopSourceContext1 (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a version 1 CFRunLoopSource’s behavior.

## Declaration

```swift
struct CFRunLoopSourceContext1
```

## Topics

### Initializers

- [init()](cfrunloopsourcecontext1/init%28%29.md)
- [init(version:info:retain:release:copyDescription:equal:hash:getPort:perform:)](cfrunloopsourcecontext1/init%28version_info_retain_release_copydescription_equal_hash_getport_perform_%29.md)

### Instance Properties

- [copyDescription](cfrunloopsourcecontext1/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [equal](cfrunloopsourcecontext1/equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [getPort](cfrunloopsourcecontext1/getport.md): A callback to retrieve the native Mach port represented by the source. This callback is called when the source is either added to or removed from a run loop mode.
- [hash](cfrunloopsourcecontext1/hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunloopsourcecontext1/info.md): An arbitrary pointer to program-defined data, which can be associated with the run loop source at creation time. This pointer is passed to all the callbacks defined in the context.
- [perform](cfrunloopsourcecontext1/perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [release](cfrunloopsourcecontext1/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunloopsourcecontext1/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfrunloopsourcecontext1/version.md): Version number of the structure. Must be 1.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFRunLoopSourceContext](cfrunloopsourcecontext.md): A structure that contains program-defined data and callbacks with which you can configure a version 0 CFRunLoopSource’s behavior.

# CFRunLoopSourceContext1 (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains program-defined data and callbacks with which you can configure a version 1 CFRunLoopSource’s behavior.

## Declaration

```objectivec
typedef struct { ... } CFRunLoopSourceContext1;
```

## Topics

### Instance Properties

- [copyDescription](cfrunloopsourcecontext1/copydescription.md): A copy description callback for your program-defined `info` pointer. Can be `NULL`.
- [equal](cfrunloopsourcecontext1/equal.md): An equality test callback for your program-defined `info` pointer. Can be `NULL`.
- [getPort](cfrunloopsourcecontext1/getport.md): A callback to retrieve the native Mach port represented by the source. This callback is called when the source is either added to or removed from a run loop mode.
- [hash](cfrunloopsourcecontext1/hash.md): A hash calculation callback for your program-defined `info` pointer. Can be `NULL`.
- [info](cfrunloopsourcecontext1/info.md): An arbitrary pointer to program-defined data, which can be associated with the run loop source at creation time. This pointer is passed to all the callbacks defined in the context.
- [perform](cfrunloopsourcecontext1/perform.md): A perform callback for the run loop source. This callback is called when the source has fired.
- [release](cfrunloopsourcecontext1/release.md): A release callback for your program-defined `info` pointer. Can be `NULL`.
- [retain](cfrunloopsourcecontext1/retain.md): A retain callback for your program-defined `info` pointer. Can be `NULL`.
- [version](cfrunloopsourcecontext1/version.md): Version number of the structure. Must be 1.

## See Also

### Data Types

- [CFRunLoopSourceContext](cfrunloopsourcecontext.md): A structure that contains program-defined data and callbacks with which you can configure a version 0 CFRunLoopSource’s behavior.
