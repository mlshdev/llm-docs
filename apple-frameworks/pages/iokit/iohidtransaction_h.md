> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidtransaction_h](https://developer.apple.com/documentation/iokit/iohidtransaction_h)

# IOHIDTransaction.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

IOHIDTransaction defines an object used to manipulate multiple parsed items (IOHIDElement) contained within a Human Interface Device (HID) object. It is used to minimize device communication when interacting with feature and output type elements that are grouped by their report IDs. IOHIDTransaction is a CFType object and as such conforms to all the conventions expected such object.

This documentation assumes that you have a basic understanding of the material contained in [Introduction to Accessing Hardware From Applications](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/AccessingHardware/AH_Intro/AH_Intro.html#//apple_ref/doc/uid/TP40002714).

All of the information described in this document is contained in the header file `IOHIDTransaction.h` found at `/System/Library/Frameworks/IOKit.framework/Headers/hid/IOHIDTransaction.h`.

<a id="1818328"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<IOKit/hid/IOHIDBase.h\>

## Topics

### Miscellaneous

- [IOHIDTransactionAddElement](1561679-iohidtransactionaddelement.md): Adds an element to the transaction @disussion To minimize device traffic it is important to add elements that share a common report type and report id.
- [IOHIDTransactionClear](1561687-iohidtransactionclear.md): Clears element transaction values.
- [IOHIDTransactionCommit](1561681-iohidtransactioncommit.md): Synchronously commits element transaction to the device.
- [IOHIDTransactionCommitWithCallback](1561677-iohidtransactioncommitwithcallba.md): Commits element transaction to the device.
- [IOHIDTransactionContainsElement](1561680-iohidtransactioncontainselement.md): Queries the transaction to determine if elemement has been added.
- [IOHIDTransactionCreate](1561689-iohidtransactioncreate.md): Creates an IOHIDTransaction object for the specified device.
- [IOHIDTransactionGetDevice](1561685-iohidtransactiongetdevice.md): Obtain the device associated with the transaction.
- [IOHIDTransactionGetDirection](1561674-iohidtransactiongetdirection.md): Obtain the direction of the transaction.
- [IOHIDTransactionGetTypeID](1561678-iohidtransactiongettypeid.md): Returns the type identifier of all IOHIDTransaction instances.
- [IOHIDTransactionGetValue](1561683-iohidtransactiongetvalue.md): Obtains the value for a transaction element.
- [IOHIDTransactionRemoveElement](1561686-iohidtransactionremoveelement.md): Removes an element to the transaction
- [IOHIDTransactionScheduleWithRunLoop](1561675-iohidtransactionschedulewithrunl.md): Schedules transaction with run loop.
- [IOHIDTransactionSetDirection](1561688-iohidtransactionsetdirection.md): Sets the direction of the transaction @disussion This method is useful for manipulating bi-direction (feature) elements such that you can set or get element values without creating an additional transaction object.
- [IOHIDTransactionSetValue](1561676-iohidtransactionsetvalue.md): Sets the value for a transaction element.
- [IOHIDTransactionUnscheduleFromRunLoop](1561682-iohidtransactionunschedulefromru.md): Unschedules transaction with run loop.

### Data Types

- [IOHIDTransactionRef](iohidtransactionref.md)
