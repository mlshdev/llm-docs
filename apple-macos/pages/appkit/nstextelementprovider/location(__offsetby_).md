> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelementprovider/location(_:offsetby:)](https://developer.apple.com/documentation/appkit/nstextelementprovider/location(_:offsetby:))

# location(\_:offsetBy:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new location from location with offset you provide.

## Declaration

```swift
optional func location(_ location: any NSTextLocation, offsetBy offset: Int) -> (any NSTextLocation)?
```

## Parameters

- `location`: An [NSTextLocation](../nstextlocation.md) in the text element.
- `offset`: An offset of the number of characters to or from `location`.

<a id="return-value"></a>

## Return Value

An new `NSTextLocation`, or `nil` of the offset exceeds the bounds of the text.

## See Also

### Accessing and updating the text

- [enumerateTextElements(from:options:using:)](enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [NSTextLayoutFragment.EnumerationOptions](../nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [replaceContents(in:with:)](replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.

# locationFromLocation:withOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new location from location with offset you provide.

## Declaration

```objectivec
- (id<NSTextLocation>) locationFromLocation:(id<NSTextLocation>) location withOffset:(NSInteger) offset;
```

## Parameters

- `location`: An [NSTextLocation](../nstextlocation.md) in the text element.
- `offset`: An offset of the number of characters to or from `location`.

<a id="return-value"></a>

## Return Value

An new `NSTextLocation`, or `nil` of the offset exceeds the bounds of the text.

## See Also

### Accessing and updating the text

- [enumerateTextElementsFromLocation:options:usingBlock:](enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [NSTextLayoutFragmentEnumerationOptions](../nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [replaceContentsInRange:withTextElements:](replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.
