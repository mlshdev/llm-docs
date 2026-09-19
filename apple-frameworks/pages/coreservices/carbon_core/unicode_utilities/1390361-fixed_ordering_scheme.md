> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities/1390361-fixed_ordering_scheme

# Fixed Ordering Scheme

**Framework:** Core Services

Specifies to use the fixed ordering scheme.

<a id="overview"></a>

## Overview

`UCCollateOptions` is a 32-bit value. Bits 0-23 are described in  [UCCollateOptions](../../uccollateoptions.md). The field consisting of bits 24-31 is used for values that specify which fixed ordering scheme to use with the function  [UCCompareTextNoLocale(\_:\_:\_:\_:\_:\_:\_:)](../../1390513-uccomparetextnolocale.md). Currently only one such scheme is provided.

Constants are provided for setting and testing the `UCCollateOptions` field that specifies the ordering scheme. These values are described in  [Fixed Ordering Masks 1](1390370-fixed_ordering_masks_1.md)  and  [Fixed Ordering Masks 2](1390573-fixed_ordering_masks_2.md).

## Topics

### Constants

- [kUCCollateTypeHFSExtended](../../kuccollatetypehfsextended.md)
