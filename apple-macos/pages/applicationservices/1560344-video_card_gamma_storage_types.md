> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1560344-video_card_gamma_storage_types

# Video Card Gamma Storage Types

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify data storage type constants.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmVideoCardGammaTableType](1560344-video_card_gamma_storage_types/cmvideocardgammatabletype.md): The video card gamma data is stored in a table format. See [CMVideoCardGammaTable](cmvideocardgammatable.md) for a description of the table format.
- [cmVideoCardGammaFormulaType](1560344-video_card_gamma_storage_types/cmvideocardgammaformulatype.md): The video card gamma tag data is stored as a formula. See [CMVideoCardGammaFormula](cmvideocardgammaformula.md) for a description of the formula format.
