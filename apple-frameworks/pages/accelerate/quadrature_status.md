> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature_status](https://developer.apple.com/documentation/accelerate/quadrature_status)

# quadrature_status (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the status of a quadrature operation.

## Declaration

```swift
struct quadrature_status
```

## Topics

### Constants

- [init(\_:)](quadrature_status/init%28__%29.md)
- [init(rawValue:)](quadrature_status/init%28rawvalue_%29.md)
- [rawValue](quadrature_status/rawvalue.md)
- [QUADRATURE_ALLOC_ERROR](quadrature_alloc_error.md): A constant that indicates that memory allocation failed.
- [QUADRATURE_ERROR](quadrature_error.md): A constant that indicates that a generic error occurred.
- [QUADRATURE_INTEGRATE_BAD_BEHAVIOUR_ERROR](quadrature_integrate_bad_behaviour_error.md): A constant that indicates bad integrand behaviour, or that an excessive roundoff error occurred.
- [QUADRATURE_INTEGRATE_MAX_EVAL_ERROR](quadrature_integrate_max_eval_error.md): A constant that indicates that the requested accuracy limit could not be reached.
- [QUADRATURE_INTERNAL_ERROR](quadrature_internal_error.md): A constant that indicates that an internal error occurred.
- [QUADRATURE_INVALID_ARG_ERROR](quadrature_invalid_arg_error.md): A constant that indicates that an invalid argument was passed to the operation.
- [QUADRATURE_SUCCESS](quadrature_success.md): A constant that indicates that the Quadrature operation was successful.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Quadrature

- [Quadrature](quadrature.md): A structure that approximates the definite integral of a function over a finite interval.
- [quadrature_integrator](quadrature_integrator.md): Constants that specify integration algorithms.

# quadrature_status (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the status of a quadrature operation.

## Declaration

```objectivec
typedef enum { ... } quadrature_status;
```

## Topics

### Constants

- [QUADRATURE_ALLOC_ERROR](quadrature_alloc_error.md): A constant that indicates that memory allocation failed.
- [QUADRATURE_ERROR](quadrature_error.md): A constant that indicates that a generic error occurred.
- [QUADRATURE_INTEGRATE_BAD_BEHAVIOUR_ERROR](quadrature_integrate_bad_behaviour_error.md): A constant that indicates bad integrand behaviour, or that an excessive roundoff error occurred.
- [QUADRATURE_INTEGRATE_MAX_EVAL_ERROR](quadrature_integrate_max_eval_error.md): A constant that indicates that the requested accuracy limit could not be reached.
- [QUADRATURE_INTERNAL_ERROR](quadrature_internal_error.md): A constant that indicates that an internal error occurred.
- [QUADRATURE_INVALID_ARG_ERROR](quadrature_invalid_arg_error.md): A constant that indicates that an invalid argument was passed to the operation.
- [QUADRATURE_SUCCESS](quadrature_success.md): A constant that indicates that the Quadrature operation was successful.

## See Also

### Quadrature

- [quadrature_integrate](quadrature_integrate.md): Computes an approximation to the definite integral of a function on a specified interval.
- [quadrature_integrator](quadrature_integrator.md): Constants that specify integration algorithms.
