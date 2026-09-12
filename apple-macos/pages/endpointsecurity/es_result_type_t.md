> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_result_type_t](https://developer.apple.com/documentation/endpointsecurity/es_result_type_t)

# es_result_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that indicates the type of a message’s result.

## Declaration

```swift
struct es_result_type_t
```

## Topics

### Result Types

- [ES_RESULT_TYPE_AUTH](es_result_type_auth.md): The authorization result type.
- [ES_RESULT_TYPE_FLAGS](es_result_type_flags.md): The flags result type.

### Initializers

- [init(\_:)](es_result_type_t/init%28__%29.md)
- [init(rawValue:)](es_result_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_result_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Result Properties

- [result](es_result_t/result.md): The message’s result, as either an authorization result or flags.
- [result_type](es_result_t/result_type.md): The type of the message’s result.

# es_result_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

A type that indicates the type of a message’s result.

## Declaration

```objectivec
typedef enum { ... } es_result_type_t;
```

## Topics

### Result Types

- [ES_RESULT_TYPE_AUTH](es_result_type_auth.md): The authorization result type.
- [ES_RESULT_TYPE_FLAGS](es_result_type_flags.md): The flags result type.

## See Also

### Inspecting Result Properties

- [result](es_result_t/result.md): The message’s result, as either an authorization result or flags.
- [result_type](es_result_t/result_type.md): The type of the message’s result.
