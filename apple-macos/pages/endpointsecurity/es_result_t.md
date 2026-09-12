> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_result_t](https://developer.apple.com/documentation/endpointsecurity/es_result_t)

# es_result_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The result of the Endpoint Security subsystem authorization process.

## Declaration

```swift
struct es_result_t
```

## Topics

### Inspecting Result Properties

- [result](es_result_t/result.md): The message’s result, as either an authorization result or flags.
- [result_type](es_result_t/result_type.md): The type of the message’s result.
- [es_result_type_t](es_result_type_t.md): A type that indicates the type of a message’s result.

### Initializers

- [init()](es_result_t/init%28%29.md)
- [init(result_type:result:)](es_result_t/init%28result_type_result_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting Types

- [es_string_token_t](es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.
- [es_token_t](es_token_t.md): An arbitrary buffer of data with its size.

# es_result_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The result of the Endpoint Security subsystem authorization process.

## Declaration

```objectivec
typedef struct { ... } es_result_t;
```

## Topics

### Inspecting Result Properties

- [result](es_result_t/result.md): The message’s result, as either an authorization result or flags.
- [result_type](es_result_t/result_type.md): The type of the message’s result.
- [es_result_type_t](es_result_type_t.md): A type that indicates the type of a message’s result.

## See Also

### Supporting Types

- [es_string_token_t](es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.
- [es_token_t](es_token_t.md): An arbitrary buffer of data with its size.
