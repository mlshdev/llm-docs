> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmprofileiteratedata](https://developer.apple.com/documentation/applicationservices/cmprofileiteratedata)

# CMProfileIterateData

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a callback routine with a description of a profile that is during an iteration through the available profiles.

## Declaration

```objectivec
typedef struct CMProfileIterateData {
    ...
} CMProfileIterateData;
```

<a id="overview"></a>

## Overview

The ColorSync Manager defines the `CMProfileIterateData` structure to provide your [CMProfileIterateProcPtr](cmprofileiterateprocptr.md) callback routine with a description of a profile during an iteration through the available profiles that takes place when you call [CMIterateColorSyncFolder](colorsync_manager/1804904-cmiteratecolorsyncfolder.md).

## Topics

### Fields

- [TPLDEV_TYPE_WPS_SPEED](cmprofileiteratedata/1806175-tpldev_type_wps_speed.md)
- [deviceData](cmprofileiteratedata/1806179-devicedata.md)

### Instance Properties

- [asciiName](cmprofileiteratedata/1560309-asciiname.md): Deprecated.
- [code](cmprofileiteratedata/1560666-code.md): Deprecated. A script code identifying the script system used for the profile description. The `ScriptCode` data type is defined in the MacTypes.h header file.
- [dataVersion](cmprofileiteratedata/1560194-dataversion.md): Deprecated. A value identifying the version of the structure. Currently set to `cmProfileIterateDataVersion1`.
- [digest](cmprofileiteratedata/1560403-digest.md): Deprecated.
- [header](cmprofileiteratedata/1560694-header.md): Deprecated. A ColorSync version 2.x profile header structure of type [CM2Header](cm2header.md), containing information such as the profile size, type, version, and so on.
- [location](cmprofileiteratedata/1560465-location.md): Deprecated. A structure specifying the profile location. With ColorSync 2.5, the location is always file-based, but that may not be true for future versions. Your code should always verify that the location structure contains a file specification before attempting to use it.
- [makeAndModel](cmprofileiteratedata/1560138-makeandmodel.md): Deprecated.
- [name](cmprofileiteratedata/1560168-name.md): Deprecated. The profile name, stored as a Pascal-type string (with length byte first) of up to 255 characters.
- [uniCodeName](cmprofileiteratedata/1560310-unicodename.md): Deprecated.
- [uniCodeNameCount](cmprofileiteratedata/1560523-unicodenamecount.md): Deprecated.
