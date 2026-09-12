> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/addtypes(_:owner:)](https://developer.apple.com/documentation/appkit/nspasteboard/addtypes(_:owner:))

# addTypes(\_:owner:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds promises for the specified types to the first pasteboard item.

## Declaration

```swift
func addTypes(_ newTypes: [NSPasteboard.PasteboardType], owner newOwner: Any?) -> Int
```

## Parameters

- `newTypes`: An array of `NSString` objects, each of which specifies a type of data that can be provided to the pasteboard.
- `newOwner`: The object that provides the data for the specified types.

  If the data for those types is provided immediately, the owner can be `nil`. If the data for the added types will be provided lazily when requested from the pasteboard, an owner object must be provided that implements the -[pasteboard:provideDataForType:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:) method of the `NSPasteboardOwner` informal protocol.

<a id="return-value"></a>

## Return Value

The new change count, or `0` if there was an error adding the types.

<a id="Discussion"></a>

## Discussion

This method adds promises for the specified types to the first pasteboard item.

You use this methods to declare additional types of data for the first pasteboard item in the receiver. You can also use it to replace existing types added by a previous [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md) or [addTypes(\_:owner:)](addtypes%28__owner_%29.md) message.

The `newTypes` parameter specifies the types of data you are promising to the pasteboard. The types should be ordered according to the preference of the source application, with the most preferred type coming first (typically, the richest representation). New types are added to the end of the list containing any existing types, if any.

If you specify a type that has already been declared, this method replaces the owner of that type with the value in `newOwner`. In addition, any data already written to the pasteboard for that type is removed.

## See Also

### Related Documentation

- [changeCount](changecount.md): The receiver’s change count.

### Writing data (macOS 10.5 and earlier)

- [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [writeFileContents(\_:)](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
- [write(\_:)](write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.

# addTypes:owner: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds promises for the specified types to the first pasteboard item.

## Declaration

```objectivec
- (NSInteger) addTypes:(NSArray<NSString *> *) newTypes owner:(id) newOwner;
```

## Parameters

- `newTypes`: An array of `NSString` objects, each of which specifies a type of data that can be provided to the pasteboard.
- `newOwner`: The object that provides the data for the specified types.

  If the data for those types is provided immediately, the owner can be `nil`. If the data for the added types will be provided lazily when requested from the pasteboard, an owner object must be provided that implements the -[pasteboard:provideDataForType:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:) method of the `NSPasteboardOwner` informal protocol.

<a id="return-value"></a>

## Return Value

The new change count, or `0` if there was an error adding the types.

<a id="Discussion"></a>

## Discussion

This method adds promises for the specified types to the first pasteboard item.

You use this methods to declare additional types of data for the first pasteboard item in the receiver. You can also use it to replace existing types added by a previous [declareTypes:owner:](declaretypes%28__owner_%29.md) or [addTypes:owner:](addtypes%28__owner_%29.md) message.

The `newTypes` parameter specifies the types of data you are promising to the pasteboard. The types should be ordered according to the preference of the source application, with the most preferred type coming first (typically, the richest representation). New types are added to the end of the list containing any existing types, if any.

If you specify a type that has already been declared, this method replaces the owner of that type with the value in `newOwner`. In addition, any data already written to the pasteboard for that type is removed.

## See Also

### Related Documentation

- [changeCount](changecount.md): The receiver’s change count.

### Writing data (macOS 10.5 and earlier)

- [declareTypes:owner:](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [writeFileContents:](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
- [writeFileWrapper:](write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.
