> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/textlinefragments](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/textlinefragments)

# textLineFragments (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of text line fragments.

## Declaration

```swift
var textLineFragments: [NSTextLineFragment] { get }
```

<a id="Discussion"></a>

## Discussion

Valid when [NSTextLayoutFragment.State.layoutAvailable](state-swift.enum/layoutavailable.md). This property is KVO-compliant.

## See Also

### Getting line fragments

- [NSTextLayoutFragment.EnumerationOptions](enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [textLineFragment(for:isUpstreamAffinity:)](textlinefragment%28for_isupstreamaffinity_%29.md): Returns a text line fragment from a specific text location in the document.
- [textLineFragment(forVerticalOffset:requiresExactMatch:)](textlinefragment%28forverticaloffset_requiresexactmatch_%29.md): Returns the text line fragment for the vertical offset you provide, or the closest text line fragment beyond the vertical offset.

# textLineFragments (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of text line fragments.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTextLineFragment *> * textLineFragments;
```

<a id="Discussion"></a>

## Discussion

Valid when [NSTextLayoutFragmentStateLayoutAvailable](state-swift.enum/layoutavailable.md). This property is KVO-compliant.

## See Also

### Getting line fragments

- [NSTextLayoutFragmentEnumerationOptions](enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [textLineFragmentForTextLocation:isUpstreamAffinity:](textlinefragment%28for_isupstreamaffinity_%29.md): Returns a text line fragment from a specific text location in the document.
- [textLineFragmentForVerticalOffset:requiresExactMatch:](textlinefragment%28forverticaloffset_requiresexactmatch_%29.md): Returns the text line fragment for the vertical offset you provide, or the closest text line fragment beyond the vertical offset.
