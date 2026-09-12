> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextelementprovider/enumeratetextelements(from:options:using:)](https://developer.apple.com/documentation/uikit/nstextelementprovider/enumeratetextelements(from:options:using:))

# enumerateTextElements(from:options:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates text elements starting at the text location you provide.

## Declaration

```swift
func enumerateTextElements(from textLocation: (any NSTextLocation)?, options: NSTextContentManager.EnumerationOptions = [], using block: (NSTextElement) -> Bool) -> (any NSTextLocation)?
```

## Parameters

- `textLocation`: The [NSTextLocation](../nstextlocation.md) at which to start the enumeration.
- `options`: One of the possible `NSTextElementProviderEnumerationOptions` directions.
- `block`: A block you use to evaluate whether to continue the enumeration or tell the method to stop. Return `false` to end the enumeration process.

<a id="return-value"></a>

## Return Value

An `NSTextLocation`.

<a id="Discussion"></a>

## Discussion

If `textLocation` is `nil`, the method uses `documentRange.location` for forward enumeration and `documentRange.endLocation` for reverse enumeration. When enumerating backward, the method starts with the element preceding the one containing `textLocation`. If enumerated at least one element, it returns the edge of the enumerated range.

The enumerated range might not match the range of the last element returned. It enumerates the elements in the sequence, but it can skip a range (it can limit the maximum number of text elements enumerated for a single invocation or hide some elements from the layout).

Returning `NO` or `false` from block breaks out of the enumeration.

## See Also

### Accessing and updating the text

- [NSTextLayoutFragment.EnumerationOptions](../nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.

# enumerateTextElementsFromLocation:options:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates text elements starting at the text location you provide.

## Declaration

```objectivec
- (id<NSTextLocation>) enumerateTextElementsFromLocation:(id<NSTextLocation>) textLocation options:(NSTextContentManagerEnumerationOptions) options usingBlock:(BOOL (^)(NSTextElement *element)) block;
```

## Parameters

- `textLocation`: The [NSTextLocation](../nstextlocation.md) at which to start the enumeration.
- `options`: One of the possible `NSTextElementProviderEnumerationOptions` directions.
- `block`: A block you use to evaluate whether to continue the enumeration or tell the method to stop. Return `false` to end the enumeration process.

<a id="return-value"></a>

## Return Value

An `NSTextLocation`.

<a id="Discussion"></a>

## Discussion

If `textLocation` is `nil`, the method uses `documentRange.location` for forward enumeration and `documentRange.endLocation` for reverse enumeration. When enumerating backward, the method starts with the element preceding the one containing `textLocation`. If enumerated at least one element, it returns the edge of the enumerated range.

The enumerated range might not match the range of the last element returned. It enumerates the elements in the sequence, but it can skip a range (it can limit the maximum number of text elements enumerated for a single invocation or hide some elements from the layout).

Returning `NO` or `false` from block breaks out of the enumeration.

## See Also

### Accessing and updating the text

- [NSTextLayoutFragmentEnumerationOptions](../nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
- [replaceContentsInRange:withTextElements:](replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.
