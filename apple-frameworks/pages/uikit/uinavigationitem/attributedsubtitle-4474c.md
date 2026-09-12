> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/attributedsubtitle-4474c](https://developer.apple.com/documentation/uikit/uinavigationitem/attributedsubtitle-4474c)

# attributedSubtitle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An attributed string to display as the subtitle in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedSubtitle;
```

<a id="discussion"></a>

## Discussion

If non-nil, this property takes precedence over the `subtitle` property. If `subtitleView` is non-nil, this property is ignored. If `titleView` is non-nil, this property is ignored.

## See Also

### Configuring the subtitle

- [subtitle](subtitle.md): A string to display as the subtitle in the navigation bar.
- [largeSubtitle](largesubtitle.md): String to be rendered below the large title.
- [largeAttributedSubtitle](largeattributedsubtitle-2c0pk.md): An attributed string to be rendered below the large title.
