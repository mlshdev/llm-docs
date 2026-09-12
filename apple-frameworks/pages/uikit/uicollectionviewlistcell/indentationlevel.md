> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlistcell/indentationlevel](https://developer.apple.com/documentation/uikit/uicollectionviewlistcell/indentationlevel)

# indentationLevel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The level of indentation for the cell.

## Declaration

```swift
var indentationLevel: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The indentation level sets automatically when you use a hierarchical data source, such as an [NSDiffableDataSourceSectionSnapshot](../nsdiffabledatasourcesectionsnapshot-swift.struct.md).

## See Also

### Customizing layout

- [indentationWidth](indentationwidth.md): The width of an indentation level.
- [indentsAccessories](indentsaccessories.md): A Boolean value that detemines whether the cell indents accessories on the leading side.
- [separatorLayoutGuide](separatorlayoutguide.md): A guide for laying out separators in relation to the primary content in the cell.

# indentationLevel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The level of indentation for the cell.

## Declaration

```objectivec
@property (nonatomic) NSInteger indentationLevel;
```

<a id="Discussion"></a>

## Discussion

The indentation level sets automatically when you use a hierarchical data source, such as an [NSDiffableDataSourceSectionSnapshot](../nsdiffabledatasourcesectionsnapshot-swift.struct.md).

## See Also

### Customizing layout

- [indentationWidth](indentationwidth.md): The width of an indentation level.
- [indentsAccessories](indentsaccessories.md): A Boolean value that detemines whether the cell indents accessories on the leading side.
- [separatorLayoutGuide](separatorlayoutguide.md): A guide for laying out separators in relation to the primary content in the cell.
