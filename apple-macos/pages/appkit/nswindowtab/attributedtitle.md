> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtab/attributedtitle](https://developer.apple.com/documentation/appkit/nswindowtab/attributedtitle)

# attributedTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The title for the window tab, specified as an attributed string.

## Declaration

```swift
@NSCopying var attributedTitle: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

If you provide an attributed title, the window tab uses all of the attributes that are explicitly provided in the attributed string. Attributes that are left unspecified, including the font and foreground color, are automatically filled in using default values appropriate for the window tab.

If the [attributedTitle](attributedtitle.md) property is nil, the window tab uses the [title](title.md) property instead. The default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Customizing the Title

- [title](title.md): The title for the window tab.

# attributedTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The title for the window tab, specified as an attributed string.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString * attributedTitle;
```

<a id="Discussion"></a>

## Discussion

If you provide an attributed title, the window tab uses all of the attributes that are explicitly provided in the attributed string. Attributes that are left unspecified, including the font and foreground color, are automatically filled in using default values appropriate for the window tab.

If the [attributedTitle](attributedtitle.md) property is nil, the window tab uses the [title](title.md) property instead. The default value is [nil](https://developer.apple.com/documentation/objectivec/nil-227m0).

## See Also

### Customizing the Title

- [title](title.md): The title for the window tab.
