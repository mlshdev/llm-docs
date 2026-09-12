> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature_integrate_options](https://developer.apple.com/documentation/accelerate/quadrature_integrate_options)

# quadrature_integrate_options (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct quadrature_integrate_options
```

<a id="overview"></a>

## Overview

Integration options

Can be 0, 15, 21, 31, 41, 51, 61. 0 maps to the default 21. Used by the QAG integrator only. Other integrators ignore this value.

If a workspace is provided, this value is ignored, and the number of intervals is limited by workspace_size. The QNG integrator doesn’t require a workspace. The QAG integrator requires at least max_intervals \* QUADRATURE_INTEGRATE_QAG_WORKSPACE_PER_INTERVAL bytes in workspace. The QAGS integrator requires at least max_intervals \* QUADRATURE_INTEGRATE_QAGS_WORKSPACE_PER_INTERVAL bytes in workspace.

## Topics

### Initializers

- [init()](quadrature_integrate_options/init%28%29.md)
- [init(integrator:abs_tolerance:rel_tolerance:qag_points_per_interval:max_intervals:)](quadrature_integrate_options/init%28integrator_abs_tolerance_rel_tolerance_qag_points_per_interval_max_intervals_%29.md)

### Instance Properties

- [abs_tolerance](quadrature_integrate_options/abs_tolerance.md)
- [integrator](quadrature_integrate_options/integrator.md)
- [max_intervals](quadrature_integrate_options/max_intervals.md)
- [qag_points_per_interval](quadrature_integrate_options/qag_points_per_interval.md)
- [rel_tolerance](quadrature_integrate_options/rel_tolerance.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Type Aliases

- [quadrature_function_array](quadrature_function_array.md)
- [quadrature_integrate_function](quadrature_integrate_function.md)

# quadrature_integrate_options (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } quadrature_integrate_options;
```

<a id="overview"></a>

## Overview

Integration options

Can be 0, 15, 21, 31, 41, 51, 61. 0 maps to the default 21. Used by the QAG integrator only. Other integrators ignore this value.

If a workspace is provided, this value is ignored, and the number of intervals is limited by workspace_size. The QNG integrator doesn’t require a workspace. The QAG integrator requires at least max_intervals \* QUADRATURE_INTEGRATE_QAG_WORKSPACE_PER_INTERVAL bytes in workspace. The QAGS integrator requires at least max_intervals \* QUADRATURE_INTEGRATE_QAGS_WORKSPACE_PER_INTERVAL bytes in workspace.

## Topics

### Instance Properties

- [abs_tolerance](quadrature_integrate_options/abs_tolerance.md)
- [integrator](quadrature_integrate_options/integrator.md)
- [max_intervals](quadrature_integrate_options/max_intervals.md)
- [qag_points_per_interval](quadrature_integrate_options/qag_points_per_interval.md)
- [rel_tolerance](quadrature_integrate_options/rel_tolerance.md)

## See Also

### Type Aliases

- [quadrature_function_array](quadrature_function_array.md)
- [quadrature_integrate_function](quadrature_integrate_function.md)
