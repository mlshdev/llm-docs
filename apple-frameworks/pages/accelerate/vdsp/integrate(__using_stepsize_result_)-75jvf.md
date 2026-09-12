> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/integrate(_:using:stepsize:result:)-75jvf](https://developer.apple.com/documentation/accelerate/vdsp/integrate(_:using:stepsize:result:)-75jvf)

# integrate(\_:using:stepSize:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Performs the integration of a double-precision using the specified rule.

## Declaration

```swift
static func integrate<U, V>(_ vector: U, using rule: vDSP.IntegrationRule, stepSize: Double = 1, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## See Also

### Integration

- [integrate(\_:using:stepSize:)](integrate%28__using_stepsize_%29-1bw3x.md): Returns the integration of a double-precision vector using the specified rule.
- [integrate(\_:using:stepSize:)](integrate%28__using_stepsize_%29-7wei4.md): Returns the integration of a single-precision vector using the specified rule.
- [integrate(\_:using:stepSize:result:)](integrate%28__using_stepsize_result_%29-44lew.md): Performs the integration of a single-precision using the specified rule.
- [vDSP.IntegrationRule](integrationrule.md): Integration rules.
