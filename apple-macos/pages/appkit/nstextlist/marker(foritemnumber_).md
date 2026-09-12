> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlist/marker(foritemnumber:)](https://developer.apple.com/documentation/appkit/nstextlist/marker(foritemnumber:))

# marker(forItemNumber:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the computed value for a specific ordinal position in the list.

## Declaration

```swift
func marker(forItemNumber itemNumber: Int) -> String
```

## Parameters

- `itemNumber`: The ordinal position in the list whose computed marker value is desired.

<a id="return-value"></a>

## Return Value

The computed maker value for `itemNum`.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextList.MarkerFormat](markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.

# markerForItemNumber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the computed value for a specific ordinal position in the list.

## Declaration

```objectivec
- (NSString *) markerForItemNumber:(NSInteger) itemNumber;
```

## Parameters

- `itemNumber`: The ordinal position in the list whose computed marker value is desired.

<a id="return-value"></a>

## Return Value

The computed maker value for `itemNum`.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextListMarkerFormat](markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.
