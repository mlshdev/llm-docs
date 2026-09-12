> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/evaluatepolynomial(usingcoefficients:withvariables:)-31vi2](https://developer.apple.com/documentation/accelerate/vdsp/evaluatepolynomial(usingcoefficients:withvariables:)-31vi2)

# evaluatePolynomial(usingCoefficients:withVariables:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a double-precision evaluated polynomial using specified coefficients and variables.

## Declaration

```swift
static func evaluatePolynomial<U>(usingCoefficients coefficients: [Double], withVariables variables: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `coefficients`: An array that contains the coefficients.
- `variables`: An array that contains the independent variables.

## Mentioned In

- [Finding an interpolating polynomial using the Vandermonde method](../finding-an-interpolating-polynomial-using-the-vandermonde-method.md)

<a id="Discussion"></a>

## Discussion

For example, the following code evaluates the polynomial with the coefficients `[10.0, 20.0, 30.0]` and the variables `[7.0, 5.0]`:

```swift
    let coefficients: [Double] = [10, 20, 30]
    let variables: [Double] = [7, 5]
    
    let result = vDSP.evaluatePolynomial(usingCoefficients: coefficients,
                                         withVariables: variables)
    
    // Prints "[660.0, 380.0]".
    //    result[0] = (10 * 7²) + (20 * 7¹) + (30 * 7⁰) = 660
    //    result[1] = (10 * 5²) + (20 * 5¹) + (30 * 5⁰) = 380
    print(result)
```

## See Also

### Related Documentation

- [vDSP_vpoly](../vdsp_vpoly.md): Evaluates a single-precision polynomial using specified coefficients, variables, and strides.

### Double-precision polynomial evaluation

- [evaluatePolynomial(usingCoefficients:withVariables:result:)](evaluatepolynomial%28usingcoefficients_withvariables_result_%29-2ncdh.md): Evaluates a double-precision polynomial using specified coefficients and variables.
