> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_copy_message(_:)](https://developer.apple.com/documentation/endpointsecurity/es_copy_message(_:))

# es_copy_message(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 11.0)

Copies a message, by allocating new memory.

> Use [es_retain_message(\_:)](es_retain_message%28__%29.md) to retain a message.

## Declaration

```swift
func es_copy_message(_ msg: UnsafePointer<es_message_t>) -> UnsafeMutablePointer<es_message_t>?
```

## Parameters

- `msg`: The message to copy.

<a id="return-value"></a>

## Return Value

A pointer to a copy of the original message.

<a id="Discussion"></a>

## Discussion

After calling this function, the caller owns this memory and must eventually free it with [es_free_message(\_:)](es_free_message%28__%29.md) to avoid leaking memory.

## See Also

### Deprecated Functions

- [es_message_size(\_:)](es_message_size%28__%29.md): Deprecated. Calculates the size of a message structure.
- [es_free_message(\_:)](es_free_message%28__%29.md): Deprecated. Frees the memory allocated for the given message.

# es_copy_message (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+ (deprecated in 11.0)

Copies a message, by allocating new memory.

> Use [es_retain_message](es_retain_message%28__%29.md) to retain a message.

## Declaration

```objectivec
extern es_message_t *es_copy_message(const es_message_t *msg);
```

## Parameters

- `msg`: The message to copy.

<a id="return-value"></a>

## Return Value

A pointer to a copy of the original message.

<a id="Discussion"></a>

## Discussion

After calling this function, the caller owns this memory and must eventually free it with [es_free_message](es_free_message%28__%29.md) to avoid leaking memory.

## See Also

### Deprecated Functions

- [es_message_size](es_message_size%28__%29.md): Deprecated. Calculates the size of a message structure.
- [es_free_message](es_free_message%28__%29.md): Deprecated. Frees the memory allocated for the given message.
