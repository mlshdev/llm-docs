> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_free_message(_:)](https://developer.apple.com/documentation/endpointsecurity/es_free_message(_:))

# es_free_message(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 11.0)

Frees the memory allocated for the given message.

> Use [es_release_message(\_:)](es_release_message%28__%29.md) to release a message.

## Declaration

```swift
func es_free_message(_ msg: UnsafeMutablePointer<es_message_t>)
```

## Parameters

- `msg`: The message to free.

<a id="Discussion"></a>

## Discussion

Only free messages you explicitly copied with [es_copy_message(\_:)](es_copy_message%28__%29.md).

> **Warning**

>  Freeing a message from inside a handler block will cause your app to crash.

## See Also

### Deprecated Functions

- [es_copy_message(\_:)](es_copy_message%28__%29.md): Deprecated. Copies a message, by allocating new memory.
- [es_message_size(\_:)](es_message_size%28__%29.md): Deprecated. Calculates the size of a message structure.

# es_free_message (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 11.0)

Frees the memory allocated for the given message.

> Use [es_release_message](es_release_message%28__%29.md) to release a message.

## Declaration

```objectivec
extern void es_free_message(es_message_t *msg);
```

## Parameters

- `msg`: The message to free.

<a id="Discussion"></a>

## Discussion

Only free messages you explicitly copied with [es_copy_message](es_copy_message%28__%29.md).

> **Warning**

>  Freeing a message from inside a handler block will cause your app to crash.

## See Also

### Deprecated Functions

- [es_copy_message](es_copy_message%28__%29.md): Deprecated. Copies a message, by allocating new memory.
- [es_message_size](es_message_size%28__%29.md): Deprecated. Calculates the size of a message structure.
