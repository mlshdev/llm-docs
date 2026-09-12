> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/largesubtitle](https://developer.apple.com/documentation/uikit/uinavigationitem/largesubtitle)

# largeSubtitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

String to be rendered below the large title.

## Declaration

```swift
var largeSubtitle: String? { get set }
```

<a id="discussion"></a>

## Discussion

When `nil`, the navigation bar will fall back to the `subtitle`.

## See Also

### Configuring the subtitle

- [subtitle](subtitle.md): A string to display as the subtitle in the navigation bar.
- [attributedSubtitle](attributedsubtitle-wrjk.md)
- [largeAttributedSubtitle](largeattributedsubtitle-4z2gx.md)

# largeSubtitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

String to be rendered below the large title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * largeSubtitle;
```

<a id="discussion"></a>

## Discussion

When `nil`, the navigation bar will fall back to the `subtitle`.

## See Also

### Configuring the subtitle

- [subtitle](subtitle.md): A string to display as the subtitle in the navigation bar.
- [attributedSubtitle](attributedsubtitle-4474c.md): An attributed string to display as the subtitle in the navigation bar.
- [largeAttributedSubtitle](largeattributedsubtitle-2c0pk.md): An attributed string to be rendered below the large title.
