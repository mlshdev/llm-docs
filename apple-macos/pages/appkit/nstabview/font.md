> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/font](https://developer.apple.com/documentation/appkit/nstabview/font)

# font (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font used for the tab view’s label text.

## Declaration

```swift
var font: NSFont { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the message font of default size (see [messageFont(ofSize:)](../nsfont/messagefont%28ofsize_%29.md)), which is equivalent to the system font of default size. Tab height is adjusted automatically to accommodate a new font size. If the view allows truncating, tab labels are truncated as needed.

## See Also

### Related Documentation

- [allowsTruncatedLabels](allowstruncatedlabels.md): A Boolean value that indicates if the tab view allows truncating for labels that don’t fit on a tab.

# font (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font used for the tab view’s label text.

## Declaration

```objectivec
@property (strong) NSFont * font;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the message font of default size (see [messageFontOfSize:](../nsfont/messagefont%28ofsize_%29.md)), which is equivalent to the system font of default size. Tab height is adjusted automatically to accommodate a new font size. If the view allows truncating, tab labels are truncated as needed.

## See Also

### Related Documentation

- [allowsTruncatedLabels](allowstruncatedlabels.md): A Boolean value that indicates if the tab view allows truncating for labels that don’t fit on a tab.
