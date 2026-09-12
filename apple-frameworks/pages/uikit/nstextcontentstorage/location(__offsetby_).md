> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage/location(_:offsetby:)](https://developer.apple.com/documentation/uikit/nstextcontentstorage/location(_:offsetby:))

# location(\_:offsetBy:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a new text location object based on an existing location and offset you provide.

## Declaration

```swift
func location(_ location: any NSTextLocation, offsetBy offset: Int) -> (any NSTextLocation)?
```

## Parameters

- `location`: The starting location. For example, you might specify the beginning or end of the document as the starting location.
- `offset`: The number of characters from the starting location. Specify a positive integer to create a location object that comes after the starting location. Specify a negative number to create a location object that comes before the starting location.

<a id="return-value"></a>

## Return Value

An [NSTextLocation](../nstextlocation.md) object that corresponds to the new location, or `nil` if the new location exceeds the bounds of the text.

<a id="Discussion"></a>

## Discussion

You can get [NSTextLocation](../nstextlocation.md) objects for the start and end of the text storage from the [documentRange](../nstextelementprovider/documentrange.md) property of the [NSTextElementProvider](../nstextelementprovider.md) protocol, which [NSTextContentStorage](../nstextcontentstorage.md) implements. If you provide an [NSTextLocation](../nstextlocation.md) object doesn’t match the type of the ones in the [documentRange](../nstextelementprovider/documentrange.md) property, this method throws an exception.

## See Also

### Finding ranges, locations, and offsets

- [offset(from:to:)](offset%28from_to_%29.md): Returns the number of characters between the specified locations.
- [adjustedRange(from:forEditingTextSelection:)](adjustedrange%28from_foreditingtextselection_%29.md): Returns the text range, if any, in the backing store that required manual adjustment after editing.

# locationFromLocation:withOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a new text location object based on an existing location and offset you provide.

## Declaration

```objectivec
- (id<NSTextLocation>) locationFromLocation:(id<NSTextLocation>) location withOffset:(NSInteger) offset;
```

## Parameters

- `location`: The starting location. For example, you might specify the beginning or end of the document as the starting location.
- `offset`: The number of characters from the starting location. Specify a positive integer to create a location object that comes after the starting location. Specify a negative number to create a location object that comes before the starting location.

<a id="return-value"></a>

## Return Value

An [NSTextLocation](../nstextlocation.md) object that corresponds to the new location, or `nil` if the new location exceeds the bounds of the text.

<a id="Discussion"></a>

## Discussion

You can get [NSTextLocation](../nstextlocation.md) objects for the start and end of the text storage from the [documentRange](../nstextelementprovider/documentrange.md) property of the [NSTextElementProvider](../nstextelementprovider.md) protocol, which [NSTextContentStorage](../nstextcontentstorage.md) implements. If you provide an [NSTextLocation](../nstextlocation.md) object doesn’t match the type of the ones in the [documentRange](../nstextelementprovider/documentrange.md) property, this method throws an exception.

## See Also

### Finding ranges, locations, and offsets

- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the number of characters between the specified locations.
- [adjustedRangeFromRange:forEditingTextSelection:](adjustedrange%28from_foreditingtextselection_%29.md): Returns the text range, if any, in the backing store that required manual adjustment after editing.
