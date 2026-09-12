> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kconverterprimemethod_none](https://developer.apple.com/documentation/audiotoolbox/kconverterprimemethod_none)

# kConverterPrimeMethod_None (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.

## Declaration

```swift
var kConverterPrimeMethod_None: UInt32 { get }
```

## See Also

### Constants

- [kConverterPrimeMethod_Pre](kconverterprimemethod_pre.md): Prime with `leading` \+ `trailing` input frames.
- [kConverterPrimeMethod_Normal](kconverterprimemethod_normal.md): Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.

# kConverterPrimeMethod_None (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.

## Declaration

```objectivec
kConverterPrimeMethod_None
```

## See Also

### Constants

- [kConverterPrimeMethod_Pre](kconverterprimemethod_pre.md): Prime with `leading` \+ `trailing` input frames.
- [kConverterPrimeMethod_Normal](kconverterprimemethod_normal.md): Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.
