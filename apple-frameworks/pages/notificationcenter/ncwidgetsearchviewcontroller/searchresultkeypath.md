> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetsearchviewcontroller/searchresultkeypath](https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewcontroller/searchresultkeypath)

# searchResultKeyPath (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A key path for the string property to display for each object in the search results array.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var searchResultKeyPath: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The search view controller uses the key path to find the textual description of each object in [searchResults](searchresults.md). The default value of this property is “description”.

## See Also

### Displaying Search Results

- [searchResults](searchresults.md): Deprecated. An array of search results.

# searchResultKeyPath (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A key path for the string property to display for each object in the search results array.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (copy, nullable) NSString * searchResultKeyPath;
```

<a id="Discussion"></a>

## Discussion

The search view controller uses the key path to find the textual description of each object in [searchResults](searchresults.md). The default value of this property is “description”.

## See Also

### Displaying Search Results

- [searchResults](searchresults.md): Deprecated. An array of search results.
