> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_return_t](https://developer.apple.com/documentation/endpointsecurity/es_return_t)

# es_return_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

Values that indicate the result of an Endpoint Security action that can only succeed or fail.

## Declaration

```swift
struct es_return_t
```

## Topics

### Return Values

- [ES_RETURN_SUCCESS](es_return_success.md): The action succeeded.
- [ES_RETURN_ERROR](es_return_error.md): The action failed with an error.

### Initializers

- [init(\_:)](es_return_t/init%28__%29.md)
- [init(rawValue:)](es_return_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_return_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_return_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Values that indicate the result of an Endpoint Security action that can only succeed or fail.

## Declaration

```objectivec
typedef enum { ... } es_return_t;
```

## Topics

### Return Values

- [ES_RETURN_SUCCESS](es_return_success.md): The action succeeded.
- [ES_RETURN_ERROR](es_return_error.md): The action failed with an error.
