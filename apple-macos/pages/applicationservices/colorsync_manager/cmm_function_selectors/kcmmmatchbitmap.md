> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmmatchbitmap](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmmatchbitmap)

# kCMMMatchBitmap

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must match the colors of the source image bitmap pointed to by the `bitmap` parameter to the gamut of the destination device using the profiles specified by a previous `kNCMMInit`, `kCMMInit`, or `kCMMConcatInit `request to your CMM. For more information, see the function [CWMatchBitmap](../1805116-cwmatchbitmap.md).
