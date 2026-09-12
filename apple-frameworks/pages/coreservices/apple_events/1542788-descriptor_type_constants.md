> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1542788-descriptor_type_constants](https://developer.apple.com/documentation/coreservices/apple_events/1542788-descriptor_type_constants)

# Descriptor Type Constants

**Framework:** Core Services

Specify types for descriptors.

<a id="overview"></a>

## Overview

The constants described here specify the data type for a descriptor and show the kind of data stored in a descriptor with that type.

Descriptors are the building blocks used by the Apple Event Manager to construct Apple event attributes and parameters. A descriptor is a data structure of type [AEDesc](../aedesc.md), which consists of data storage and a descriptor type that identifies the type of the data. A descriptor type is defined by the data type [DescType](../desctype.md). AppleScript defines descriptor type constants for a wide variety of common data types. For additional types, see [Numeric Descriptor Type Constants](1542872-numeric_descriptor_type_constant.md) and [Other Descriptor Type Constants](1542760-other_descriptor_type_constants.md). For a complete listing, including data types such as units of length, weight, and volume, see the Apple Event Manager and Open Scripting Architecture header files.

For the constant `typeApplicationURL`, the data that specifies the application URL takes the following format:

<a id="2556039"></a>

**Listing 1**

```occ
eppc://[username[:password]@]host/AppName[[?uid=#]&[pid=#]]
```

As indicated by this format:

- `username` is optional. If present, an `'@'` must appear before the host name. `password` is optional. If present, `username` is not optional, and the password must be separated from the username by a `':'` and must precede the `'@'`. `AppName` is not optional; if it contains non-UTF-8 characters or white space, it must be URL-encoded (for example, `My%20Application`).
- `uid` and `pid` are optional. If `pid` is present, `uid` and `AppName` are ignored and the event is delivered only to applications with the given process id. If `uid` is present, events are directed to the application name owned by the given user id.

The following are examples of valid URLs:

<a id="2556042"></a>

**Listing 2**

```occ
eppc://Steve%20Zellers:wombat@grrr.apple.com/Microsoft%20Word
eppc://Steve%20Zellers:wombat@grrr.apple.com/Microsoft%20Word?pid=1284
```

The availability of user identifiers provides enhanced Apple event support for Fast User Switching. Such identifiers make it possible to send Apple events to applications running in any session, if the uids of the processes match. `'root'` (or `uid 0`) processes are allowed to send Apple events to any process in any session. Non-root processes can only target applications that match their uid.

## Topics

### Constants

- [typeAEList](../typeaelist.md): List of descriptors.
- [typeAERecord](../typeaerecord.md): List of keyword-specified descriptors.
- [typeAppleEvent](../typeappleevent.md): Apple event.
- [typeTrue](../typetrue.md): `TRUE` Boolean value.
- [typeFalse](../typefalse.md): `FALSE` Boolean value.
- [typeAlias](../typealias.md): Alias.
- [typeEnumerated](../typeenumerated.md): Enumerated data.
- [typeType](../typetype.md): Four-character code for event class or event ID
- [typeAppParameters](../typeappparameters.md): Process Manager launch parameters.
- [typeProperty](../typeproperty.md): Apple event object property.
- [typeFSRef](../typefsref.md): File system reference. Use in preference to file system specifications (`typeFSS`).
- [typeFileURL](../typefileurl.md): A file URL. That is, the associated data consists of the bytes of a UTF-8 encoded URL with a scheme of "file". This type is appropriate for describing a file that may not yet exist—see [Technical Note 2022](http://developer.apple.com/technotes/tn/tn2022.html) for more information.
- [typeKeyword](../typekeyword.md): Apple event keyword.
- [typeSectionH](../typesectionh.md): Handle to a section record. (Deprecated.)
- [typeWildCard](../typewildcard.md): Matches any type.
- [typeApplSignature](../typeapplsignature.md): Application signature.
- [typeProcessSerialNumber](../typeprocessserialnumber.md): A process serial number. See also [AEAddressDesc](../aeaddressdesc.md).
- [typeApplicationURL](../typeapplicationurl.md): For specifying an application by URL. See Discussion section below for important information.
- [typeNull](../typenull.md): A null data storage pointer. When resolving an object specifier, an object with a null storage pointer specifies the default container at the top of the container hierarchy.
- [typeBookmarkData](../typebookmarkdata.md)
- [typeEventRecord](../typeeventrecord.md)
- [typeFixed](../typefixed.md)
- [typeQDRectangle](../typeqdrectangle.md)
