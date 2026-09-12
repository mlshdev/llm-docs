> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/types(filterableto:)](https://developer.apple.com/documentation/appkit/nspasteboard/types(filterableto:))

# types(filterableTo:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the data types that can be converted to the specified type using the available filter services.

## Declaration

```swift
class func types(filterableTo type: NSPasteboard.PasteboardType) -> [NSPasteboard.PasteboardType]
```

## Parameters

- `type`: The target data type.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the types that can be converted to the target data type.

<a id="Discussion"></a>

## Discussion

The array also contains the original type.

## See Also

### Validating contents

- [availableType(from:)](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItem(withDataConformingToTypes:)](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObject(forClasses:options:)](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](types.md): An array of the receiver’s supported data types.

# typesFilterableTo: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the data types that can be converted to the specified type using the available filter services.

## Declaration

```objectivec
+ (NSArray<NSString *> *) typesFilterableTo:(NSPasteboardType) type;
```

## Parameters

- `type`: The target data type.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the types that can be converted to the target data type.

<a id="Discussion"></a>

## Discussion

The array also contains the original type.

## See Also

### Validating contents

- [availableTypeFromArray:](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItemWithDataConformingToTypes:](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObjectForClasses:options:](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](types.md): An array of the receiver’s supported data types.
