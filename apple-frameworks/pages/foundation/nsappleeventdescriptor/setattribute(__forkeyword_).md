> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/setattribute(_:forkeyword:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/setattribute(_:forkeyword:))

# setAttribute(\_:forKeyword:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a descriptor to the receiver as an attribute identified by the specified keyword.

## Declaration

```swift
func setAttribute(_ descriptor: NSAppleEventDescriptor, forKeyword keyword: AEKeyword)
```

## Parameters

- `descriptor`: The attribute descriptor to add to the receiver.
- `keyword`: A keyword (a four-character code) that identifies the attribute descriptor to add. If a descriptor with that keyword already exists in the receiver, it is replaced.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event. Currently provides no indication if an error occurs.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptor(forKeyword:)](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptor(forKeyword:)](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptor(withKeyword:)](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setParam(\_:forKeyword:)](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.

# setAttributeDescriptor:forKeyword: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Adds a descriptor to the receiver as an attribute identified by the specified keyword.

## Declaration

```objectivec
- (void) setAttributeDescriptor:(NSAppleEventDescriptor *) descriptor forKeyword:(AEKeyword) keyword;
```

## Parameters

- `descriptor`: The attribute descriptor to add to the receiver.
- `keyword`: A keyword (a four-character code) that identifies the attribute descriptor to add. If a descriptor with that keyword already exists in the receiver, it is replaced.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event. Currently provides no indication if an error occurs.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptorForKeyword:](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptorForKeyword:](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptorWithKeyword:](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setParamDescriptor:forKeyword:](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.
