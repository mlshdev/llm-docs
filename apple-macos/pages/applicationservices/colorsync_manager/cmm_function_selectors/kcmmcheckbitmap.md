> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmcheckbitmap

# kCMMCheckBitmap

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must check the colors of the source image bitmap pointed to by the `bitmap` parameter against the gamut of the destination device using the profiles specified by a previous `kNCMMInit`, `kCMMInit`, or `kCMMConcatInit` request to your CMM. For more information, see the function [CWCheckBitmap](../1805121-cwcheckbitmap.md).
