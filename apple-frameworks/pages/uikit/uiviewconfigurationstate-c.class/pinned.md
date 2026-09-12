> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewconfigurationstate-c.class/pinned](https://developer.apple.com/documentation/uikit/uiviewconfigurationstate-c.class/pinned)

# pinned

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the view is in a pinned state.

## Declaration

```objectivec
@property (nonatomic, getter=isPinned) BOOL pinned;
```

<a id="Discussion"></a>

## Discussion

This state applies to header and footer views.

## See Also

### Managing view configuration states

- [traitCollection](traitcollection.md): The traits that describe the current layout environment of the view, such as the user interface style and layout direction.
- [selected](selected.md): A Boolean value that indicates whether the view is in a selected state.
- [highlighted](highlighted.md): A Boolean value that indicates whether the view is in a highlighted state.
- [focused](focused.md): A Boolean value that indicates whether the view is in a focused state.
- [disabled](disabled.md): A Boolean value that indicates whether the view is in a disabled state.
