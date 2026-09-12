> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/availabletype(from:)](https://developer.apple.com/documentation/appkit/nspasteboard/availabletype(from:))

# availableType(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scans the specified types for a type that the receiver supports.

## Declaration

```swift
func availableType(from types: [NSPasteboard.PasteboardType]) -> NSPasteboard.PasteboardType?
```

## Parameters

- `types`: An array of `NSString` objects specifying the pasteboard types your application supports, in preferred order.

<a id="return-value"></a>

## Return Value

The first pasteboard type in `types` that is available on the pasteboard, or `nil` if the receiver does not contain any of the types in `types`.

<a id="Discussion"></a>

## Discussion

You use this method to determine the best representation available on the pasteboard. For example, if your application supports RTFD, RTF, and string data, then you might invoke the method as follows:

```objc
NSArray *supportedTypes =
    [NSArray arrayWithObjects: NSRTFDPboardType, NSRTFPboardType, NSStringPboardType, nil];
NSString *bestType = [[NSPasteboard generalPasteboard]
    availableTypeFromArray:supportedTypes];
```

If the pasteboard contains RTF and string data, then `bestType` would contain `NSRTFPboardType`. If the pasteboard contains none of the types in `supportedTypes`, then `bestType` would be `nil`.

You must send a [types](types.md) or [availableType(from:)](availabletype%28from_%29.md) message before reading any data from an `NSPasteboard` object. If you need to see if a type in the returned array matches a type string you have stored locally, use the [isEqual(to:)](https://developer.apple.com/documentation/foundation/nsstring/isequal%28to:%29) method to perform the comparison.

## See Also

### Validating contents

- [canReadItem(withDataConformingToTypes:)](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObject(forClasses:options:)](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](types.md): An array of the receiver’s supported data types.
- [types(filterableTo:)](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.

# availableTypeFromArray: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scans the specified types for a type that the receiver supports.

## Declaration

```objectivec
- (NSPasteboardType) availableTypeFromArray:(NSArray<NSString *> *) types;
```

## Parameters

- `types`: An array of `NSString` objects specifying the pasteboard types your application supports, in preferred order.

<a id="return-value"></a>

## Return Value

The first pasteboard type in `types` that is available on the pasteboard, or `nil` if the receiver does not contain any of the types in `types`.

<a id="Discussion"></a>

## Discussion

You use this method to determine the best representation available on the pasteboard. For example, if your application supports RTFD, RTF, and string data, then you might invoke the method as follows:

```objc
NSArray *supportedTypes =
    [NSArray arrayWithObjects: NSRTFDPboardType, NSRTFPboardType, NSStringPboardType, nil];
NSString *bestType = [[NSPasteboard generalPasteboard]
    availableTypeFromArray:supportedTypes];
```

If the pasteboard contains RTF and string data, then `bestType` would contain `NSRTFPboardType`. If the pasteboard contains none of the types in `supportedTypes`, then `bestType` would be `nil`.

You must send a [types](types.md) or [availableTypeFromArray:](availabletype%28from_%29.md) message before reading any data from an `NSPasteboard` object. If you need to see if a type in the returned array matches a type string you have stored locally, use the [isEqualToString:](https://developer.apple.com/documentation/foundation/nsstring/isequal%28to:%29) method to perform the comparison.

## See Also

### Validating contents

- [canReadItemWithDataConformingToTypes:](canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObjectForClasses:options:](canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](types.md): An array of the receiver’s supported data types.
- [typesFilterableTo:](types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.
