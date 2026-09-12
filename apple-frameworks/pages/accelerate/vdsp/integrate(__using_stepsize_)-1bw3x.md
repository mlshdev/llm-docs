> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/integrate(_:using:stepsize:)-1bw3x](https://developer.apple.com/documentation/accelerate/vdsp/integrate(_:using:stepsize:)-1bw3x)

# integrate(\_:using:stepSize:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the integration of a double-precision vector using the specified rule.

## Declaration

```swift
static func integrate<U>(_ vector: U, using rule: vDSP.IntegrationRule, stepSize: Double = 1) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## See Also

### Integration

- [integrate(\_:using:stepSize:)](integrate%28__using_stepsize_%29-7wei4.md): Returns the integration of a single-precision vector using the specified rule.
- [integrate(\_:using:stepSize:result:)](integrate%28__using_stepsize_result_%29-75jvf.md): Performs the integration of a double-precision using the specified rule.
- [integrate(\_:using:stepSize:result:)](integrate%28__using_stepsize_result_%29-44lew.md): Performs the integration of a single-precision using the specified rule.
- [vDSP.IntegrationRule](integrationrule.md): Integration rules.
