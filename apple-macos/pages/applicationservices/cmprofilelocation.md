> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmprofilelocation](https://developer.apple.com/documentation/applicationservices/cmprofilelocation)

# CMProfileLocation

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains profile location information.

## Declaration

```objectivec
typedef struct CMProfileLocation {
    ...
} CMProfileLocation;
```

<a id="overview"></a>

## Overview

Your application passes a profile location structure of type `CMProfileLocation` when it calls:

-  the function [CMOpenProfile](colorsync_manager/1804853-cmopenprofile.md), specifying the location of a profile to open 
-  the [CMNewProfile](colorsync_manager/1804911-cmnewprofile.md), [CWNewLinkProfile](colorsync_manager/1804915-cwnewlinkprofile.md), or [CMCopyProfile](colorsync_manager/1804870-cmcopyprofile.md) functions, specifying the location of a profile to create or duplicate

## Topics

### Instance Properties

- [locType](cmprofilelocation/1560341-loctype.md): Deprecated. The type of data structure that the `u` field’s `CMProfLoc` union holds—a file specification, a handle, a pointer, or a universal procedure pointer. To specify the type, you use the constants defined in the enumeration described in [Profile Location Type](1560599-profile_location_type.md).
- [u](cmprofilelocation/1560083-u.md): Deprecated. A union of type [CMProfLoc](1560460-cmprofloc.md) identifying the profile location.
