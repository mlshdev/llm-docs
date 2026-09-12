> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/attributedescriptor(forkeyword:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/attributedescriptor(forkeyword:))

# attributeDescriptor(forKeyword:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.

## Declaration

```swift
func attributeDescriptor(forKeyword keyword: AEKeyword) -> NSAppleEventDescriptor?
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the descriptor to obtain.

<a id="return-value"></a>

## Return Value

The attribute descriptor for the specified keyword, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event.

## See Also

### Working With Apple Event Descriptors

- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptor(forKeyword:)](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptor(withKeyword:)](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttribute(\_:forKeyword:)](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParam(\_:forKeyword:)](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.

# attributeDescriptorForKeyword: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) attributeDescriptorForKeyword:(AEKeyword) keyword;
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the descriptor to obtain.

<a id="return-value"></a>

## Return Value

The attribute descriptor for the specified keyword, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event.

## See Also

### Working With Apple Event Descriptors

- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptorForKeyword:](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptorWithKeyword:](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttributeDescriptor:forKeyword:](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParamDescriptor:forKeyword:](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.
