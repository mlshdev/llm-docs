> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/largeattributedsubtitle-2c0pk](https://developer.apple.com/documentation/uikit/uinavigationitem/largeattributedsubtitle-2c0pk)

# largeAttributedSubtitle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An attributed string to be rendered below the large title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * largeAttributedSubtitle;
```

<a id="discussion"></a>

## Discussion

When `nil`, the navigation bar will fall back to the `largeSubtitle`. If a `largeSubtitleView` is set, this property is ignored.

## See Also

### Configuring the subtitle

- [subtitle](subtitle.md): A string to display as the subtitle in the navigation bar.
- [attributedSubtitle](attributedsubtitle-4474c.md): An attributed string to display as the subtitle in the navigation bar.
- [largeSubtitle](largesubtitle.md): String to be rendered below the large title.
