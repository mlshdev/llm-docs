> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmgetps2colorrenderingintent](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmgetps2colorrenderingintent)

# kCMMGetPS2ColorRenderingIntent

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must obtain the color-rendering intent from the header of the source profile whose reference is passed to your function in the `srcProf` parameter and then pass the data to a low-level data-transfer function supplied by the calling application or device driver. For more information, see the function [CMGetPS2ColorRenderingIntent](../1805196-cmgetps2colorrenderingintent.md).
