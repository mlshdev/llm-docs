> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmvideocardgammatype](https://developer.apple.com/documentation/applicationservices/cmvideocardgammatype)

# CMVideoCardGammaType

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Specifies a video card gamma profile tag.

## Declaration

```objectivec
typedef struct CMVideoCardGammaType {
    ...
} CMVideoCardGammaType;
```

## Topics

### Instance Properties

- [gamma](cmvideocardgammatype/1560391-gamma.md): Deprecated. A structure that specifies the video card gamma data for the profile tag, as described in [CMVideoCardGamma](cmvideocardgamma.md).
- [reserved](cmvideocardgammatype/1560260-reserved.md): Deprecated. This field is reserved and must contain the value 0.
- [typeDescriptor](cmvideocardgammatype/1560647-typedescriptor.md): Deprecated. The signature type for a video card gamma tag. There is currently only one type possible, `cmSigVideoCardGammaType`.
