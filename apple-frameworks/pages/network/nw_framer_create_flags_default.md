> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_create_flags_default](https://developer.apple.com/documentation/network/nw_framer_create_flags_default)

# NW_FRAMER_CREATE_FLAGS_DEFAULT (Swift)

**Framework:** Network  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A constant flag value that indicates that the default framer protocol behavior should be used.

## Declaration

```swift
var NW_FRAMER_CREATE_FLAGS_DEFAULT: Int32 { get }
```

## See Also

### Adding Framers to Connections

- [nw_framer_create_definition(\_:\_:\_:)](nw_framer_create_definition%28______%29.md): Initializes a new protocol definition based on your protocol implementation.
- [nw_framer_start_handler_t](nw_framer_start_handler_t.md): A handler that represents the entry point into your custom protocol.
- [nw_framer_t](nw_framer_t.md): An object that represents a single instance of your custom protocol running in a connection.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [nw_framer_create_options(\_:)](nw_framer_create_options%28__%29.md): Initializes a set of protocol options with a custom framer definition.

# NW_FRAMER_CREATE_FLAGS_DEFAULT (Objective-C)

**Framework:** Network  
**Kind:** Macro  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A constant flag value that indicates that the default framer protocol behavior should be used.

## Declaration

```objectivec
#define NW_FRAMER_CREATE_FLAGS_DEFAULT
```

## See Also

### Adding Framers to Connections

- [nw_framer_create_definition](nw_framer_create_definition%28______%29.md): Initializes a new protocol definition based on your protocol implementation.
- [nw_framer_start_handler_t](nw_framer_start_handler_t.md): A handler that represents the entry point into your custom protocol.
- [nw_framer_t](nw_framer_t.md): An object that represents a single instance of your custom protocol running in a connection.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [nw_framer_create_options](nw_framer_create_options%28__%29.md): Initializes a set of protocol options with a custom framer definition.
