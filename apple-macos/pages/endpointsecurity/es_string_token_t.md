> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_string_token_t](https://developer.apple.com/documentation/endpointsecurity/es_string_token_t)

# es_string_token_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A pointer to a null-terminated string, and the length in bytes of that string.

## Declaration

```swift
struct es_string_token_t
```

<a id="overview"></a>

## Overview

The length doesn’t include the null terminator character.

## Topics

### Initializers

- [init()](es_string_token_t/init%28%29.md)
- [init(length:data:)](es_string_token_t/init%28length_data_%29.md)

### Inspecting the Token

- [data](es_string_token_t/data.md): The string data.
- [length](es_string_token_t/length.md): The size of the data buffer, in bytes.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Supporting Types

- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [es_token_t](es_token_t.md): An arbitrary buffer of data with its size.

# es_string_token_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A pointer to a null-terminated string, and the length in bytes of that string.

## Declaration

```objectivec
typedef struct { ... } es_string_token_t;
```

<a id="overview"></a>

## Overview

The length doesn’t include the null terminator character.

## Topics

### Inspecting the Token

- [data](es_string_token_t/data.md): The string data.
- [length](es_string_token_t/length.md): The size of the data buffer, in bytes.

## See Also

### Supporting Types

- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [es_token_t](es_token_t.md): An arbitrary buffer of data with its size.
