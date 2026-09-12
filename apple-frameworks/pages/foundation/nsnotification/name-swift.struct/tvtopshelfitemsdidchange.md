> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/tvtopshelfitemsdidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/tvtopshelfitemsdidchange)

# TVTopShelfItemsDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

A notification to post when your app’s Top Shelf content has changed.

> TVTopShelfItemsDidChangeNotification has been replaced by \[TVTopShelfContentProvider topShelfContentDidChange\]

## Declaration

```swift
static let TVTopShelfItemsDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

When the content has changed, post a new notification using the default notification center (`[NSNotificationCenter defaultCenter]`). At some point in the future, the system will fetch the new data from your extension. The notification’s parameters are ignored and should be `nil`.
