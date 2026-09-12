> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/largetitletextattributes](https://developer.apple.com/documentation/uikit/uinavigationbar/largetitletextattributes)

# largeTitleTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Display attributes for the bar’s large title text.

## Declaration

```swift
var largeTitleTextAttributes: [NSAttributedString.Key : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

You can specify the font, text color, text shadow color, and text shadow offset for the title in the text attributes dictionary, using the text attribute keys described in [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the title

- [titleTextAttributes](titletextattributes.md): Display attributes for the bar’s title text.
- [titleVerticalPositionAdjustment(for:)](titleverticalpositionadjustment%28for_%29.md): Returns the title’s vertical position adjustment for given bar metrics.
- [setTitleVerticalPositionAdjustment(\_:for:)](settitleverticalpositionadjustment%28__for_%29.md): Sets the title’s vertical position adjustment for given bar metrics.

# largeTitleTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Display attributes for the bar’s large title text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * largeTitleTextAttributes;
```

<a id="Discussion"></a>

## Discussion

You can specify the font, text color, text shadow color, and text shadow offset for the title in the text attributes dictionary, using the text attribute keys described in [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the title

- [titleTextAttributes](titletextattributes.md): Display attributes for the bar’s title text.
- [titleVerticalPositionAdjustmentForBarMetrics:](titleverticalpositionadjustment%28for_%29.md): Returns the title’s vertical position adjustment for given bar metrics.
- [setTitleVerticalPositionAdjustment:forBarMetrics:](settitleverticalpositionadjustment%28__for_%29.md): Sets the title’s vertical position adjustment for given bar metrics.
