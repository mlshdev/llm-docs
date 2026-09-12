> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/eventclass](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/eventclass)

# eventClass (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The event class for the receiver.

## Declaration

```swift
var eventClass: AEEventClass { get }
```

<a id="Discussion"></a>

## Discussion

The event class (a four-character code) for the receiver, or 0 if an error occurs.

The receiver must be an Apple event. An Apple event is identified by its event class and event ID, a pair of four-character codes stored as 32-bit integers. For example, most events in the Standard suite have the four-character code `'core'` (defined as the constant `kAECoreSuite` in `AE.framework`, a subframework of `ApplicationServices.framework`). For more information on event classes and event IDs, see Building an Apple Event in Apple Events Programming Guide.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptor(forKeyword:)](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptor(forKeyword:)](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptor(withKeyword:)](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttribute(\_:forKeyword:)](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParam(\_:forKeyword:)](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.

# eventClass (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The event class for the receiver.

## Declaration

```objectivec
@property (readonly) AEEventClass eventClass;
```

<a id="Discussion"></a>

## Discussion

The event class (a four-character code) for the receiver, or 0 if an error occurs.

The receiver must be an Apple event. An Apple event is identified by its event class and event ID, a pair of four-character codes stored as 32-bit integers. For example, most events in the Standard suite have the four-character code `'core'` (defined as the constant `kAECoreSuite` in `AE.framework`, a subframework of `ApplicationServices.framework`). For more information on event classes and event IDs, see Building an Apple Event in Apple Events Programming Guide.

## See Also

### Working With Apple Event Descriptors

- [attributeDescriptorForKeyword:](attributedescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event attribute identified by the specified keyword.
- [eventID](eventid.md): The event ID for the receiver.
- [paramDescriptorForKeyword:](paramdescriptor%28forkeyword_%29.md): Returns a descriptor for the receiver’s Apple event parameter identified by the specified keyword.
- [removeParamDescriptorWithKeyword:](removeparamdescriptor%28withkeyword_%29.md): Removes the receiver’s parameter descriptor identified by the specified keyword.
- [returnID](returnid.md): The receiver’s return ID (the ID for a reply Apple event).
- [setAttributeDescriptor:forKeyword:](setattribute%28__forkeyword_%29.md): Adds a descriptor to the receiver as an attribute identified by the specified keyword.
- [setParamDescriptor:forKeyword:](setparam%28__forkeyword_%29.md): Adds a descriptor to the receiver as an Apple event parameter identified by the specified keyword.
- [transactionID](transactionid.md): The receiver’s transaction ID, if any.
