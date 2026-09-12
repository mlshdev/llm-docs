> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtab/automaticallyactivatessearch](https://developer.apple.com/documentation/uikit/uisearchtab/automaticallyactivatessearch)

# automaticallyActivatesSearch (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Determines if the search tab should automatically activate the embedded search field when the tab becomes visible.

## Declaration

```swift
var automaticallyActivatesSearch: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When this property is set to `YES`, the search field will be activated when the tab is selected. Moreover, when search is cancelled, the previously selected tab in the tab bar will be restored and selected. The default value is `NO`.

# automaticallyActivatesSearch (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Determines if the search tab should automatically activate the embedded search field when the tab becomes visible.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticallyActivatesSearch;
```

<a id="discussion"></a>

## Discussion

When this property is set to `YES`, the search field will be activated when the tab is selected. Moreover, when search is cancelled, the previously selected tab in the tab bar will be restored and selected. The default value is `NO`.
