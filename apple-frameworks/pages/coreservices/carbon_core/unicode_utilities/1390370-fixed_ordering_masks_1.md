> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/unicode_utilities/1390370-fixed_ordering_masks_1](https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities/1390370-fixed_ordering_masks_1)

# Fixed Ordering Masks 1

**Framework:** Core Services

Set and test the `UCCollateOptions` field that specifies a fixed ordering scheme.

<a id="overview"></a>

## Overview

You can use these constants to set or obtain a value that specifies a fixed ordering scheme. For a description of the available types of fixed ordering schemes, see  [Fixed Ordering Scheme](1390361-fixed_ordering_scheme.md).

For example, to specify `kUCCollateTypeHFSExtended` in the `options` parameter of the function  [UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:)](../../1390513-uccomparetextnolocale.md) , the `kUCCollateTypeHFSExtended` value must be shifted by `kUCCollateTypeShiftBits ` :

`options = kUCCollateTypeHFSExtended     kUCCollateTypeShiftBits; `

You would obtain the ordering scheme value from the `options` parameter as follows:

<a id="2557463"></a>

**Listing 1**

```occ
fixedOrderType = ((options > > kUCCollateTypeShiftBits) &  kUCCollateTypeSourceMask);
```

See also [Fixed Ordering Masks 2](1390573-fixed_ordering_masks_2.md).

## Topics

### Constants

- [kUCCollateTypeSourceMask](../../kuccollatetypesourcemask.md): You can use this mask, in conjunction with the `kUCCollateTypeShiftBits` constant, to obtain a value identifying a fixed ordering scheme.
- [kUCCollateTypeShiftBits](../../kuccollatetypeshiftbits.md)
