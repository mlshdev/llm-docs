> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmgetps2colorspace

# kCMMGetPS2ColorSpace

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must obtain or derive the color space element data from the source profile whose reference is passed to your function in the `srcProf` parameter and pass the data to a low-level data-transfer function supplied by the calling application or device driver. For more information, see the function [CMGetPS2ColorSpace](../1805191-cmgetps2colorspace.md).
