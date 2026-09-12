> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/tabviewtype](https://developer.apple.com/documentation/appkit/nstabview/tabviewtype)

# tabViewType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab type to display the tabs.

## Declaration

```swift
var tabViewType: NSTabView.TabType { get set }
```

<a id="Discussion"></a>

## Discussion

The supported values for this property are listed in [NSTabView.TabType](tabtype.md). The default value of this property is [NSTabView.TabType.topTabsBezelBorder](tabtype/toptabsbezelborder.md).

## See Also

### Configuring the Tab Attributes

- [NSTabView.TabType](tabtype.md): These constants specify the tab view’s type as used by the [tabViewType](tabviewtype.md) property.
- [tabPosition](tabposition-swift.property.md)
- [NSTabView.TabPosition](tabposition-swift.enum.md)
- [tabViewBorderType](tabviewbordertype-swift.property.md)
- [NSTabView.TabViewBorderType](tabviewbordertype-swift.enum.md)

# tabViewType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab type to display the tabs.

## Declaration

```objectivec
@property NSTabViewType tabViewType;
```

<a id="Discussion"></a>

## Discussion

The supported values for this property are listed in [NSTabViewType](tabtype.md). The default value of this property is [NSTopTabsBezelBorder](tabtype/toptabsbezelborder.md).

## See Also

### Configuring the Tab Attributes

- [NSTabViewType](tabtype.md): These constants specify the tab view’s type as used by the [tabViewType](tabviewtype.md) property.
- [tabPosition](tabposition-swift.property.md)
- [NSTabPosition](tabposition-swift.enum.md)
- [tabViewBorderType](tabviewbordertype-swift.property.md)
- [NSTabViewBorderType](tabviewbordertype-swift.enum.md)
