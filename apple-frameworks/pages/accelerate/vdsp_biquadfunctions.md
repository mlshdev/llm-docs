> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadfunctions](https://developer.apple.com/documentation/accelerate/vdsp_biquadfunctions)

# vDSP_BiquadFunctions

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A protocol that defines functions for biquadratic filtering.

## Declaration

```swift
protocol vDSP_BiquadFunctions
```

## Topics

### Associated Types

- [Scalar](vdsp_biquadfunctions/scalar.md)

### Type Methods

- [applyMulti(setup:pInputs:pOutputs:count:)](vdsp_biquadfunctions/applymulti%28setup_pinputs_poutputs_count_%29.md)
- [applySingle(source:destination:delays:setup:sectionCount:count:)](vdsp_biquadfunctions/applysingle%28source_destination_delays_setup_sectioncount_count_%29.md)
- [destroySetup(channelCount:biquadSetup:)](vdsp_biquadfunctions/destroysetup%28channelcount_biquadsetup_%29.md)
- [makeBiquadSetup(channelCount:coefficients:sectionCount:)](vdsp_biquadfunctions/makebiquadsetup%28channelcount_coefficients_sectioncount_%29.md)

## Relationships

### Conforming Types

- [vDSP.VectorizableDouble](vdsp/vectorizabledouble.md)
- [vDSP.VectorizableFloat](vdsp/vectorizablefloat.md)

## See Also

### Biquadratic Filtering

- [vDSP_FloatingPointBiquadFilterable](vdsp_floatingpointbiquadfilterable.md): Types that support biquadratic filtering.
