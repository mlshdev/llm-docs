> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/quadrature_function_array](https://developer.apple.com/documentation/accelerate/quadrature_function_array)

# quadrature_function_array (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
typealias quadrature_function_array = (UnsafeMutableRawPointer?, Int, UnsafePointer<Double>, UnsafeMutablePointer<Double>) -> Void
```

## Parameters

- `arg`: User argument passed back to the function when evaluated
- `n`: Dimension of arrays X and Y
- `x`: Array of points to evaluate the function
- `y`: Array receiving the values

<a id="discussion"></a>

## Discussion

Y=F(X) one-dimensional real function, array form, double precision

Should set values y\[i\] = F(x\[i\]) for i=0..n-1.

## See Also

### Type Aliases

- [quadrature_integrate_function](quadrature_integrate_function.md)
- [quadrature_integrate_options](quadrature_integrate_options.md)

# quadrature_function_array (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (*)(void *, unsigned long, const double *, double *) quadrature_function_array;
```

## Parameters

- `arg`: User argument passed back to the function when evaluated
- `n`: Dimension of arrays X and Y
- `x`: Array of points to evaluate the function
- `y`: Array receiving the values

<a id="discussion"></a>

## Discussion

Y=F(X) one-dimensional real function, array form, double precision

Should set values y\[i\] = F(x\[i\]) for i=0..n-1.

## See Also

### Type Aliases

- [quadrature_integrate_function](quadrature_integrate_function.md)
- [quadrature_integrate_options](quadrature_integrate_options.md)
