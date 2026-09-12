> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_retain_message(_:)](https://developer.apple.com/documentation/endpointsecurity/es_retain_message(_:))

# es_retain_message(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 11.0+

Retains the given message, extending its lifetime until released.

## Declaration

```swift
func es_retain_message(_ msg: UnsafePointer<es_message_t>)
```

## Parameters

- `msg`: The message to retain.

<a id="Discussion"></a>

## Discussion

If you asynchronously process the message provided to the event-handler block of [es_new_client(\_:\_:)](es_new_client%28____%29.md), you must retain the message.

## See Also

### Retaining and Releasing Messages

- [es_release_message(\_:)](es_release_message%28__%29.md): Releases a previously-retained message.

# es_retain_message (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 11.0+

Retains the given message, extending its lifetime until released.

## Declaration

```objectivec
extern void es_retain_message(const es_message_t *msg);
```

## Parameters

- `msg`: The message to retain.

<a id="Discussion"></a>

## Discussion

If you asynchronously process the message provided to the event-handler block of [es_new_client](es_new_client%28____%29.md), you must retain the message.

## See Also

### Retaining and Releasing Messages

- [es_release_message](es_release_message%28__%29.md): Releases a previously-retained message.
