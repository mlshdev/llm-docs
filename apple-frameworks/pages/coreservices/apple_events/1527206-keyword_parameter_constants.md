> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1527206-keyword_parameter_constants](https://developer.apple.com/documentation/coreservices/apple_events/1527206-keyword_parameter_constants)

# Keyword Parameter Constants

**Framework:** Core Services

Specify keyword values for Apple event parameters, as well as information for the `AEManagerInfo` function to retrieve. Some common key word values are shown here.

<a id="overview"></a>

## Overview

These constants are keyword constants for Apple event parameters. An Apple event consists of attributes (which identify the Apple event and denote its task) and, often, parameters (which contain information to be used by the target application). Taken together, the attributes of an Apple event denote the task to be performed on any data specified in the Apple event’s parameters.

Keywords are arbitrary names used by the Apple Event Manager to keep track of various descriptors. Your application cannot examine the contents of an Apple event directly. Instead, you call Apple Event Manager routines such as those described in [Getting Data or Descriptors From Apple Events and Apple Event Records](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1651986) to request attributes and parameters by keyword.

See also [Keyword Attribute Constants](1542920-keyword_attribute_constants.md).

## Topics

### Constants

- [keyDirectObject](../keydirectobject.md): Direct parameter. Usually specifies the data to be acted upon by the target application.
- [keyErrorNumber](../keyerrornumber.md): Error number. Often used to extract error information from a reply Apple event.
- [keyErrorString](../keyerrorstring.md): Error string. Often used to extract error information from a reply Apple event to display to the user.
- [keyProcessSerialNumber](../keyprocessserialnumber.md): Process serial number. See also [AEManagerInfo(\_:\_:)](../1449373-aemanagerinfo.md).
- [keyPreDispatch](../keypredispatch.md): A predispatch handler (an Apple event handler that the Apple Event Manager calls immediately before it dispatches an Apple event). See also [Managing Special Handler Dispatch Tables](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1652333).
- [keySelectProc](../keyselectproc.md): You pass this value in the `functionClass` parameter of the [AEManagerInfo(\_:\_:)](../1449373-aemanagerinfo.md) function to disable the Object Support Library. Disabling the Object Support Library is not recommended.
- [keyAERecorderCount](../keyaerecordercount.md): Used with the `keyword` parameter of the [AEManagerInfo(\_:\_:)](../1449373-aemanagerinfo.md) function. If you pass this value, on return, the `result` parameter supplies the number of processes that are currently recording Apple events.
- [keyAEVersion](../keyaeversion.md): Used with the `keyword` parameter of the [AEManagerInfo(\_:\_:)](../1449373-aemanagerinfo.md) function. If you pass this value, on return, the `result` parameter supplies version information for the Apple Event Manager, in NumVersion format.
