> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/subtitle](https://developer.apple.com/documentation/uikit/uinavigationitem/subtitle)

# subtitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A string to display as the subtitle in the navigation bar.

## Declaration

```swift
var subtitle: String? { get set }
```

<a id="discussion"></a>

## Discussion

If `attributedSubtitle` is `non-nil`, this property just returns the `String` representation of the `attributedString`. If `subtitleView` is non-nil, this property is ignored.

## See Also

### Configuring the subtitle

- [attributedSubtitle](attributedsubtitle-wrjk.md)
- [largeSubtitle](largesubtitle.md): String to be rendered below the large title.
- [largeAttributedSubtitle](largeattributedsubtitle-4z2gx.md)

# subtitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A string to display as the subtitle in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * subtitle;
```

<a id="discussion"></a>

## Discussion

If `attributedSubtitle` is `non-nil`, this property just returns the `String` representation of the `attributedString`. If `subtitleView` is non-nil, this property is ignored.

## See Also

### Configuring the subtitle

- [attributedSubtitle](attributedsubtitle-4474c.md): An attributed string to display as the subtitle in the navigation bar.
- [largeSubtitle](largesubtitle.md): String to be rendered below the large title.
- [largeAttributedSubtitle](largeattributedsubtitle-2c0pk.md): An attributed string to be rendered below the large title.
