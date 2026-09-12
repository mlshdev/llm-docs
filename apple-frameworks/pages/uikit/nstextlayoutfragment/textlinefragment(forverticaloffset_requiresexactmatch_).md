> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/textlinefragment(forverticaloffset:requiresexactmatch:)](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/textlinefragment(forverticaloffset:requiresexactmatch:))

# textLineFragment(forVerticalOffset:requiresExactMatch:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the text line fragment for the vertical offset you provide, or the closest text line fragment beyond the vertical offset.

## Declaration

```swift
func textLineFragment(forVerticalOffset verticalOffset: CGFloat, requiresExactMatch: Bool) -> NSTextLineFragment?
```

## Parameters

- `verticalOffset`: A float value that indicates a vertical distance, expressed in points, from the layout fragment frame’s origin.
- `requiresExactMatch`: A Boolean value that indicates whether the method returns an exact match, or returns the closest match if there isn’t an exact match. The default value is [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

A text line fragment, or `nil` if there isn’t a match.

<a id="Discussion"></a>

## Discussion

Set `requiresExactMatch` to [true](https://developer.apple.com/documentation/swift/true) to find the text line fragment that contains the vertical offset, or set `requiresExactMatch` to [false](https://developer.apple.com/documentation/swift/false) to find the closest text line fragment matching or beyond the vertical offset. Returns `nil` if there isn’t a match.

## See Also

### Getting line fragments

- [textLineFragments](textlinefragments.md): An array of text line fragments.
- [NSTextLayoutFragment.EnumerationOptions](enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [textLineFragment(for:isUpstreamAffinity:)](textlinefragment%28for_isupstreamaffinity_%29.md): Returns a text line fragment from a specific text location in the document.

# textLineFragmentForVerticalOffset:requiresExactMatch: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the text line fragment for the vertical offset you provide, or the closest text line fragment beyond the vertical offset.

## Declaration

```objectivec
- (NSTextLineFragment *) textLineFragmentForVerticalOffset:(CGFloat) verticalOffset requiresExactMatch:(BOOL) requiresExactMatch;
```

## Parameters

- `verticalOffset`: A float value that indicates a vertical distance, expressed in points, from the layout fragment frame’s origin.
- `requiresExactMatch`: A Boolean value that indicates whether the method returns an exact match, or returns the closest match if there isn’t an exact match. The default value is [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

A text line fragment, or `nil` if there isn’t a match.

<a id="Discussion"></a>

## Discussion

Set `requiresExactMatch` to [true](https://developer.apple.com/documentation/swift/true) to find the text line fragment that contains the vertical offset, or set `requiresExactMatch` to [false](https://developer.apple.com/documentation/swift/false) to find the closest text line fragment matching or beyond the vertical offset. Returns `nil` if there isn’t a match.

## See Also

### Getting line fragments

- [textLineFragments](textlinefragments.md): An array of text line fragments.
- [NSTextLayoutFragmentEnumerationOptions](enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [textLineFragmentForTextLocation:isUpstreamAffinity:](textlinefragment%28for_isupstreamaffinity_%29.md): Returns a text line fragment from a specific text location in the document.
