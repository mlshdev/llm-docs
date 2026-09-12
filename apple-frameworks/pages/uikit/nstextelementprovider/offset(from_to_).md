> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextelementprovider/offset(from:to:)](https://developer.apple.com/documentation/uikit/nstextelementprovider/offset(from:to:))

# offset(from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

The return value could be positive or negative. This method can return [NSNotFound](../../foundation/nsnotfound-4qp9h.md) when the method can’t represent an offset as an integer value. This can occur, for example, if the locations aren’t in the same document).

## See Also

### Adjusting the range of the text element

- [adjustedRange(from:forEditingTextSelection:)](adjustedrange%28from_foreditingtextselection_%29.md): A method you implement if the location backing store requires manual adjustment after editing.

# offsetFromLocation:toLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

The return value could be positive or negative. This method can return [NSNotFound](../../foundation/nsnotfound-4qp9h.md) when the method can’t represent an offset as an integer value. This can occur, for example, if the locations aren’t in the same document).

## See Also

### Adjusting the range of the text element

- [adjustedRangeFromRange:forEditingTextSelection:](adjustedrange%28from_foreditingtextselection_%29.md): A method you implement if the location backing store requires manual adjustment after editing.
