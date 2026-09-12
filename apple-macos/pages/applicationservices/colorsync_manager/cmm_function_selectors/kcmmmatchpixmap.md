> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmmatchpixmap](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmmatchpixmap)

# kCMMMatchPixMap

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must match the colors of the pixel map image pointed to by the `myPixMap` parameter to the gamut of the destination device, replacing the original pixel colors with their corresponding colors as specified in the data color space of the destination device’s color gamut. To perform the matching, you use the profiles specified by a previous `kNCMMInit`, `kCMMInit`, or `kCMMConcatInit `request to your CMM. For more information, see the function [CWMatchPixMap](../1805211-cwmatchpixmap.md).
