> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/selectedtab](https://developer.apple.com/documentation/uikit/uitabbarcontroller/selectedtab)

# selectedTab (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The currently selected tab, which can be a root tab or any of their descendants.

## Declaration

```swift
var selectedTab: UITab? { get set }
```

<a id="discussion"></a>

## Discussion

The default value for this property is `nil`.

## See Also

### Managing the selected tab

- [selectedViewController](selectedviewcontroller.md): The view controller associated with the currently selected tab item.
- [selectedIndex](selectedindex.md): The index of the view controller associated with the currently selected tab item.

# selectedTab (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The currently selected tab, which can be a root tab or any of their descendants.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UITab * selectedTab;
```

<a id="discussion"></a>

## Discussion

The default value for this property is `nil`.

## See Also

### Managing the selected tab

- [selectedViewController](selectedviewcontroller.md): The view controller associated with the currently selected tab item.
- [selectedIndex](selectedindex.md): The index of the view controller associated with the currently selected tab item.
