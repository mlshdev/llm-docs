> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/kconverterprimemethod_normal

# kConverterPrimeMethod_Normal (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.

## Declaration

```swift
var kConverterPrimeMethod_Normal: UInt32 { get }
```

## See Also

### Constants

- [kConverterPrimeMethod_Pre](kconverterprimemethod_pre.md): Prime with `leading` \+ `trailing` input frames.
- [kConverterPrimeMethod_None](kconverterprimemethod_none.md): Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.

# kConverterPrimeMethod_Normal (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.

## Declaration

```objectivec
kConverterPrimeMethod_Normal
```

## See Also

### Constants

- [kConverterPrimeMethod_Pre](kconverterprimemethod_pre.md): Prime with `leading` \+ `trailing` input frames.
- [kConverterPrimeMethod_None](kconverterprimemethod_none.md): Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.
