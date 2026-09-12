> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560273-element_tags_and_signatures_for_](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560273-element_tags_and_signatures_for_)

# Element Tags and Signatures for Version 1.0 Profiles

**Framework:** Application Services

Define tags and signatures used for version 1.0 profiles.

<a id="overview"></a>

## Overview

The ICC version 2.x profile format differs from the version 1.0 profile format, and ColorSync Manager routines for updating a profile and searching for profiles do not work with version 1.0 profiles. However, your application can use version 1.0 profiles with all other ColorSync routines. For example, you can open a version 1.0 profile using the function [CMOpenProfile](1804853-cmopenprofile.md), obtain the version 1.0 profile header using the function [CMGetProfileHeader](1804879-cmgetprofileheader.md), and access version 1.0 profile elements using the function [CMGetProfileElement](1804973-cmgetprofileelement.md).

To make this possible, the ColorSync Manager includes support for the version 1.0 profile header structure and synthesizes tags to allow you to access four 1.0 elements outside the version 1.0 profile header. This enumeration defines these tags.

## Topics

### Constants

- [cmCS1ChromTag](../cmcs1chromtag.md): The tag signature for the profile chromaticities tag whose element data specifies the XYZ chromaticities for the six primary and secondary colors (red, green, blue, cyan, magenta, and yellow).
- [cmCS1TRCTag](../cmcs1trctag.md): The tag signature for profile tonal response curve data for the associated device.
- [cmCS1NameTag](../cmcs1nametag.md): The tag signature for the profile name string. This is an international string consisting of a Macintosh script code followed by a 63-byte text string identifying the profile.
- [cmCS1CustTag](../cmcs1custtag.md): Private data for a custom CMM.
