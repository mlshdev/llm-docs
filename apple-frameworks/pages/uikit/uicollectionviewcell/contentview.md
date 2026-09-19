> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewcell/contentview

# contentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The main view that you add your cell’s custom content to.

## Declaration

```swift
var contentView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

When configuring a cell, you add any custom views representing your cell’s content to this view. The cell object places the content in this view in front of any background views.

## See Also

### Managing the content

- [contentConfiguration](contentconfiguration-13e7k.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.

# contentView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The main view that you add your cell’s custom content to.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * contentView;
```

<a id="Discussion"></a>

## Discussion

When configuring a cell, you add any custom views representing your cell’s content to this view. The cell object places the content in this view in front of any background views.

## See Also

### Managing the content

- [contentConfiguration](contentconfiguration-1lcqh.md): The current content configuration of the cell.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the cell automatically updates its content configuration when its state changes.
