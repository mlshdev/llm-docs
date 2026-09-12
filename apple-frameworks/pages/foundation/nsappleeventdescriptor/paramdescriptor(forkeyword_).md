> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/paramdescriptor(forkeyword:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/paramdescriptor(forkeyword:))

# paramDescriptor(forKeyword:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.

## Declaration

```swift
func paramDescriptor(forKeyword keyword: AEKeyword) -> NSAppleEventDescriptor?
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the parameter descriptor to obtain.

<a id="return-value"></a>

## Return Value

A descriptor for the specified keyword, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptor(forKeyword:)](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [removeParamDescriptor(withKeyword:)](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttribute(\_:forKeyword:)](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParam(\_:forKeyword:)](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.

# paramDescriptorForKeyword: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) paramDescriptorForKeyword:(AEKeyword) keyword;
```

## Parameters

- `keyword`: A keyword (a four-character code) that identifies the parameter descriptor to obtain.

<a id="return-value"></a>

## Return Value

A descriptor for the specified keyword, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

The receiver must be an Apple event.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptorForKeyword:](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventClass](eventclass.md): The event class for the receiver.
- [eventID](eventid.md): The event ID for the receiver.
- [removeParamDescriptorWithKeyword:](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttributeDescriptor:forKeyword:](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParamDescriptor:forKeyword:](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.
