> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/titletextattributes](https://developer.apple.com/documentation/uikit/uinavigationbar/titletextattributes)

# titleTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Display attributes for the bar’s title text.

## Declaration

```swift
var titleTextAttributes: [NSAttributedString.Key : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

You can specify the font, text color, text shadow color, and text shadow offset for the title in the text attributes dictionary, using the text attribute keys described in [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the title

- [largeTitleTextAttributes](largetitletextattributes.md): Display attributes for the bar’s large title text.
- [titleVerticalPositionAdjustment(for:)](titleverticalpositionadjustment%28for_%29.md): Returns the title’s vertical position adjustment for given bar metrics.
- [setTitleVerticalPositionAdjustment(\_:for:)](settitleverticalpositionadjustment%28__for_%29.md): Sets the title’s vertical position adjustment for given bar metrics.

# titleTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Display attributes for the bar’s title text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * titleTextAttributes;
```

<a id="Discussion"></a>

## Discussion

You can specify the font, text color, text shadow color, and text shadow offset for the title in the text attributes dictionary, using the text attribute keys described in [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the title

- [largeTitleTextAttributes](largetitletextattributes.md): Display attributes for the bar’s large title text.
- [titleVerticalPositionAdjustmentForBarMetrics:](titleverticalpositionadjustment%28for_%29.md): Returns the title’s vertical position adjustment for given bar metrics.
- [setTitleVerticalPositionAdjustment:forBarMetrics:](settitleverticalpositionadjustment%28__for_%29.md): Sets the title’s vertical position adjustment for given bar metrics.
