> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlist/marker(foritemnumber:)](https://developer.apple.com/documentation/uikit/nstextlist/marker(foritemnumber:))

# marker(forItemNumber:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the computed value for a specific ordinal position in the list.

## Declaration

```swift
func marker(forItemNumber itemNumber: Int) -> String
```

## Parameters

- `itemNumber`: The ordinal position in the list whose computed marker value is desired.

<a id="return-value"></a>

## Return Value

The computed maker value for `itemNumber`.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextList.MarkerFormat](markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.

# markerForItemNumber: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the computed value for a specific ordinal position in the list.

## Declaration

```objectivec
- (NSString *) markerForItemNumber:(NSInteger) itemNumber;
```

## Parameters

- `itemNumber`: The ordinal position in the list whose computed marker value is desired.

<a id="return-value"></a>

## Return Value

The computed maker value for `itemNumber`.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextListMarkerFormat](markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.
