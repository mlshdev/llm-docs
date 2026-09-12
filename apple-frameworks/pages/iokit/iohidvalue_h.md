> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidvalue_h](https://developer.apple.com/documentation/iokit/iohidvalue_h)

# IOHIDValue.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

IOHIDValue defines a value at a given time from a parsed item (IOHIDElement) contained within a Human Interface Device (HID) object. It is used to obtain either integer or data element values along with scaled values based on physical or calibrated settings. IOHIDValue is a CFType object and as such conforms to all the conventions expected such object.

This documentation assumes that you have a basic understanding of the material contained in [Introduction to Accessing Hardware From Applications](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/AccessingHardware/AH_Intro/AH_Intro.html#//apple_ref/doc/uid/TP40002714).

All of the information described in this document is contained in the header file `IOHIDValue.h` found at `/System/Library/Frameworks/IOKit.framework/Headers/hid/IOHIDValue.h`.

<a id="1818327"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<IOKit/hid/IOHIDBase.h\>
- \<IOKit/hid/IOHIDKeys.h\>

## Topics

### Miscellaneous

- [IOHIDValueCreateWithBytes](1433290-iohidvaluecreatewithbytes.md): Creates a new element value using byte data.
- [IOHIDValueCreateWithBytesNoCopy](1433287-iohidvaluecreatewithbytesnocopy.md): Creates a new element value using byte data without performing a copy.
- [IOHIDValueCreateWithIntegerValue](1433294-iohidvaluecreatewithintegervalue.md): Creates a new element value using an integer value.
- [IOHIDValueGetBytePtr](1433292-iohidvaluegetbyteptr.md): Returns a byte pointer to the value contained in this IOHIDValueRef.
- [IOHIDValueGetElement](1433285-iohidvaluegetelement.md): Returns the element value associated with this IOHIDValueRef.
- [IOHIDValueGetIntegerValue](1433289-iohidvaluegetintegervalue.md): Returns an integer representaion of the value contained in this IOHIDValueRef.
- [IOHIDValueGetLength](1433291-iohidvaluegetlength.md): Returns the size, in bytes, of the value contained in this IOHIDValueRef.
- [IOHIDValueGetScaledValue](1433288-iohidvaluegetscaledvalue.md): Returns an scaled representaion of the value contained in this IOHIDValueRef based on the scale type.
- [IOHIDValueGetTimeStamp](1433286-iohidvaluegettimestamp.md): Returns the timestamp value contained in this IOHIDValueRef.
- [IOHIDValueGetTypeID](1433293-iohidvaluegettypeid.md): Returns the type identifier of all IOHIDValue instances.
