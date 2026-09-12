> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_token_t](https://developer.apple.com/documentation/endpointsecurity/es_token_t)

# es_token_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

An arbitrary buffer of data with its size.

## Declaration

```swift
struct es_token_t
```

## Topics

### Inspecting the Token

- [data](es_token_t/data.md): A data buffer.
- [size](es_token_t/size.md): The size of the data buffer, in bytes.

### Initializers

- [init()](es_token_t/init%28%29.md)
- [init(size:data:)](es_token_t/init%28size_data_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Supporting Types

- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [es_string_token_t](es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.

# es_token_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

An arbitrary buffer of data with its size.

## Declaration

```objectivec
typedef struct { ... } es_token_t;
```

## Topics

### Inspecting the Token

- [data](es_token_t/data.md): A data buffer.
- [size](es_token_t/size.md): The size of the data buffer, in bytes.

## See Also

### Supporting Types

- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [es_string_token_t](es_string_token_t.md): A pointer to a null-terminated string, and the length in bytes of that string.
