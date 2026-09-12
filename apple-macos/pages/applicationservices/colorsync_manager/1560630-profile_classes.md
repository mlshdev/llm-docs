> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560630-profile_classes](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560630-profile_classes)

# Profile Classes

**Framework:** Application Services

Specify profile class enumerations.

<a id="overview"></a>

## Overview

The ColorSync Manager supports seven classes, or types, of profiles. 

A profile creator specifies the profile class in the profile header’s `profileClass` field. For a description of the profile header, see [CM2Header](../cm2header.md). This enumeration defines the profile class signatures.

## Topics

### Constants

- [cmInputClass](../cminputclass.md): An input device profile defined for a scanner.
- [cmDisplayClass](../cmdisplayclass.md): A display device profile defined for a monitor.
- [cmOutputClass](../cmoutputclass.md): An output device profile defined for a printer.
- [cmLinkClass](../cmlinkclass.md): A device link profile.
- [cmAbstractClass](../cmabstractclass.md): An abstract profile.
- [cmColorSpaceClass](../cmcolorspaceclass.md): A color space profile.
- [cmNamedColorClass](../cmnamedcolorclass.md): A named color space profile.
