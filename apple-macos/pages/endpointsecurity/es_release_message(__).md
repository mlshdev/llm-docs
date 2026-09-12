> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_release_message(_:)](https://developer.apple.com/documentation/endpointsecurity/es_release_message(_:))

# es_release_message(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 11.0+

Releases a previously-retained message.

## Declaration

```swift
func es_release_message(_ msg: UnsafePointer<es_message_t>)
```

## Parameters

- `msg`: The message to release.

## See Also

### Retaining and Releasing Messages

- [es_retain_message(\_:)](es_retain_message%28__%29.md): Retains the given message, extending its lifetime until released.

# es_release_message (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 11.0+

Releases a previously-retained message.

## Declaration

```objectivec
extern void es_release_message(const es_message_t *msg);
```

## Parameters

- `msg`: The message to release.

## See Also

### Retaining and Releasing Messages

- [es_retain_message](es_retain_message%28__%29.md): Retains the given message, extending its lifetime until released.
