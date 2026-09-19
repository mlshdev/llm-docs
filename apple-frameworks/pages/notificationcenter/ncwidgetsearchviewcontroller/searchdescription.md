> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewcontroller/searchdescription

# searchDescription (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A localized description of the nature of the search.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var searchDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The search description is displayed above the search field. If appropriate, the search display controller can change the description to reflect the current status of the search. The default value of this property is “Search”.

## See Also

### Displaying the Search Interface

- [searchResultsPlaceholderString](searchresultsplaceholderstring.md): Deprecated. A localized phrase displayed in the results list when no search results are available.

# searchDescription (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A localized description of the nature of the search.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (copy, nullable) NSString * searchDescription;
```

<a id="Discussion"></a>

## Discussion

The search description is displayed above the search field. If appropriate, the search display controller can change the description to reflect the current status of the search. The default value of this property is “Search”.

## See Also

### Displaying the Search Interface

- [searchResultsPlaceholderString](searchresultsplaceholderstring.md): Deprecated. A localized phrase displayed in the results list when no search results are available.
