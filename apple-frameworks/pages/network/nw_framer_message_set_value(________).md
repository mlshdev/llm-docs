> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_message_set_value(_:_:_:_:)](https://developer.apple.com/documentation/network/nw_framer_message_set_value(_:_:_:_:))

# nw_framer_message_set_value(\_:\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a value to be stored in a framer message, with a completion to call to disposed the stored value when the message is released.

## Declaration

```swift
func nw_framer_message_set_value(_ message: nw_framer_message_t, _ key: UnsafePointer<CChar>, _ value: UnsafeMutableRawPointer?, _ dispose_value: nw_framer_message_dispose_value_t?)
```

## See Also

### Customizing Framer Messages

- [nw_framer_message_t](nw_framer_message_t.md): A message for a custom protocol, in which you can store arbitrary key-value pairs.
- [nw_protocol_metadata_is_framer_message(\_:)](nw_protocol_metadata_is_framer_message%28__%29.md): Checks if a metadata object represents a custom framer protocol message.
- [nw_framer_protocol_create_message(\_:)](nw_framer_protocol_create_message%28__%29.md): Initializes an empty message for a custom framer definition.
- [nw_framer_message_create(\_:)](nw_framer_message_create%28__%29.md): Initializes an empty message from within a framer implementation.
- [nw_framer_message_dispose_value_t](nw_framer_message_dispose_value_t.md): A handler that’s invoked when your custom value needs to be released due to a message being released or the value being replaced.
- [nw_framer_message_set_object_value(\_:\_:\_:)](nw_framer_message_set_object_value%28______%29.md): Sets an NSObject value to be stored in a framer message.
- [nw_framer_message_access_value(\_:\_:\_:)](nw_framer_message_access_value%28______%29.md): Accesses a custom value stored in a framer message.
- [nw_framer_message_copy_object_value(\_:\_:)](nw_framer_message_copy_object_value%28____%29.md): Accesses an NSObject value stored in a framer message.

# nw_framer_message_set_value (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a value to be stored in a framer message, with a completion to call to disposed the stored value when the message is released.

## Declaration

```objectivec
void nw_framer_message_set_value(nw_framer_message_t message, const char *key, void *value, nw_framer_message_dispose_value_t dispose_value);
```

## See Also

### Customizing Framer Messages

- [nw_framer_message_t](nw_framer_message_t.md): A message for a custom protocol, in which you can store arbitrary key-value pairs.
- [nw_protocol_metadata_is_framer_message](nw_protocol_metadata_is_framer_message%28__%29.md): Checks if a metadata object represents a custom framer protocol message.
- [nw_framer_protocol_create_message](nw_framer_protocol_create_message%28__%29.md): Initializes an empty message for a custom framer definition.
- [nw_framer_message_create](nw_framer_message_create%28__%29.md): Initializes an empty message from within a framer implementation.
- [nw_framer_message_dispose_value_t](nw_framer_message_dispose_value_t.md): A handler that’s invoked when your custom value needs to be released due to a message being released or the value being replaced.
- [nw_framer_message_set_object_value](nw_framer_message_set_object_value%28______%29.md): Sets an NSObject value to be stored in a framer message.
- [nw_framer_message_access_value](nw_framer_message_access_value%28______%29.md): Accesses a custom value stored in a framer message.
- [nw_framer_message_copy_object_value](nw_framer_message_copy_object_value%28____%29.md): Accesses an NSObject value stored in a framer message.
