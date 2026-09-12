> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/types](https://developer.apple.com/documentation/appkit/nspasteboard/types)

# types (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the receiver’s supported data types.

## Declaration

```swift
var types: [NSPasteboard.PasteboardType]? { get }
```

<a id="Discussion"></a>

## Discussion

The [types](types.md) array is an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects containing the union of the types of data declared for all the pasteboard items on the receiver. The returned types are listed in the order they were declared. It’s a good idea to check the value of [types](types.md) (or call [availableType(from:)](availabletype%28from_%29.md)) before reading any data from an `NSPasteboard` object. If you need to see if a type in the [types](types.md) array matches a type string you have stored locally, use the [isEqual(to:)](https://developer.apple.com/documentation/foundation/nsstring/isequal%28to:%29) method to perform the comparison.

## See Also

### Related Documentation

- [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.

### Validating contents

- [availableType(from:)](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItem(withDataConformingToTypes:)](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObject(forClasses:options:)](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types(filterableTo:)](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.

# types (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the receiver’s supported data types.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSString *> * types;
```

<a id="Discussion"></a>

## Discussion

The [types](types.md) array is an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects containing the union of the types of data declared for all the pasteboard items on the receiver. The returned types are listed in the order they were declared. It’s a good idea to check the value of [types](types.md) (or call [availableTypeFromArray:](availabletype%28from_%29.md)) before reading any data from an `NSPasteboard` object. If you need to see if a type in the [types](types.md) array matches a type string you have stored locally, use the [isEqualToString:](https://developer.apple.com/documentation/foundation/nsstring/isequal%28to:%29) method to perform the comparison.

## See Also

### Related Documentation

- [declareTypes:owner:](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.

### Validating contents

- [availableTypeFromArray:](availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItemWithDataConformingToTypes:](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObjectForClasses:options:](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [typesFilterableTo:](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.
