> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/applying-temporal-antialiasing-and-upscaling-using-metalfx](https://developer.apple.com/documentation/metalfx/applying-temporal-antialiasing-and-upscaling-using-metalfx)

# Applying temporal antialiasing and upscaling using MetalFX

**Interface languages:** Swift, Objective-C

**Framework:** MetalFX  
**Kind:** Sample Code  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · Xcode 14.0+

Reduce render workloads while increasing image detail with MetalFX.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC22 session [10103: Boost performance with MetalFX upscaling](https://developer.apple.com/wwdc22/10103/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

This sample code project requires the following:

- macOS 13 or later, and a Mac with the M1 chip or an Intel-based Mac
- iOS 16 or later, and an iPad with the M1 chip
- Xcode 14 or later

## See Also

### Temporal scaling

- [MTLFXTemporalScaler](mtlfxtemporalscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.
- [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md): A set of properties that configure a temporal scaling effect, and a factory method that creates the effect.
