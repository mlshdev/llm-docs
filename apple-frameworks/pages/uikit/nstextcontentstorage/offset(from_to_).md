> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage/offset(from:to:)](https://developer.apple.com/documentation/uikit/nstextcontentstorage/offset(from:to:))

# offset(from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the number of characters between the specified locations.

## Declaration

```swift
func offset(from: any NSTextLocation, to: any NSTextLocation) -> Int
```

## Parameters

- `from`: The starting location in the text storage. For example, you might specify the beginning of the document as the starting location.
- `to`: The end location in the text storage.

<a id="return-value"></a>

## Return Value

The number of characters between the start and end locations. If the to location comes before the from location, the returned value is negative.

<a id="Discussion"></a>

## Discussion

You can get [NSTextLocation](../nstextlocation.md) objects for the start and end of the text storage from the [documentRange](../nstextelementprovider/documentrange.md) property of the [NSTextElementProvider](../nstextelementprovider.md) protocol, which [NSTextContentStorage](../nstextcontentstorage.md) implements. If you provide an [NSTextLocation](../nstextlocation.md) object doesn’t match the type of the ones in the [documentRange](../nstextelementprovider/documentrange.md) property, this method throws an exception.

## See Also

### Finding ranges, locations, and offsets

- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new text location object based on an existing location and offset you provide.
- [adjustedRange(from:forEditingTextSelection:)](adjustedrange%28from_foreditingtextselection_%29.md): Returns the text range, if any, in the backing store that required manual adjustment after editing.

# offsetFromLocation:toLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the number of characters between the specified locations.

## Declaration

```objectivec
- (NSInteger) offsetFromLocation:(id<NSTextLocation>) from toLocation:(id<NSTextLocation>) to;
```

## Parameters

- `from`: The starting location in the text storage. For example, you might specify the beginning of the document as the starting location.
- `to`: The end location in the text storage.

<a id="return-value"></a>

## Return Value

The number of characters between the start and end locations. If the to location comes before the from location, the returned value is negative.

<a id="Discussion"></a>

## Discussion

You can get [NSTextLocation](../nstextlocation.md) objects for the start and end of the text storage from the [documentRange](../nstextelementprovider/documentrange.md) property of the [NSTextElementProvider](../nstextelementprovider.md) protocol, which [NSTextContentStorage](../nstextcontentstorage.md) implements. If you provide an [NSTextLocation](../nstextlocation.md) object doesn’t match the type of the ones in the [documentRange](../nstextelementprovider/documentrange.md) property, this method throws an exception.

## See Also

### Finding ranges, locations, and offsets

- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new text location object based on an existing location and offset you provide.
- [adjustedRangeFromRange:forEditingTextSelection:](adjustedrange%28from_foreditingtextselection_%29.md): Returns the text range, if any, in the backing store that required manual adjustment after editing.
