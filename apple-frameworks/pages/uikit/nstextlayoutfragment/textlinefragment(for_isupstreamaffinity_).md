> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/textlinefragment(for:isupstreamaffinity:)](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/textlinefragment(for:isupstreamaffinity:))

# textLineFragment(for:isUpstreamAffinity:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a text line fragment from a specific text location in the document.

## Declaration

```swift
func textLineFragment(for textLocation: any NSTextLocation, isUpstreamAffinity: Bool) -> NSTextLineFragment?
```

## Parameters

- `textLocation`: A text location that a text line fragment contains.
- `isUpstreamAffinity`: A Boolean value that indicates whether the text line fragment ends at the text location you provide.

<a id="return-value"></a>

## Return Value

The text line fragment that contains or ends at the text location you provide, or `nil` if there isn’t a match.

<a id="Discussion"></a>

## Discussion

Set `isUpstreamAffinity` to [true](https://developer.apple.com/documentation/swift/true) to find a text fragment by its element range end location, such as when you enumerate over line fragments in reverse order. Set `isUpstreamAffinity` to [false](https://developer.apple.com/documentation/swift/false) to find a text fragment that contains `textLocation`.

## See Also

### Getting line fragments

- [textLineFragments](textlinefragments.md): An array of text line fragments.
- [NSTextLayoutFragment.EnumerationOptions](enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [textLineFragment(forVerticalOffset:requiresExactMatch:)](textlinefragment%28forverticaloffset_requiresexactmatch_%29.md): Returns the text line fragment for the vertical offset you provide, or the closest text line fragment beyond the vertical offset.

# textLineFragmentForTextLocation:isUpstreamAffinity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a text line fragment from a specific text location in the document.

## Declaration

```objectivec
- (NSTextLineFragment *) textLineFragmentForTextLocation:(id<NSTextLocation>) textLocation isUpstreamAffinity:(BOOL) isUpstreamAffinity;
```

## Parameters

- `textLocation`: A text location that a text line fragment contains.
- `isUpstreamAffinity`: A Boolean value that indicates whether the text line fragment ends at the text location you provide.

<a id="return-value"></a>

## Return Value

The text line fragment that contains or ends at the text location you provide, or `nil` if there isn’t a match.

<a id="Discussion"></a>

## Discussion

Set `isUpstreamAffinity` to [true](https://developer.apple.com/documentation/swift/true) to find a text fragment by its element range end location, such as when you enumerate over line fragments in reverse order. Set `isUpstreamAffinity` to [false](https://developer.apple.com/documentation/swift/false) to find a text fragment that contains `textLocation`.

## See Also

### Getting line fragments

- [textLineFragments](textlinefragments.md): An array of text line fragments.
- [NSTextLayoutFragmentEnumerationOptions](enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [textLineFragmentForVerticalOffset:requiresExactMatch:](textlinefragment%28forverticaloffset_requiresexactmatch_%29.md): Returns the text line fragment for the vertical offset you provide, or the closest text line fragment beyond the vertical offset.
