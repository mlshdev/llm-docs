> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmnewlinkprofile

# kCMMNewLinkProfile

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must create a single device link profile of type `DeviceLink` that includes the profiles passed to you in the array pointed to by the `profileSet` parameter. For more information, see the function [CWNewLinkProfile](../1804915-cwnewlinkprofile.md).
