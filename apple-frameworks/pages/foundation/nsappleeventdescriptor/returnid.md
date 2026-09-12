> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/returnid](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/returnid)

# returnID (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The receiver’s return ID (the ID for a reply Apple event).

## Declaration

```swift
var returnID: AEReturnID { get }
```

<a id="Discussion"></a>

## Discussion

The receiver’s return ID (an integer value), or 0 if an error occurs.

The receiver must be an Apple event.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptor(forKeyword:)](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptor(forKeyword:)](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptor(withKeyword:)](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [setAttribute(\_:forKeyword:)](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParam(\_:forKeyword:)](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.

# returnID (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The receiver’s return ID (the ID for a reply Apple event).

## Declaration

```objectivec
@property (readonly) AEReturnID returnID;
```

<a id="Discussion"></a>

## Discussion

The receiver’s return ID (an integer value), or 0 if an error occurs.

The receiver must be an Apple event.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptorForKeyword:](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptorForKeyword:](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptorWithKeyword:](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [setAttributeDescriptor:forKeyword:](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParamDescriptor:forKeyword:](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.
