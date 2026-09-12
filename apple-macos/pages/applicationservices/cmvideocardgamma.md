> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmvideocardgamma](https://developer.apple.com/documentation/applicationservices/cmvideocardgamma)

# CMVideoCardGamma

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains video gamma data to store with a video gamma profile tag.

## Declaration

```objectivec
typedef struct CMVideoCardGamma {
    ...
} CMVideoCardGamma;
```

<a id="overview"></a>

## Overview

The ColorSync Manager defines the `CMVideoCardGamma` data structure to specify the video gamma data to store with a video gamma profile tag. The structure is a union that can store data in either table or formula format.

## Topics

### Fields

- [table](cmvideocardgamma/1806487-table.md): A structure of type `CMVideoCardGammaTable`. If the `tagType` field has the value `cmVideoCardGammaTableType`, the `CMVideoCardGamma` structure’s union field should be treated as a table, as described in [CMVideoCardGammaTable](cmvideocardgammatable.md).
- [formula](cmvideocardgamma/1806493-formula.md)

### Instance Properties

- [tagType](cmvideocardgamma/1560322-tagtype.md): Deprecated. A [Video Card Gamma Storage Types](1560344-video_card_gamma_storage_types.md) constant that specifies the format of the data currently stored in the union. To determine the type of structure present in a specific instance of the `CMVideoCardGamma` structure, you test this union tag. If you are setting up a `CMVideoCardGamma` structure to store video card gamma data, you set `tagType` to a constant value that identifies the structure type you are using. The possible constant values are described in [Video Card Gamma Storage Types](1560344-video_card_gamma_storage_types.md).
- [u](cmvideocardgamma/1560238-u.md): Deprecated.
