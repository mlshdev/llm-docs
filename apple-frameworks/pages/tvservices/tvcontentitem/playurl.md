> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/playurl](https://developer.apple.com/documentation/tvservices/tvcontentitem/playurl)

# playURL (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A URL that causes the app which created this content item to begin playing the item at the user’s current position.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var playURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

When the user presses play on the remote, opened, your application is launched if it wasn’t already running and then your [UIApplication](../../uikit/uiapplication.md) delegate is called. If at all possible, your application should immediately begin playing the content without any prompting for other information or displaying any other UI. Your app should start playback at the user’s current position within the content.

## See Also

### Inspecting the Application Launch Properties

- [displayURL](displayurl.md): Deprecated. A URL that causes the app which created this content item to display a description screen for the item.

# playURL (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A URL that causes the app which created this content item to begin playing the item at the user’s current position.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * playURL;
```

<a id="Discussion"></a>

## Discussion

When the user presses play on the remote, opened, your application is launched if it wasn’t already running and then your [UIApplication](../../uikit/uiapplication.md) delegate is called. If at all possible, your application should immediately begin playing the content without any prompting for other information or displaying any other UI. Your app should start playback at the user’s current position within the content.

## See Also

### Inspecting the Application Launch Properties

- [displayURL](displayurl.md): Deprecated. A URL that causes the app which created this content item to display a description screen for the item.
