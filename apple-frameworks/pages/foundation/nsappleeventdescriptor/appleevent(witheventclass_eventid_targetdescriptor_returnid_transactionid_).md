> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/appleevent(witheventclass:eventid:targetdescriptor:returnid:transactionid:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/appleevent(witheventclass:eventid:targetdescriptor:returnid:transactionid:))

# appleEvent(withEventClass:eventID:targetDescriptor:returnID:transactionID:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a descriptor that represents an Apple event, initialized according to the specified information.

## Declaration

```swift
class func appleEvent(withEventClass eventClass: AEEventClass, eventID: AEEventID, targetDescriptor: NSAppleEventDescriptor?, returnID: AEReturnID, transactionID: AETransactionID) -> NSAppleEventDescriptor
```

## Parameters

- `eventClass`: The event class to be set in the returned descriptor.
- `eventID`: The event ID to be set in the returned descriptor.
- `targetDescriptor`: A pointer to a descriptor that identifies the target application for the Apple event. Passing `nil` results in an Apple event descriptor that has no `keyAddressAttr` attribute (it is valid for an Apple event to have no target address attribute).
- `returnID`: The return ID to be set in the returned descriptor. If you pass a value of `kAutoGenerateReturnID`, the Apple Event Manager assigns the created Apple event a return ID that is unique to the current session. If you pass any other value, the Apple Event Manager assigns that value for the ID.
- `transactionID`: The transaction ID to be set in the returned descriptor. A transaction is a sequence of Apple events that are sent back and forth between client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID. You can specify `kAnyTransactionID` if the Apple event is not one of a series of interdependent Apple events.

<a id="return-value"></a>

## Return Value

A descriptor for an Apple event, initialized according to the specified parameter values, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Constants such as `kAutoGenerateReturnID` and `kAnyTransactionID` are defined in `AE.framework`, a subframework of `ApplicationServices.framework`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Creating and Initializing Descriptors

- [init(boolean:)](init%28boolean_%29.md): Creates a descriptor initialized with type `typeBoolean` that stores the specified Boolean value.
- [init(enumCode:)](init%28enumcode_%29.md): Creates a descriptor initialized with type `typeEnumerated` that stores the specified enumerator data type value.
- [init(int32:)](init%28int32_%29.md): Creates a descriptor initialized with Apple event type `typeSInt32` that stores the specified integer value.
- [init(string:)](init%28string_%29.md): Creates a descriptor initialized with type `typeUnicodeText` that stores the text from the specified string.
- [init(typeCode:)](init%28typecode_%29.md): Creates a descriptor initialized with type `typeType` that stores the specified type value.
- [list()](list%28%29.md): Creates and initializes an empty list descriptor.
- [null()](null%28%29.md): Creates and initializes a descriptor with no parameter or attribute values set.
- [record()](record%28%29.md): Creates and initializes a descriptor for an Apple event record whose data has yet to be set.
- [init(listDescriptor:)](init%28listdescriptor_%29.md): Initializes a newly allocated instance as an empty list descriptor.
- [init(recordDescriptor:)](init%28recorddescriptor_%29.md): Initializes a newly allocated instance as a descriptor that is an Apple event record.
- [init(aeDescNoCopy:)](init%28aedescnocopy_%29-5cioa.md): Initializes a newly allocated instance as a descriptor for the specified Carbon `AEDesc` structure.
- [init(descriptorType:bytes:length:)](init%28descriptortype_bytes_length_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an arbitrary sequence of bytes and a length count).
- [init(descriptorType:data:)](init%28descriptortype_data_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an instance of `NSData`).
- [init(eventClass:eventID:targetDescriptor:returnID:transactionID:)](init%28eventclass_eventid_targetdescriptor_returnid_transactionid_%29.md): Initializes a newly allocated instance as a descriptor for an Apple event, initialized with the specified values.

# appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a descriptor that represents an Apple event, initialized according to the specified information.

## Declaration

```objectivec
+ (NSAppleEventDescriptor *) appleEventWithEventClass:(AEEventClass) eventClass eventID:(AEEventID) eventID targetDescriptor:(NSAppleEventDescriptor *) targetDescriptor returnID:(AEReturnID) returnID transactionID:(AETransactionID) transactionID;
```

## Parameters

- `eventClass`: The event class to be set in the returned descriptor.
- `eventID`: The event ID to be set in the returned descriptor.
- `targetDescriptor`: A pointer to a descriptor that identifies the target application for the Apple event. Passing `nil` results in an Apple event descriptor that has no `keyAddressAttr` attribute (it is valid for an Apple event to have no target address attribute).
- `returnID`: The return ID to be set in the returned descriptor. If you pass a value of `kAutoGenerateReturnID`, the Apple Event Manager assigns the created Apple event a return ID that is unique to the current session. If you pass any other value, the Apple Event Manager assigns that value for the ID.
- `transactionID`: The transaction ID to be set in the returned descriptor. A transaction is a sequence of Apple events that are sent back and forth between client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID. You can specify `kAnyTransactionID` if the Apple event is not one of a series of interdependent Apple events.

<a id="return-value"></a>

## Return Value

A descriptor for an Apple event, initialized according to the specified parameter values, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

Constants such as `kAutoGenerateReturnID` and `kAnyTransactionID` are defined in `AE.framework`, a subframework of `ApplicationServices.framework`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Creating and Initializing Descriptors

- [descriptorWithBoolean:](init%28boolean_%29.md): Creates a descriptor initialized with type `typeBoolean` that stores the specified Boolean value.
- [descriptorWithDescriptorType:bytes:length:](descriptorwithdescriptortype_bytes_length_.md): Creates a descriptor initialized with the specified event type that stores the specified data (from a series of bytes).
- [descriptorWithDescriptorType:data:](descriptorwithdescriptortype_data_.md): Creates a descriptor initialized with the specified event type that stores the specified data (from an instance of `NSData`).
- [descriptorWithEnumCode:](init%28enumcode_%29.md): Creates a descriptor initialized with type `typeEnumerated` that stores the specified enumerator data type value.
- [descriptorWithInt32:](init%28int32_%29.md): Creates a descriptor initialized with Apple event type `typeSInt32` that stores the specified integer value.
- [descriptorWithString:](init%28string_%29.md): Creates a descriptor initialized with type `typeUnicodeText` that stores the text from the specified string.
- [descriptorWithTypeCode:](init%28typecode_%29.md): Creates a descriptor initialized with type `typeType` that stores the specified type value.
- [listDescriptor](list%28%29.md): Creates and initializes an empty list descriptor.
- [nullDescriptor](null%28%29.md): Creates and initializes a descriptor with no parameter or attribute values set.
- [recordDescriptor](record%28%29.md): Creates and initializes a descriptor for an Apple event record whose data has yet to be set.
- [initListDescriptor](init%28listdescriptor_%29.md): Initializes a newly allocated instance as an empty list descriptor.
- [initRecordDescriptor](init%28recorddescriptor_%29.md): Initializes a newly allocated instance as a descriptor that is an Apple event record.
- [initWithAEDescNoCopy:](init%28aedescnocopy_%29-5cioa.md): Initializes a newly allocated instance as a descriptor for the specified Carbon `AEDesc` structure.
- [initWithDescriptorType:bytes:length:](init%28descriptortype_bytes_length_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an arbitrary sequence of bytes and a length count).
- [initWithDescriptorType:data:](init%28descriptortype_data_%29.md): Initializes a newly allocated instance as a descriptor with the specified descriptor type and data (from an instance of `NSData`).
