> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor)

# NSAppleEventDescriptor (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A wrapper for the Apple event descriptor data type.

## Declaration

```swift
class NSAppleEventDescriptor
```

<a id="overview"></a>

## Overview

An instance of [NSAppleEventDescriptor](nsappleeventdescriptor.md) represents a descriptor—the basic building block for Apple events. This class is a wrapper for the underlying Apple event descriptor data type, [AEDesc](../coreservices/aedesc.md). Scriptable Cocoa applications frequently work with instances of [NSAppleEventDescriptor](nsappleeventdescriptor.md), but should rarely need to work directly with the [AEDesc](../coreservices/aedesc.md) data structure.

A *descriptor* is a data structure that stores data and an accompanying four-character code. A descriptor can store a value, or it can store a list of other descriptors (which may also be lists). All the information in an Apple event is stored in descriptors and lists of descriptors, and every Apple event is itself a descriptor list that matches certain criteria.

> **Important**

>  An instance of `NSAppleEventDescriptor` can represent any kind of descriptor, from a simple value descriptor, to a descriptor list, to a full-fledged Apple event.

Descriptors can be used to build arbitrarily complex containers, so that one Apple event can represent a script statement such as `tell application "TextEdit" to get word 3 of paragraph 6 of document 3`.

In working with Apple event descriptors, it can be useful to understand some of the underlying data types. You’ll find terms such as descriptor, descriptor list, Apple event record, and Apple event defined in Building an Apple Event in Apple Events Programming Guide. You’ll also find information on the four-character codes used to identify information within a descriptor. Apple event data types are defined in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager). The values of many four-character codes used by Apple (and in some cases reused by developers) can be found in [AppleScript Terminology and Apple Event Codes](http://developer.apple.com/releasenotes/AppleScript/ASTerminology_AppleEventCodes/TermsAndCodes.html).

The most common reason to construct an Apple event with an instance of `NSAppleEventDescriptor` is to supply information in a return Apple event. The most common situation where you might need to extract information from an Apple event (as an instance of `NSAppleEventDescriptor`) is when an Apple event handler installed by your application is invoked, as described in “Installing an Apple Event Handler” in [How Cocoa Applications Handle Apple Events](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_handle_AEs/SAppsHandleAEs.html#//apple_ref/doc/uid/20001239). In addition, if you execute an AppleScript script using the `NSAppleScript` class, you get an instance of `NSAppleEventDescriptor` as the return value, from which you can extract any required information.

When you work with an instance of `NSAppleEventDescriptor`, you can access the underlying descriptor directly, if necessary, with the [aeDesc](nsappleeventdescriptor/aedesc.md) method. Other methods, including [descriptorWithDescriptorType:bytes:length:](nsappleeventdescriptor/descriptorwithdescriptortype_bytes_length_.md) make it possible to create and initialize instances of `NSAppleEventDescriptor` without creating temporary instances of `NSData`.

The designated initializer for `NSAppleEventDescriptor` is [init(aeDescNoCopy:)](nsappleeventdescriptor/init%28aedescnocopy_%29-5cioa.md). However, it is unlikely that you will need to create a subclass of `NSAppleEventDescriptor`.

Cocoa doesn’t currently provide a mechanism for applications to directly send raw Apple events (though compiling and executing an AppleScript script with `NSAppleScript` may result in Apple events being sent). However, Cocoa applications have full access to the Apple Event Manager C APIs for working with Apple events. So, for example, you might use an instance of  `NSAppleEventDescriptor` to assemble an Apple event and call the Apple Event Manager function `AESend(_:_:_:_:_:_:_:)` to send it.

If you need to send Apple events, or if you need more information on some of the Apple event concepts described here, see Apple Events Programming Guide and [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

## Topics

### Creating and Initializing Descriptors

- [appleEvent(withEventClass:eventID:targetDescriptor:returnID:transactionID:)](nsappleeventdescriptor/appleevent%28witheventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Creates a descriptor that represents an Apple event, initialized according to the specified information.
- [init(boolean:)](nsappleeventdescriptor/init%28boolean_%29.md): Creates a descriptor initialized with type `typeBoolean` that stores the specified Boolean value.
- [init(enumCode:)](nsappleeventdescriptor/init%28enumcode_%29.md): Creates a descriptor initialized with type `typeEnumerated` that stores the specified enumerator data type value.
- [init(int32:)](nsappleeventdescriptor/init%28int32_%29.md): Creates a descriptor initialized with Apple event type `typeSInt32` that stores the specified integer value.
- [init(string:)](nsappleeventdescriptor/init%28string_%29.md): Creates a descriptor initialized with type `typeUnicodeText` that stores the text from the specified string.
- [init(typeCode:)](nsappleeventdescriptor/init%28typecode_%29.md): Creates a descriptor initialized with type `typeType` that stores the specified type value.
- [list()](nsappleeventdescriptor/list%28%29.md): Creates and initializes an empty list descriptor.
- [null()](nsappleeventdescriptor/null%28%29.md): Creates and initializes a descriptor with no parameter or attribute values set.
- [record()](nsappleeventdescriptor/record%28%29.md): Creates and initializes a descriptor for an Apple event record whose data has yet to be set.
- [init(listDescriptor:)](nsappleeventdescriptor/init%28listdescriptor_%29.md): Initializes a newly allocated instance as an empty list descriptor.
- [init(recordDescriptor:)](nsappleeventdescriptor/init%28recorddescriptor_%29.md): Initializes a newly allocated instance as a descriptor that is an Apple event record.
- [init(aeDescNoCopy:)](nsappleeventdescriptor/init%28aedescnocopy_%29-5cioa.md): Initializes a newly allocated instance as a descriptor for the specified Carbon `AEDesc` structure.
- [init(descriptorType:bytes:length:)](nsappleeventdescriptor/init%28descriptortype_bytes_length_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an arbitrary sequence of bytes and a length count).
- [init(descriptorType:data:)](nsappleeventdescriptor/init%28descriptortype_data_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an instance of `NSData`).
- [init(eventClass:eventID:targetDescriptor:returnID:transactionID:)](nsappleeventdescriptor/init%28eventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Initializes a newly allocated instance as a descriptor for an Apple event, initialized with the specified values.

### Getting Information About a Descriptor

- [aeDesc](nsappleeventdescriptor/aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](nsappleeventdescriptor/booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerce(toDescriptorType:)](nsappleeventdescriptor/coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [data](nsappleeventdescriptor/data.md): The receiver’s data.
- [descriptorType](nsappleeventdescriptor/descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](nsappleeventdescriptor/enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](nsappleeventdescriptor/int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](nsappleeventdescriptor/numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](nsappleeventdescriptor/stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](nsappleeventdescriptor/typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.

### Working With List Descriptors

- [atIndex(\_:)](nsappleeventdescriptor/atindex%28__%29.md): Returns the descriptor at the specified (one-based) position in the receiving descriptor list.
- [insert(\_:at:)](nsappleeventdescriptor/insert%28__at_%29.md): Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.
- [remove(at:)](nsappleeventdescriptor/remove%28at_%29.md): Removes the descriptor at the specified (one-based) position in the receiving descriptor list.

### Working With Record Descriptors

- [forKeyword(\_:)](nsappleeventdescriptor/forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [keywordForDescriptor(at:)](nsappleeventdescriptor/keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [remove(withKeyword:)](nsappleeventdescriptor/remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
- [setDescriptor(\_:forKeyword:)](nsappleeventdescriptor/setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.

### Working With Apple Event Descriptors

- [attributeDescriptor(forKeyword:)](nsappleeventdescriptor/attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](nsappleeventdescriptor/eventclass.md): The event class for the receiver.
- [eventID](nsappleeventdescriptor/eventid.md): The event ID for the receiver.
- [paramDescriptor(forKeyword:)](nsappleeventdescriptor/paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptor(withKeyword:)](nsappleeventdescriptor/removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](nsappleeventdescriptor/returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttribute(\_:forKeyword:)](nsappleeventdescriptor/setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParam(\_:forKeyword:)](nsappleeventdescriptor/setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](nsappleeventdescriptor/transactionid.md): The receiver’s transaction ID, if any.

### Supporting Types

- [NSAppleEventDescriptor.SendOptions](nsappleeventdescriptor/sendoptions.md)

### Initializers

- [init(AEDescNoCopy:)](nsappleeventdescriptor/init%28aedescnocopy_%29-236vs.md)
- [init(applicationURL:)](nsappleeventdescriptor/init%28applicationurl_%29.md): Creates and returns an application address descriptor using the specified application URL.
- [init(bundleIdentifier:)](nsappleeventdescriptor/init%28bundleidentifier_%29.md): Creates and returns an application address descriptor using the specified bundle identifier.
- [init(coder:)](nsappleeventdescriptor/init%28coder_%29.md)
- [init(date:)](nsappleeventdescriptor/init%28date_%29.md): Creates a descriptor that stores the specified date value.
- [init(double:)](nsappleeventdescriptor/init%28double_%29.md): Creates a descriptor initialized with Apple event type `typeIEEE64BitFloatingPoint` that stores the specified double value.
- [init(fileURL:)](nsappleeventdescriptor/init%28fileurl_%29.md): Creates a descriptor that stores the specified file URL.
- [init(processIdentifier:)](nsappleeventdescriptor/init%28processidentifier_%29.md): Creates and returns an application address descriptor using the specified process identifier.

### Instance Properties

- [dateValue](nsappleeventdescriptor/datevalue.md): The contents of the receiver as a date, coercing if necessary.
- [doubleValue](nsappleeventdescriptor/doublevalue.md): The contents of the receiver as a double value, coercing (to `typeIEEE64BitFloatingPoint`) if necessary.
- [fileURLValue](nsappleeventdescriptor/fileurlvalue.md): The contents of the receiver as a file URL, coercing if necessary.
- [isRecordDescriptor](nsappleeventdescriptor/isrecorddescriptor.md): Returns whether or not the receiver is a record-like descriptor.

### Instance Methods

- [sendEvent(options:timeout:)](nsappleeventdescriptor/sendevent%28options_timeout_%29.md): Sends an Apple event.

### Type Methods

- [currentProcess()](nsappleeventdescriptor/currentprocess%28%29.md): Creates and returns an application address descriptor using the current process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Apple Event Handling

- [NSAppleEventManager](nsappleeventmanager.md): A mechanism for registering handler routines for specific types of Apple events and dispatching events to those handlers.

# NSAppleEventDescriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A wrapper for the Apple event descriptor data type.

## Declaration

```objectivec
@interface NSAppleEventDescriptor : NSObject
```

<a id="overview"></a>

## Overview

An instance of [NSAppleEventDescriptor](nsappleeventdescriptor.md) represents a descriptor—the basic building block for Apple events. This class is a wrapper for the underlying Apple event descriptor data type, [AEDesc](../coreservices/aedesc.md). Scriptable Cocoa applications frequently work with instances of [NSAppleEventDescriptor](nsappleeventdescriptor.md), but should rarely need to work directly with the [AEDesc](../coreservices/aedesc.md) data structure.

A *descriptor* is a data structure that stores data and an accompanying four-character code. A descriptor can store a value, or it can store a list of other descriptors (which may also be lists). All the information in an Apple event is stored in descriptors and lists of descriptors, and every Apple event is itself a descriptor list that matches certain criteria.

> **Important**

>  An instance of `NSAppleEventDescriptor` can represent any kind of descriptor, from a simple value descriptor, to a descriptor list, to a full-fledged Apple event.

Descriptors can be used to build arbitrarily complex containers, so that one Apple event can represent a script statement such as `tell application "TextEdit" to get word 3 of paragraph 6 of document 3`.

In working with Apple event descriptors, it can be useful to understand some of the underlying data types. You’ll find terms such as descriptor, descriptor list, Apple event record, and Apple event defined in Building an Apple Event in Apple Events Programming Guide. You’ll also find information on the four-character codes used to identify information within a descriptor. Apple event data types are defined in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager). The values of many four-character codes used by Apple (and in some cases reused by developers) can be found in [AppleScript Terminology and Apple Event Codes](http://developer.apple.com/releasenotes/AppleScript/ASTerminology_AppleEventCodes/TermsAndCodes.html).

The most common reason to construct an Apple event with an instance of `NSAppleEventDescriptor` is to supply information in a return Apple event. The most common situation where you might need to extract information from an Apple event (as an instance of `NSAppleEventDescriptor`) is when an Apple event handler installed by your application is invoked, as described in “Installing an Apple Event Handler” in [How Cocoa Applications Handle Apple Events](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_handle_AEs/SAppsHandleAEs.html#//apple_ref/doc/uid/20001239). In addition, if you execute an AppleScript script using the `NSAppleScript` class, you get an instance of `NSAppleEventDescriptor` as the return value, from which you can extract any required information.

When you work with an instance of `NSAppleEventDescriptor`, you can access the underlying descriptor directly, if necessary, with the [aeDesc](nsappleeventdescriptor/aedesc.md) method. Other methods, including [descriptorWithDescriptorType:bytes:length:](nsappleeventdescriptor/descriptorwithdescriptortype_bytes_length_.md) make it possible to create and initialize instances of `NSAppleEventDescriptor` without creating temporary instances of `NSData`.

The designated initializer for `NSAppleEventDescriptor` is [initWithAEDescNoCopy:](nsappleeventdescriptor/init%28aedescnocopy_%29-5cioa.md). However, it is unlikely that you will need to create a subclass of `NSAppleEventDescriptor`.

Cocoa doesn’t currently provide a mechanism for applications to directly send raw Apple events (though compiling and executing an AppleScript script with `NSAppleScript` may result in Apple events being sent). However, Cocoa applications have full access to the Apple Event Manager C APIs for working with Apple events. So, for example, you might use an instance of  `NSAppleEventDescriptor` to assemble an Apple event and call the Apple Event Manager function `AESend(_:_:_:_:_:_:_:)` to send it.

If you need to send Apple events, or if you need more information on some of the Apple event concepts described here, see Apple Events Programming Guide and [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

## Topics

### Creating and Initializing Descriptors

- [appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:](nsappleeventdescriptor/appleevent%28witheventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Creates a descriptor that represents an Apple event, initialized according to the specified information.
- [descriptorWithBoolean:](nsappleeventdescriptor/init%28boolean_%29.md): Creates a descriptor initialized with type `typeBoolean` that stores the specified Boolean value.
- [descriptorWithDescriptorType:bytes:length:](nsappleeventdescriptor/descriptorwithdescriptortype_bytes_length_.md): Creates a descriptor initialized with the specified event type that stores the specified data (from a series of bytes).
- [descriptorWithDescriptorType:data:](nsappleeventdescriptor/descriptorwithdescriptortype_data_.md): Creates a descriptor initialized with the specified event type that stores the specified data (from an instance of `NSData`).
- [descriptorWithEnumCode:](nsappleeventdescriptor/init%28enumcode_%29.md): Creates a descriptor initialized with type `typeEnumerated` that stores the specified enumerator data type value.
- [descriptorWithInt32:](nsappleeventdescriptor/init%28int32_%29.md): Creates a descriptor initialized with Apple event type `typeSInt32` that stores the specified integer value.
- [descriptorWithString:](nsappleeventdescriptor/init%28string_%29.md): Creates a descriptor initialized with type `typeUnicodeText` that stores the text from the specified string.
- [descriptorWithTypeCode:](nsappleeventdescriptor/init%28typecode_%29.md): Creates a descriptor initialized with type `typeType` that stores the specified type value.
- [listDescriptor](nsappleeventdescriptor/list%28%29.md): Creates and initializes an empty list descriptor.
- [nullDescriptor](nsappleeventdescriptor/null%28%29.md): Creates and initializes a descriptor with no parameter or attribute values set.
- [recordDescriptor](nsappleeventdescriptor/record%28%29.md): Creates and initializes a descriptor for an Apple event record whose data has yet to be set.
- [initListDescriptor](nsappleeventdescriptor/init%28listdescriptor_%29.md): Initializes a newly allocated instance as an empty list descriptor.
- [initRecordDescriptor](nsappleeventdescriptor/init%28recorddescriptor_%29.md): Initializes a newly allocated instance as a descriptor that is an Apple event record.
- [initWithAEDescNoCopy:](nsappleeventdescriptor/init%28aedescnocopy_%29-5cioa.md): Initializes a newly allocated instance as a descriptor for the specified Carbon `AEDesc` structure.
- [initWithDescriptorType:bytes:length:](nsappleeventdescriptor/init%28descriptortype_bytes_length_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an arbitrary sequence of bytes and a length count).
- [initWithDescriptorType:data:](nsappleeventdescriptor/init%28descriptortype_data_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an instance of `NSData`).
- [initWithEventClass:eventID:targetDescriptor:returnID:transactionID:](nsappleeventdescriptor/init%28eventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Initializes a newly allocated instance as a descriptor for an Apple event, initialized with the specified values.

### Getting Information About a Descriptor

- [aeDesc](nsappleeventdescriptor/aedesc.md): The `AEDesc` structure encapsulated by the receiver, if it has one.
- [booleanValue](nsappleeventdescriptor/booleanvalue.md): The contents of the receiver as a Boolean value, coercing (to `typeBoolean`) if necessary.
- [coerceToDescriptorType:](nsappleeventdescriptor/coerce%28todescriptortype_%29.md): Returns a descriptor obtained by coercing the receiver to the specified type.
- [data](nsappleeventdescriptor/data.md): The receiver’s data.
- [descriptorType](nsappleeventdescriptor/descriptortype.md): The descriptor type of the receiver.
- [enumCodeValue](nsappleeventdescriptor/enumcodevalue.md): The contents of the receiver as an enumeration type, coercing to `typeEnumerated` if necessary.
- [int32Value](nsappleeventdescriptor/int32value.md): The contents of the receiver as an integer, coercing (to `typeSInt32`) if necessary.
- [numberOfItems](nsappleeventdescriptor/numberofitems.md): The number of descriptors in the receiver’s descriptor list.
- [stringValue](nsappleeventdescriptor/stringvalue.md): The contents of the receiver as a Unicode text string, coercing to `typeUnicodeText` if necessary.
- [typeCodeValue](nsappleeventdescriptor/typecodevalue.md): The contents of the receiver as a type, coercing to `typeType` if necessary.

### Working With List Descriptors

- [descriptorAtIndex:](nsappleeventdescriptor/atindex%28__%29.md): Returns the descriptor at the specified (one-based) position in the receiving descriptor list.
- [insertDescriptor:atIndex:](nsappleeventdescriptor/insert%28__at_%29.md): Inserts a descriptor at the specified (one-based) position in the receiving descriptor list, replacing the existing descriptor, if any, at that position.
- [removeDescriptorAtIndex:](nsappleeventdescriptor/remove%28at_%29.md): Removes the descriptor at the specified (one-based) position in the receiving descriptor list.

### Working With Record Descriptors

- [descriptorForKeyword:](nsappleeventdescriptor/forkeyword%28__%29.md): Returns the receiver’s descriptor for the specified keyword.
- [keywordForDescriptorAtIndex:](nsappleeventdescriptor/keywordfordescriptor%28at_%29.md): Returns the keyword for the descriptor at the specified (one-based) position in the receiver.
- [removeDescriptorWithKeyword:](nsappleeventdescriptor/remove%28withkeyword_%29.md): Removes the receiver’s descriptor identified by the specified keyword.
- [setDescriptor:forKeyword:](nsappleeventdescriptor/setdescriptor%28__forkeyword_%29.md): Adds a descriptor, identified by a keyword, to the receiver.

### Working With Apple Event Descriptors

- [attributeDescriptorForKeyword:](nsappleeventdescriptor/attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](nsappleeventdescriptor/eventclass.md): The event class for the receiver.
- [eventID](nsappleeventdescriptor/eventid.md): The event ID for the receiver.
- [paramDescriptorForKeyword:](nsappleeventdescriptor/paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptorWithKeyword:](nsappleeventdescriptor/removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](nsappleeventdescriptor/returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttributeDescriptor:forKeyword:](nsappleeventdescriptor/setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParamDescriptor:forKeyword:](nsappleeventdescriptor/setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](nsappleeventdescriptor/transactionid.md): The receiver’s transaction ID, if any.

### Supporting Types

- [NSAppleEventSendOptions](nsappleeventdescriptor/sendoptions.md)

### Instance Properties

- [dateValue](nsappleeventdescriptor/datevalue.md): The contents of the receiver as a date, coercing if necessary.
- [doubleValue](nsappleeventdescriptor/doublevalue.md): The contents of the receiver as a double value, coercing (to `typeIEEE64BitFloatingPoint`) if necessary.
- [fileURLValue](nsappleeventdescriptor/fileurlvalue.md): The contents of the receiver as a file URL, coercing if necessary.
- [isRecordDescriptor](nsappleeventdescriptor/isrecorddescriptor.md): Returns whether or not the receiver is a record-like descriptor.

### Instance Methods

- [sendEventWithOptions:timeout:error:](nsappleeventdescriptor/sendevent%28options_timeout_%29.md): Sends an Apple event.

### Type Methods

- [currentProcessDescriptor](nsappleeventdescriptor/currentprocess%28%29.md): Creates and returns an application address descriptor using the current process.
- [descriptorWithApplicationURL:](nsappleeventdescriptor/init%28applicationurl_%29.md): Creates and returns an application address descriptor using the specified application URL.
- [descriptorWithBundleIdentifier:](nsappleeventdescriptor/init%28bundleidentifier_%29.md): Creates and returns an application address descriptor using the specified bundle identifier.
- [descriptorWithDate:](nsappleeventdescriptor/init%28date_%29.md): Creates a descriptor that stores the specified date value.
- [descriptorWithDouble:](nsappleeventdescriptor/init%28double_%29.md): Creates a descriptor initialized with Apple event type `typeIEEE64BitFloatingPoint` that stores the specified double value.
- [descriptorWithFileURL:](nsappleeventdescriptor/init%28fileurl_%29.md): Creates a descriptor that stores the specified file URL.
- [descriptorWithProcessIdentifier:](nsappleeventdescriptor/init%28processidentifier_%29.md): Creates and returns an application address descriptor using the specified process identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Apple Event Handling

- [NSAppleEventManager](nsappleeventmanager.md): A mechanism for registering handler routines for specific types of Apple events and dispatching events to those handlers.
