> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_t](https://developer.apple.com/documentation/network/nw_framer_t)

# nw_framer_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a single instance of your custom protocol running in a connection.

## Declaration

```swift
typealias nw_framer_t = any OS_nw_framer
```

<a id="Discussion"></a>

## Discussion

All interaction between your protocol and the connection occurs through this object.

## See Also

### Adding Framers to Connections

- [nw_framer_create_definition(\_:\_:\_:)](nw_framer_create_definition%28______%29.md): Initializes a new protocol definition based on your protocol implementation.
- [nw_framer_start_handler_t](nw_framer_start_handler_t.md): A handler that represents the entry point into your custom protocol.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [NW_FRAMER_CREATE_FLAGS_DEFAULT](nw_framer_create_flags_default.md): A constant flag value that indicates that the default framer protocol behavior should be used.
- [nw_framer_create_options(\_:)](nw_framer_create_options%28__%29.md): Initializes a set of protocol options with a custom framer definition.

# nw_framer_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a single instance of your custom protocol running in a connection.

## Declaration

```objectivec
typedef NSObject<OS_nw_framer> * nw_framer_t;
```

<a id="Discussion"></a>

## Discussion

All interaction between your protocol and the connection occurs through this object.

## See Also

### Adding Framers to Connections

- [nw_framer_create_definition](nw_framer_create_definition%28______%29.md): Initializes a new protocol definition based on your protocol implementation.
- [nw_framer_start_handler_t](nw_framer_start_handler_t.md): A handler that represents the entry point into your custom protocol.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [NW_FRAMER_CREATE_FLAGS_DEFAULT](nw_framer_create_flags_default.md): A constant flag value that indicates that the default framer protocol behavior should be used.
- [nw_framer_create_options](nw_framer_create_options%28__%29.md): Initializes a set of protocol options with a custom framer definition.
