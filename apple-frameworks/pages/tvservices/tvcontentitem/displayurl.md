> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/displayurl](https://developer.apple.com/documentation/tvservices/tvcontentitem/displayurl)

# displayURL (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A URL that causes the app which created this content item to display a description screen for the item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var displayURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

When the user selects the item, your application is launched if it wasn’t already running and then your [UIApplication](../../uikit/uiapplication.md) delegate is called. If at all possible, your application should immediately display the description of the item without any prompting for other information or displaying any other UI.

## See Also

### Inspecting the Application Launch Properties

- [playURL](playurl.md): Deprecated. A URL that causes the app which created this content item to begin playing the item at the user’s current position.

# displayURL (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A URL that causes the app which created this content item to display a description screen for the item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * displayURL;
```

<a id="Discussion"></a>

## Discussion

When the user selects the item, your application is launched if it wasn’t already running and then your [UIApplication](../../uikit/uiapplication.md) delegate is called. If at all possible, your application should immediately display the description of the item without any prompting for other information or displaying any other UI.

## See Also

### Inspecting the Application Launch Properties

- [playURL](playurl.md): Deprecated. A URL that causes the app which created this content item to begin playing the item at the user’s current position.
