> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/tabtype](https://developer.apple.com/documentation/appkit/nstabview/tabtype)

# NSTabView.TabType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the tab view’s type as used by the [tabViewType](tabviewtype.md) property.

## Declaration

```swift
enum TabType
```

## Topics

### Constants

- [NSTabView.TabType.topTabsBezelBorder](tabtype/toptabsbezelborder.md): The view includes tabs on the top of the view and has a bezeled border (the default).
- [NSTabView.TabType.noTabsBezelBorder](tabtype/notabsbezelborder.md): The view does not include tabs and has a bezeled border.
- [NSTabView.TabType.noTabsLineBorder](tabtype/notabslineborder.md): The view does not include tabs and has a lined border.
- [NSTabView.TabType.noTabsNoBorder](tabtype/notabsnoborder.md): The view does not include tabs and has no border.
- [NSTabView.TabType.bottomTabsBezelBorder](tabtype/bottomtabsbezelborder.md): Tabs are on the bottom of the view with a bezeled border.
- [NSTabView.TabType.leftTabsBezelBorder](tabtype/lefttabsbezelborder.md): Tabs are on the left of the view with a bezeled border.
- [NSTabView.TabType.rightTabsBezelBorder](tabtype/righttabsbezelborder.md): Tabs are on the right of the view with a bezeled border.

### Initializers

- [init(rawValue:)](tabtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Tab Attributes

- [tabViewType](tabviewtype.md): The tab type to display the tabs.
- [tabPosition](tabposition-swift.property.md)
- [NSTabView.TabPosition](tabposition-swift.enum.md)
- [tabViewBorderType](tabviewbordertype-swift.property.md)
- [NSTabView.TabViewBorderType](tabviewbordertype-swift.enum.md)

# NSTabViewType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the tab view’s type as used by the [tabViewType](tabviewtype.md) property.

## Declaration

```objectivec
enum NSTabViewType : NSUInteger;
```

## Topics

### Constants

- [NSTopTabsBezelBorder](tabtype/toptabsbezelborder.md): The view includes tabs on the top of the view and has a bezeled border (the default).
- [NSNoTabsBezelBorder](tabtype/notabsbezelborder.md): The view does not include tabs and has a bezeled border.
- [NSNoTabsLineBorder](tabtype/notabslineborder.md): The view does not include tabs and has a lined border.
- [NSNoTabsNoBorder](tabtype/notabsnoborder.md): The view does not include tabs and has no border.
- [NSBottomTabsBezelBorder](tabtype/bottomtabsbezelborder.md): Tabs are on the bottom of the view with a bezeled border.
- [NSLeftTabsBezelBorder](tabtype/lefttabsbezelborder.md): Tabs are on the left of the view with a bezeled border.
- [NSRightTabsBezelBorder](tabtype/righttabsbezelborder.md): Tabs are on the right of the view with a bezeled border.

## See Also

### Configuring the Tab Attributes

- [tabViewType](tabviewtype.md): The tab type to display the tabs.
- [tabPosition](tabposition-swift.property.md)
- [NSTabPosition](tabposition-swift.enum.md)
- [tabViewBorderType](tabviewbordertype-swift.property.md)
- [NSTabViewBorderType](tabviewbordertype-swift.enum.md)
