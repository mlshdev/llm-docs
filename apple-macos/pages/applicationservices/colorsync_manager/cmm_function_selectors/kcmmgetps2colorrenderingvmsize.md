> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmm_function_selectors/kcmmgetps2colorrenderingvmsize

# kCMMGetPS2ColorRenderingVMSize

**Interface language:** Objective-C

**Framework:** Application Services

<a id="overview"></a>

## Overview

In response to this request code, your CMM must obtain or assess the maximum virtual memory (VM) size of the color rendering dictionary (CRD) specified by the destination profile. You must return the size of the CRD for the rendering intent specified by the source profile. For more information, see the function [CMGetPS2ColorRenderingVMSize](../1805206-cmgetps2colorrenderingvmsize.md).
