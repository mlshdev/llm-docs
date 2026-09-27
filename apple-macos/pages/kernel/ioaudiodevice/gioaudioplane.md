> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiodevice/gioaudioplane

# gIOAudioPlane

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
static const IORegistryPlane *gIOAudioPlane;
```

<a id="overview"></a>

## Overview

A static IORegistryPlane representing the new IOAudioPlane that the IOAudioFamily uses to represent the signal chain of the device.
