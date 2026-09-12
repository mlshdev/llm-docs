> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/declaretypes(_:owner:)](https://developer.apple.com/documentation/appkit/nspasteboard/declaretypes(_:owner:))

# declareTypes(\_:owner:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.

## Declaration

```swift
func declareTypes(_ newTypes: [NSPasteboard.PasteboardType], owner newOwner: Any?) -> Int
```

## Parameters

- `newTypes`: An array of `NSString` objects that specify the types of data that may be added to the new pasteboard. The types should be ordered according to the preference of the source application, with the most preferred type coming first (typically, the richest representation).
- `newOwner`: The object responsible for writing data to the pasteboard, or `nil` if you provide data for all types immediately. If you specify a `newOwner` object, it must support all of the types declared in the `newTypes` parameter and must remain alive for as long as the data is *promised* on the pasteboard.

<a id="return-value"></a>

## Return Value

The receiver’s new change count.

<a id="Discussion"></a>

## Discussion

This method is the equivalent of invoking [clearContents()](clearcontents%28%29.md), implicitly writing the first pasteboard item, and then calling [addTypes(\_:owner:)](addtypes%28__owner_%29.md) to promise types for the first pasteboard item.

> **Note**

>  In macOS 10.5 and earlier, this method is the first step in writing data to the pasteboard and must precede the messages that actually write the data. A [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md) message essentially changes the contents of the receiver: It invalidates the current contents of the receiver and increments its change count.

<a id="Special-Considerations"></a>

### Special Considerations

In general, you should not use this method with [writeObjects(\_:)](writeobjects%28__%29.md), since [writeObjects(\_:)](writeobjects%28__%29.md) will always write additional items to the pasteboard, and will not affect items already on the pasteboard, including the item implicitly created by this method.

## See Also

### Related Documentation

- [clearContents()](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [changeCount](changecount.md): The receiver’s change count.

### Writing data (macOS 10.5 and earlier)

- [addTypes(\_:owner:)](addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileContents(\_:)](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
- [write(\_:)](write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.

# declareTypes:owner: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.

## Declaration

```objectivec
- (NSInteger) declareTypes:(NSArray<NSString *> *) newTypes owner:(id) newOwner;
```

## Parameters

- `newTypes`: An array of `NSString` objects that specify the types of data that may be added to the new pasteboard. The types should be ordered according to the preference of the source application, with the most preferred type coming first (typically, the richest representation).
- `newOwner`: The object responsible for writing data to the pasteboard, or `nil` if you provide data for all types immediately. If you specify a `newOwner` object, it must support all of the types declared in the `newTypes` parameter and must remain alive for as long as the data is *promised* on the pasteboard.

<a id="return-value"></a>

## Return Value

The receiver’s new change count.

<a id="Discussion"></a>

## Discussion

This method is the equivalent of invoking [clearContents](clearcontents%28%29.md), implicitly writing the first pasteboard item, and then calling [addTypes:owner:](addtypes%28__owner_%29.md) to promise types for the first pasteboard item.

> **Note**

>  In macOS 10.5 and earlier, this method is the first step in writing data to the pasteboard and must precede the messages that actually write the data. A [declareTypes:owner:](declaretypes%28__owner_%29.md) message essentially changes the contents of the receiver: It invalidates the current contents of the receiver and increments its change count.

<a id="Special-Considerations"></a>

### Special Considerations

In general, you should not use this method with [writeObjects:](writeobjects%28__%29.md), since [writeObjects:](writeobjects%28__%29.md) will always write additional items to the pasteboard, and will not affect items already on the pasteboard, including the item implicitly created by this method.

## See Also

### Related Documentation

- [clearContents](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [changeCount](changecount.md): The receiver’s change count.
- [pasteboard:provideDataForType:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:): Deprecated. Implemented by an owner object to provide promised data.

### Writing data (macOS 10.5 and earlier)

- [addTypes:owner:](addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileContents:](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
- [writeFileWrapper:](write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.
