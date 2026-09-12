> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/canreaditem(withdataconformingtotypes:)](https://developer.apple.com/documentation/appkit/nspasteboard/canreaditem(withdataconformingtotypes:))

# canReadItem(withDataConformingToTypes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.

## Declaration

```swift
func canReadItem(withDataConformingToTypes types: [String]) -> Bool
```

## Parameters

- `types`: An array of `NSString` objects containing UTIs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains any items that conform to the UTIs specified in `types`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.

### Validating contents

- [availableType(from:)](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadObject(forClasses:options:)](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](types.md): An array of the receiver’s supported data types.
- [types(filterableTo:)](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.

# canReadItemWithDataConformingToTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.

## Declaration

```objectivec
- (BOOL) canReadItemWithDataConformingToTypes:(NSArray<NSString *> *) types;
```

## Parameters

- `types`: An array of `NSString` objects containing UTIs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver contains any items that conform to the UTIs specified in `types`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.

### Validating contents

- [availableTypeFromArray:](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadObjectForClasses:options:](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](types.md): An array of the receiver’s supported data types.
- [typesFilterableTo:](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.
