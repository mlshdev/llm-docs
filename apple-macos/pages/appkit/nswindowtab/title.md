> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtab/title](https://developer.apple.com/documentation/appkit/nswindowtab/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The title for the window tab.

## Declaration

```swift
var title: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The title displays within the window tab when the associated window is part of a tabbing group.

By default, the title of the window tab follows the title of its associated window, but it may be customized using the [title](title.md) property. If the title has been customized, setting the [title](title.md) property to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) causes it to follow the window’s title again.

## See Also

### Customizing the Title

- [attributedTitle](attributedtitle.md): The title for the window tab, specified as an attributed string.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The title for the window tab.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The title displays within the window tab when the associated window is part of a tabbing group.

By default, the title of the window tab follows the title of its associated window, but it may be customized using the [title](title.md) property. If the title has been customized, setting the [title](title.md) property to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) causes it to follow the window’s title again.

## See Also

### Customizing the Title

- [attributedTitle](attributedtitle.md): The title for the window tab, specified as an attributed string.
