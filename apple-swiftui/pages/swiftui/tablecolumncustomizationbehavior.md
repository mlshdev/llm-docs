> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumncustomizationbehavior](https://developer.apple.com/documentation/swiftui/tablecolumncustomizationbehavior)

# TableColumnCustomizationBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A set of customization behaviors of a column that a table can offer to a user.

## Declaration

```swift
struct TableColumnCustomizationBehavior
```

<a id="overview"></a>

## Overview

This is used as a value provided to [disabledCustomizationBehavior(\_:)](tablecolumncontent/disabledcustomizationbehavior%28__%29.md).

Setting any of these values as the `disabledCustomizationBehavior(_:)` doesn’t have any effect on iOS.

## Topics

### Getting the customization behavior

- [all](tablecolumncustomizationbehavior/all.md): All customization behaviors.
- [reorder](tablecolumncustomizationbehavior/reorder.md): A behavior that allows the column to be reordered by the user.
- [resize](tablecolumncustomizationbehavior/resize.md): A behavior that allows the column to be resized by the user.
- [visibility](tablecolumncustomizationbehavior/visibility.md): A behavior that allows the column to be hidden or revealed by the user.

### Creating a behavior

- [init()](tablecolumncustomizationbehavior/init%28%29.md): Creates an empty customization behavior, representing no customization

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Customizing columns

- [tableColumnHeaders(\_:)](view/tablecolumnheaders%28__%29.md): Controls the visibility of a `Table`’s column header views.
- [TableColumnCustomization](tablecolumncustomization.md): A representation of the state of the columns in a table.
