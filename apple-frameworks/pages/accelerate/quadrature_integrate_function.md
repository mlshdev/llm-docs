> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature_integrate_function](https://developer.apple.com/documentation/accelerate/quadrature_integrate_function)

# quadrature_integrate_function (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct quadrature_integrate_function
```

<a id="overview"></a>

## Overview

Function to integrate

Describes a real function Y=F(X). Since most of the integration time is spent evaluating F, we allow the caller to provide a array callback, computing several values of F in a single call.

## Topics

### Initializers

- [init(fun:fun_arg:)](quadrature_integrate_function/init%28fun_fun_arg_%29.md)

### Instance Properties

- [fun](quadrature_integrate_function/fun.md)
- [fun_arg](quadrature_integrate_function/fun_arg.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Type Aliases

- [quadrature_function_array](quadrature_function_array.md)
- [quadrature_integrate_options](quadrature_integrate_options.md)

# quadrature_integrate_function (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } quadrature_integrate_function;
```

<a id="overview"></a>

## Overview

Function to integrate

Describes a real function Y=F(X). Since most of the integration time is spent evaluating F, we allow the caller to provide a array callback, computing several values of F in a single call.

## Topics

### Instance Properties

- [fun](quadrature_integrate_function/fun.md)
- [fun_arg](quadrature_integrate_function/fun_arg.md)

## See Also

### Type Aliases

- [quadrature_function_array](quadrature_function_array.md)
- [quadrature_integrate_options](quadrature_integrate_options.md)
