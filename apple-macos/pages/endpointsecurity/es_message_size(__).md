> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_size(_:)](https://developer.apple.com/documentation/endpointsecurity/es_message_size(_:))

# es_message_size(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** iOS 18.0+ (deprecated in 18.0) · iPadOS 18.0+ (deprecated in 18.0) · Mac Catalyst 18.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 11.0)

Calculates the size of a message structure.

> Use [es_retain_message(\_:)](es_retain_message%28__%29.md) to retain a message. Don’t use [es_message_size(\_:)](es_message_size%28__%29.md) in conjunction with attempting to copy a message; doing so will result in use-after-free bugs.

## Declaration

```swift
func es_message_size(_ msg: UnsafePointer<es_message_t>) -> Int
```

## Parameters

- `msg`: The message to calculate the size of.

<a id="return-value"></a>

## Return Value

The calculated size of the message.

## See Also

### Deprecated Functions

- [es_copy_message(\_:)](es_copy_message%28__%29.md): Deprecated. Copies a message, by allocating new memory.
- [es_free_message(\_:)](es_free_message%28__%29.md): Deprecated. Frees the memory allocated for the given message.

# es_message_size (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** Mac Catalyst 18.0+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 11.0)

Calculates the size of a message structure.

> Use [es_retain_message](es_retain_message%28__%29.md) to retain a message. Don’t use [es_message_size](es_message_size%28__%29.md) in conjunction with attempting to copy a message; doing so will result in use-after-free bugs.

## Declaration

```objectivec
extern size_t es_message_size(const es_message_t *msg);
```

## Parameters

- `msg`: The message to calculate the size of.

<a id="return-value"></a>

## Return Value

The calculated size of the message.

## See Also

### Deprecated Functions

- [es_copy_message](es_copy_message%28__%29.md): Deprecated. Copies a message, by allocating new memory.
- [es_free_message](es_free_message%28__%29.md): Deprecated. Frees the memory allocated for the given message.
