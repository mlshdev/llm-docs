> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/findinteraction](https://developer.apple.com/documentation/uikit/uitextview/findinteraction)

# findInteraction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The text view’s built-in find interaction.

## Declaration

```swift
var findInteraction: UIFindInteraction? { get }
```

<a id="Discussion"></a>

## Discussion

Set [isFindInteractionEnabled](isfindinteractionenabled.md) to `true` to enable the text view’s built-in find interaction. This method returns `nil` when the interaction isn’t enabled.

Call [presentFindNavigator(showingReplace:)](../uifindinteraction/presentfindnavigator%28showingreplace_%29.md) on the [UIFindInteraction](../uifindinteraction.md) object returned by this method to invoke the find interaction and display the find panel.

## See Also

### Supporting Find and Replace

- [isFindInteractionEnabled](isfindinteractionenabled.md): A Boolean value that enables a text view’s built-in find interaction.

# findInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The text view’s built-in find interaction.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIFindInteraction * findInteraction;
```

<a id="Discussion"></a>

## Discussion

Set [findInteractionEnabled](isfindinteractionenabled.md) to `true` to enable the text view’s built-in find interaction. This method returns `nil` when the interaction isn’t enabled.

Call [presentFindNavigatorShowingReplace:](../uifindinteraction/presentfindnavigator%28showingreplace_%29.md) on the [UIFindInteraction](../uifindinteraction.md) object returned by this method to invoke the find interaction and display the find panel.

## See Also

### Supporting Find and Replace

- [findInteractionEnabled](isfindinteractionenabled.md): A Boolean value that enables a text view’s built-in find interaction.
