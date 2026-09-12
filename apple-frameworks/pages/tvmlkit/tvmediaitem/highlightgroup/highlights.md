> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvmediaitem/highlightgroup/highlights](https://developer.apple.com/documentation/tvmlkit/tvmediaitem/highlightgroup/highlights)

# highlights (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

An array of the individual highlights that make up a group.

> Please use SwiftUI or UIKit

## Declaration

```swift
var highlights: [TVMediaItem.Highlight] { get }
```

<a id="Discussion"></a>

## Discussion

The `highlights` property contains all of the highlights associated with a specific group. For example, all of the home runs hit during a single baseball game.

## See Also

### Accessing the Highlights

- [localizedName](localizedname.md): Deprecated. The name of a highlight group.
- [TVMediaItem.Highlight](../highlight.md): Deprecated. An object that describes a media item highlight.

# highlights (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

An array of the individual highlights that make up a group.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<TVHighlight *> * highlights;
```

<a id="Discussion"></a>

## Discussion

The `highlights` property contains all of the highlights associated with a specific group. For example, all of the home runs hit during a single baseball game.

## See Also

### Accessing the Highlights

- [localizedName](localizedname.md): Deprecated. The name of a highlight group.
- [TVHighlight](../highlight.md): Deprecated. An object that describes a media item highlight.
