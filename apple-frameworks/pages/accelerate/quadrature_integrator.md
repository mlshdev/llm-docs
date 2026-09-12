> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature_integrator](https://developer.apple.com/documentation/accelerate/quadrature_integrator)

# quadrature_integrator (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify integration algorithms.

## Declaration

```swift
struct quadrature_integrator
```

## Topics

### Constants

- [init(\_:)](quadrature_integrator/init%28__%29.md)
- [init(rawValue:)](quadrature_integrator/init%28rawvalue_%29.md)
- [rawValue](quadrature_integrator/rawvalue.md)
- [QUADRATURE_INTEGRATE_QAG](quadrature_integrate_qag.md): A constant that specifies a simple globally adaptive integrator.
- [QUADRATURE_INTEGRATE_QAGS](quadrature_integrate_qags.md): A constant that specifies global adaptive quadrature.
- [QUADRATURE_INTEGRATE_QNG](quadrature_integrate_qng.md): A constant that specifies a simple non-adaptive automatic integrator.
- [QUADRATURE_INTEGRATE_QAGS_WORKSPACE_PER_INTERVAL](quadrature_integrate_qags_workspace_per_interval.md)
- [QUADRATURE_INTEGRATE_QAG_WORKSPACE_PER_INTERVAL](quadrature_integrate_qag_workspace_per_interval.md)

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
- [quadrature_status](quadrature_status.md): Constants that indicate the status of a quadrature operation.

# quadrature_integrator (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify integration algorithms.

## Declaration

```objectivec
typedef enum { ... } quadrature_integrator;
```

## Topics

### Constants

- [QUADRATURE_INTEGRATE_QAG](quadrature_integrate_qag.md): A constant that specifies a simple globally adaptive integrator.
- [QUADRATURE_INTEGRATE_QAGS](quadrature_integrate_qags.md): A constant that specifies global adaptive quadrature.
- [QUADRATURE_INTEGRATE_QNG](quadrature_integrate_qng.md): A constant that specifies a simple non-adaptive automatic integrator.
- [QUADRATURE_INTEGRATE_QAGS_WORKSPACE_PER_INTERVAL](quadrature_integrate_qags_workspace_per_interval.md)
- [QUADRATURE_INTEGRATE_QAG_WORKSPACE_PER_INTERVAL](quadrature_integrate_qag_workspace_per_interval.md)

## See Also

### Quadrature

- [quadrature_integrate](quadrature_integrate.md): Computes an approximation to the definite integral of a function on a specified interval.
- [quadrature_status](quadrature_status.md): Constants that indicate the status of a quadrature operation.
