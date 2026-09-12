> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmconcatinit](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmconcatinit)

# kCMMConcatInit

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM should initialize any private data your CMM will need for a color session involving the set of profiles specified by the profile array pointed to by the `profileSet` parameter. Your function should also initialize any additional private data needed in handling subsequent calls pertaining to this component instance. For more information, see the function [CWConcatColorWorld](../1805087-cwconcatcolorworld.md).
