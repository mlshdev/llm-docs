> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmcheckpixmap](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmcheckpixmap)

# kCMMCheckPixMap

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must check the colors of the pixel map image pointed to by the `myPixMap` parameter against the gamut of the destination device to determine if the pixel colors are within the gamut of the destination device and report the results. To perform the check, you use the profiles specified by a previous `kNCMMInit`, `kCMMInit`, or `kCMMConcatInit ` request to your CMM. For more information, see the function [CWCheckPixMap](../1805214-cwcheckpixmap.md).
