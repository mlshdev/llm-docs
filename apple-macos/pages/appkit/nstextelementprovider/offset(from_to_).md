> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelementprovider/offset(from:to:)](https://developer.apple.com/documentation/appkit/nstextelementprovider/offset(from:to:))

# offset(from:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the offset between the two specified locations.

## Declaration

```swift
optional func offset(from: any NSTextLocation, to: any NSTextLocation) -> Int
```

## Parameters

- `from`: A starting location.
- `to`: An ending location.

<a id="return-value"></a>

## Return Value

An `Integer` that represents the offset between the starting and ending locations.

<a id="Discussion"></a>

## Discussion

The return value could be positive or negative. This method can return [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) when the method can’t represent an offset as an integer value. This can occur, for example, if the locations aren’t in the same document).

## See Also

### Adjusting the range of the text element

- [adjustedRange(from:forEditingTextSelection:)](adjustedrange%28from_foreditingtextselection_%29.md): A method you implement if the location backing store requires manual adjustment after editing.

# offsetFromLocation:toLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the offset between the two specified locations.

## Declaration

```objectivec
- (NSInteger) offsetFromLocation:(id<NSTextLocation>) from toLocation:(id<NSTextLocation>) to;
```

## Parameters

- `from`: A starting location.
- `to`: An ending location.

<a id="return-value"></a>

## Return Value

An `Integer` that represents the offset between the starting and ending locations.

<a id="Discussion"></a>

## Discussion

The return value could be positive or negative. This method can return [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) when the method can’t represent an offset as an integer value. This can occur, for example, if the locations aren’t in the same document).

## See Also

### Adjusting the range of the text element

- [adjustedRangeFromRange:forEditingTextSelection:](adjustedrange%28from_foreditingtextselection_%29.md): A method you implement if the location backing store requires manual adjustment after editing.
