> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmcheckcolors

# kCMMCheckColors

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM should test the given list of colors in the `myColors` parameter against the gamut specified by the destination profile and report if the colors fall within a destination device’s color gamut. For more information, see the function [CWCheckColors](../1805111-cwcheckcolors.md). Required.
