> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmgetps2colorrendering](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmgetps2colorrendering)

# kCMMGetPS2ColorRendering

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must obtain the rendering intent from the source profile’s header and generate the color rendering dictionary (CRD) data from the destination profile, and then pass the data to a low-level data-transfer function supplied by the calling application or device driver. For more information, see the function [CMGetPS2ColorRendering](../1805202-cmgetps2colorrendering.md).
