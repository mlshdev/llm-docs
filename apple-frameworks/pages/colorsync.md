> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync](https://developer.apple.com/documentation/colorsync)

# ColorSync (Swift)

**Framework:** ColorSync  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Reproduce colors accurately across a range of input, output, and display devices.

<a id="Overview"></a>

## Overview

ColorSync is the color-management engine on Apple platforms. For most apps, color management happens automatically through higher-level frameworks such as [Core Graphics](coregraphics.md) and [Core Image](coreimage.md). Use ColorSync directly when your app needs to manage color itself; for example, a professional photo, print, or video app that builds custom transforms, or a tool that inspects and calibrates the profiles assigned to devices and displays.

> **Note**

> To pass a profile to Core Graphics, create a [CGColorSpace](coregraphics/cgcolorspace.md) from a [ColorSyncProfile](colorsync/colorsyncprofile.md) with [CGColorSpaceCreateWithColorSyncProfile(\_:\_:)](coregraphics/cgcolorspacecreatewithcolorsyncprofile%28____%29.md).

A [ColorSyncProfile](colorsync/colorsyncprofile.md) describes the color behavior of a device or a working color space, and a [ColorSyncTransform](colorsync/colorsynctransform.md) converts color from one profile to another. Use ColorSync to match color across color spaces and to read, author, and embed the International Color Consortium (ICC) profiles that describe them. You can also create Headroom Adaptive Gain Curve (HAGC) metadata, which controls how the system adapts HDR content when a display can’t show its full brightness range.

## Topics

### Color conversion

- [Color transforms](colorsync/color-transforms.md): Convert color from one profile’s color space to another.
- [Pixel format and data layout](colorsync/pixel-format.md): Describe the memory layout of the pixel buffers a color transform reads and writes.

### Profile and HDR metadata

- [Color profiles](colorsync/color-profiles.md): Work with the ICC profiles that describe device and working color spaces.
- [Headroom Adaptive Gain Curve](colorsync/headroom-adaptive-gain-curve.md): Work with SMPTE ST 2094-50 tone-mapping metadata shared between HDR stills and video.

### System color management

- [Color devices](colorsync/color-devices.md): Manage the color profiles assigned to displays, printers, scanners, and cameras.
- [Color management modules](colorsync/color-management-modules.md): Work with the Color Management Modules that perform color conversions.

### Supporting types and conventions

- [Supporting types and conventions](colorsync/supporting-types-and-conventions.md): Reference the signatures and conventions that support the color-management APIs.

# ColorSync (Objective-C)

**Framework:** ColorSync  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Reproduce colors accurately across a range of input, output, and display devices.

<a id="Overview"></a>

## Overview

ColorSync is the color-management engine on Apple platforms. For most apps, color management happens automatically through higher-level frameworks such as [Core Graphics](coregraphics.md) and [Core Image](coreimage.md). Use ColorSync directly when your app needs to manage color itself; for example, a professional photo, print, or video app that builds custom transforms, or a tool that inspects and calibrates the profiles assigned to devices and displays.

> **Note**

> To pass a profile to Core Graphics, create a [CGColorSpaceRef](coregraphics/cgcolorspace.md) from a [ColorSyncProfileRef](colorsync/colorsyncprofile.md) with [CGColorSpaceCreateWithColorSyncProfile](coregraphics/cgcolorspacecreatewithcolorsyncprofile%28____%29.md).

A [ColorSyncProfileRef](colorsync/colorsyncprofile.md) describes the color behavior of a device or a working color space, and a [ColorSyncTransformRef](colorsync/colorsynctransform.md) converts color from one profile to another. Use ColorSync to match color across color spaces and to read, author, and embed the International Color Consortium (ICC) profiles that describe them. You can also create Headroom Adaptive Gain Curve (HAGC) metadata, which controls how the system adapts HDR content when a display can’t show its full brightness range.

## Topics

### Color conversion

- [Color transforms](colorsync/color-transforms.md): Convert color from one profile’s color space to another.
- [Pixel format and data layout](colorsync/pixel-format.md): Describe the memory layout of the pixel buffers a color transform reads and writes.

### Profile and HDR metadata

- [Color profiles](colorsync/color-profiles.md): Work with the ICC profiles that describe device and working color spaces.
- [Headroom Adaptive Gain Curve](colorsync/headroom-adaptive-gain-curve.md): Work with SMPTE ST 2094-50 tone-mapping metadata shared between HDR stills and video.

### System color management

- [Color devices](colorsync/color-devices.md): Manage the color profiles assigned to displays, printers, scanners, and cameras.
- [Color management modules](colorsync/color-management-modules.md): Work with the Color Management Modules that perform color conversions.

### Supporting types and conventions

- [Supporting types and conventions](colorsync/supporting-types-and-conventions.md): Reference the signatures and conventions that support the color-management APIs.
