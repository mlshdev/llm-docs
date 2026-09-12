> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/transactionid](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/transactionid)

# transactionID (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The receiver’s transaction ID, if any.

## Declaration

```swift
var transactionID: AETransactionID { get }
```

<a id="Discussion"></a>

## Discussion

The receiver’s transaction ID (an integer value), or 0 if an error occurs.

The receiver must be an Apple event. Currently provides no indication if an error occurs. For more information on transactions, see the description for [appleEvent(withEventClass:eventID:targetDescriptor:returnID:transactionID:)](appleevent%28witheventclass_eventid_targetdescriptor_returnid_transactionid_%29.md).

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptor(forKeyword:)](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptor(forKeyword:)](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptor(withKeyword:)](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttribute(\_:forKeyword:)](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParam(\_:forKeyword:)](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.

# transactionID (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The receiver’s transaction ID, if any.

## Declaration

```objectivec
@property (readonly) AETransactionID transactionID;
```

<a id="Discussion"></a>

## Discussion

The receiver’s transaction ID (an integer value), or 0 if an error occurs.

The receiver must be an Apple event. Currently provides no indication if an error occurs. For more information on transactions, see the description for [appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:](appleevent%28witheventclass_eventid_targetdescriptor_returnid_transactionid_%29.md).

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptorForKeyword:](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptorForKeyword:](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptorWithKeyword:](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttributeDescriptor:forKeyword:](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParamDescriptor:forKeyword:](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
