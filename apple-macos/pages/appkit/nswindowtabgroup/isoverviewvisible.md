> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/isoverviewvisible](https://developer.apple.com/documentation/appkit/nswindowtabgroup/isoverviewvisible)

# isOverviewVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value indicating if the tab overview is currently displayed.

## Declaration

```swift
var isOverviewVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The tab overview provides a visual overview of the windows that make up a tabbing group. This property indicates whether the tab overview is currently displayed. Setting the property either shows or hides the overview.

You can monitor this property for changes using key-value observing.

## See Also

### Related Documentation

- [toggleTabOverview(\_:)](../nswindow/toggletaboverview%28__%29.md): Shows or hides the tab overview.

### Configuring the Tab User Interface

- [isTabBarVisible](istabbarvisible.md): A Boolean value indicating whether the tabbed window group currently displays a tab bar.

# overviewVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value indicating if the tab overview is currently displayed.

## Declaration

```objectivec
@property (getter=isOverviewVisible) BOOL overviewVisible;
```

<a id="Discussion"></a>

## Discussion

The tab overview provides a visual overview of the windows that make up a tabbing group. This property indicates whether the tab overview is currently displayed. Setting the property either shows or hides the overview.

You can monitor this property for changes using key-value observing.

## See Also

### Related Documentation

- [toggleTabOverview:](../nswindow/toggletaboverview%28__%29.md): Shows or hides the tab overview.

### Configuring the Tab User Interface

- [tabBarVisible](istabbarvisible.md): A Boolean value indicating whether the tabbed window group currently displays a tab bar.
