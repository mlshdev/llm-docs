> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/canreadobject(forclasses:options:)](https://developer.apple.com/documentation/appkit/nspasteboard/canreadobject(forclasses:options:))

# canReadObject(forClasses:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.

## Declaration

```swift
func canReadObject(forClasses classArray: [AnyClass], options: [NSPasteboard.ReadingOptionKey : Any]? = nil) -> Bool
```

## Parameters

- `classArray`: An array of class objects.

  Classes in the array must conform to the [NSPasteboardReading](../nspasteboardreading.md) protocol.
- `options`: A dictionary that specifies options to refine the search for pasteboard items, for example to restrict the search to file URLs with particular content types. For valid dictionary keys, see `Pasteboard Reading Options`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains any items that can be represented as an instance of a class specified in `classArray`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.

### Validating contents

- [availableType(from:)](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItem(withDataConformingToTypes:)](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [types](types.md): An array of the receiver’s supported data types.
- [types(filterableTo:)](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.

# canReadObjectForClasses:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.

## Declaration

```objectivec
- (BOOL) canReadObjectForClasses:(NSArray<Class> *) classArray options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `classArray`: An array of class objects.

  Classes in the array must conform to the [NSPasteboardReading](../nspasteboardreading.md) protocol.
- `options`: A dictionary that specifies options to refine the search for pasteboard items, for example to restrict the search to file URLs with particular content types. For valid dictionary keys, see `Pasteboard Reading Options`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains any items that can be represented as an instance of a class specified in `classArray`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.

### Validating contents

- [availableTypeFromArray:](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItemWithDataConformingToTypes:](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [types](types.md): An array of the receiver’s supported data types.
- [typesFilterableTo:](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.
