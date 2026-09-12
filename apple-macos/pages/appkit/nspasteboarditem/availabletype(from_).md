> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/availabletype(from:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/availabletype(from:))

# availableType(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns from a given array of types the first type within the pasteboard item, according to the ordering of types.

## Declaration

```swift
func availableType(from types: [NSPasteboard.PasteboardType]) -> NSPasteboard.PasteboardType?
```

## Parameters

- `types`: An array of strings representing UTIs, arranged in order of preference (most preferred as the 0th element in the array).

<a id="return-value"></a>

## Return Value

The first (according to the sender’s ordering of `types`) type in `types` contained in the pasteboard item, or `nil` if the receiver does not contain any types given in `types`.

<a id="Discussion"></a>

## Discussion

The method checks for UTI conformance of the requested types, preferring an exact match to conformance.

## See Also

### Getting types

- [types](types.md): An array of uniform type identifier strings of the data types that the receiver supports.

# availableTypeFromArray: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns from a given array of types the first type within the pasteboard item, according to the ordering of types.

## Declaration

```objectivec
- (NSPasteboardType) availableTypeFromArray:(NSArray<NSString *> *) types;
```

## Parameters

- `types`: An array of strings representing UTIs, arranged in order of preference (most preferred as the 0th element in the array).

<a id="return-value"></a>

## Return Value

The first (according to the sender’s ordering of `types`) type in `types` contained in the pasteboard item, or `nil` if the receiver does not contain any types given in `types`.

<a id="Discussion"></a>

## Discussion

The method checks for UTI conformance of the requested types, preferring an exact match to conformance.

## See Also

### Getting types

- [types](types.md): An array of uniform type identifier strings of the data types that the receiver supports.
