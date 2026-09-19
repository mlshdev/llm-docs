> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmvalidateprofile

# kCMMValidateProfile

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM should test the profile whose reference is passed in the `prof` parameter to determine if the profile contains the minimum set of elements required for a profile of its type. For more information, see the function [CMValidateProfile](../1804856-cmvalidateprofile.md).
