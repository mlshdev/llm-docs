> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kconverterprimemethod_pre](https://developer.apple.com/documentation/audiotoolbox/kconverterprimemethod_pre)

# kConverterPrimeMethod_Pre (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Prime with `leading` \+ `trailing` input frames.

## Declaration

```swift
var kConverterPrimeMethod_Pre: UInt32 { get }
```

## See Also

### Constants

- [kConverterPrimeMethod_Normal](kconverterprimemethod_normal.md): Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.
- [kConverterPrimeMethod_None](kconverterprimemethod_none.md): Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.

# kConverterPrimeMethod_Pre (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Prime with `leading` \+ `trailing` input frames.

## Declaration

```objectivec
kConverterPrimeMethod_Pre
```

## See Also

### Constants

- [kConverterPrimeMethod_Normal](kconverterprimemethod_normal.md): Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.
- [kConverterPrimeMethod_None](kconverterprimemethod_none.md): Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.
