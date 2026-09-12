> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidelement_h](https://developer.apple.com/documentation/iokit/iohidelement_h)

# IOHIDElement.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

IOHIDElement defines a parsed item contained within a Human Interface Device (HID) object. It is used to obtain properties of the parsed. It can also be used to set properties such as calibration settings. IOHIDElement is a CFType object and as such conforms to all the conventions expected such object.

This documentation assumes that you have a basic understanding of the material contained in [Introduction to Accessing Hardware From Applications](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/AccessingHardware/AH_Intro/AH_Intro.html#//apple_ref/doc/uid/TP40002714).

All of the information described in this document is contained in the header file `IOHIDElement.h` found at `/System/Library/Frameworks/IOKit.framework/Headers/hid/IOHIDElement.h`.

<a id="1818329"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<IOKit/hid/IOHIDKeys.h\>
- \<IOKit/hid/IOHIDBase.h\>

## Topics

### Miscellaneous

- [IOHIDElementAttach](1564146-iohidelementattach.md): Establish a relationship between one or more elements.
- [IOHIDElementCollectionType](iohidelement_h/1812712-iohidelementcollectiontype.md): Retrieves the collection type for the element.
- [IOHIDElementCopyAttached](1564123-iohidelementcopyattached.md): Obtain attached elements.
- [IOHIDElementCreateWithDictionary](1564115-iohidelementcreatewithdictionary.md): Creates an element from a dictionary.
- [IOHIDElementDetach](1564116-iohidelementdetach.md): Remove a relationship between one or more elements.
- [IOHIDElementGetChildren](1564119-iohidelementgetchildren.md): Returns the children for the element.
- [IOHIDElementGetCollectionType](1564132-iohidelementgetcollectiontype.md): Retrieves the collection type for the element.
- [IOHIDElementGetCookie](1564124-iohidelementgetcookie.md): Retrieves the cookie for the element.
- [IOHIDElementGetDevice](1564139-iohidelementgetdevice.md): Obtain the device associated with the element.
- [IOHIDElementGetLogicalMax](1564143-iohidelementgetlogicalmax.md): Returns the maximum value possible for the element.
- [IOHIDElementGetLogicalMin](1564137-iohidelementgetlogicalmin.md): Returns the minimum value possible for the element.
- [IOHIDElementGetMax](iohidelement_h/1812802-iohidelementgetmax.md): Returns the maximum value possible for the element.
- [IOHIDElementGetName](1564117-iohidelementgetname.md): Returns the name for the element.
- [IOHIDElementGetParent](1564144-iohidelementgetparent.md): Returns the parent for the element.
- [IOHIDElementGetPhysicalMax](1564134-iohidelementgetphysicalmax.md): Returns the scaled maximum value possible for the element.
- [IOHIDElementGetPhysicalMin](1564140-iohidelementgetphysicalmin.md): Returns the scaled minimum value possible for the element.
- [IOHIDElementGetProperty](1564118-iohidelementgetproperty.md): Returns the an element property.
- [IOHIDElementGetReportCount](1564142-iohidelementgetreportcount.md): Returns the report count for the element.
- [IOHIDElementGetReportID](1564122-iohidelementgetreportid.md): Returns the report ID for the element.
- [IOHIDElementGetReportSize](1564130-iohidelementgetreportsize.md): Returns the report size in bits for the element.
- [IOHIDElementGetType](1564135-iohidelementgettype.md): Retrieves the type for the element.
- [IOHIDElementGetTypeID](1564120-iohidelementgettypeid.md): Returns the type identifier of all IOHIDElement instances.
- [IOHIDElementGetUnit](1564136-iohidelementgetunit.md): Returns the unit property for the element.
- [IOHIDElementGetUnitExponent](1564121-iohidelementgetunitexponent.md): Returns the unit exponenet in base 10 for the element.
- [IOHIDElementGetUsage](1564126-iohidelementgetusage.md): Retrieves the usage for an element.
- [IOHIDElementGetUsagePage](1564128-iohidelementgetusagepage.md): Retrieves the usage page for an element.
- [IOHIDElementHasNullState](1564145-iohidelementhasnullstate.md): Returns the null state property for the element.
- [IOHIDElementHasPreferredState](1564141-iohidelementhaspreferredstate.md): Returns the preferred state property for the element.
- [IOHIDElementIsArray](1564133-iohidelementisarray.md): Returns the array property for the element.
- [IOHIDElementIsNonLinear](1564131-iohidelementisnonlinear.md): Returns the linear property for the element.
- [IOHIDElementIsRelative](1564129-iohidelementisrelative.md): Returns the relative property for the element.
- [IOHIDElementIsVirtual](1564125-iohidelementisvirtual.md): Returns the virtual property for the element.
- [IOHIDElementIsWrapping](1564127-iohidelementiswrapping.md): Returns the wrap property for the element.
- [IOHIDElementSetProperty](1564138-iohidelementsetproperty.md): Sets an element property.
