> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/contenthuggingelements](https://developer.apple.com/documentation/uikit/uitableview/contenthuggingelements)

# contentHuggingElements (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A setting that determines which type of items tightly hug their content.

## Declaration

```swift
var contentHuggingElements: UITableViewContentHuggingElements { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [sectionHeaders](../uitableviewcontenthuggingelements/sectionheaders.md) for plain-style table views in visionOS, and [UITableViewContentHuggingElementsNone](../uitableviewcontenthuggingelements/uitableviewcontenthuggingelementsnone.md) on all other platforms.

When the value of this property is [sectionHeaders](../uitableviewcontenthuggingelements/sectionheaders.md), header views tightly hug their content. This means header views don’t stretch to fill the width of the table view if its content’s intrinsic content size is less than the table view’s width.

## See Also

### Managing content-hugging behavior

- [UITableViewContentHuggingElements](../uitableviewcontenthuggingelements.md): Constants that determine which types of items in a table view tightly hug their content.

# contentHuggingElements (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A setting that determines which type of items tightly hug their content.

## Declaration

```objectivec
@property (nonatomic) UITableViewContentHuggingElements contentHuggingElements;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UITableViewContentHuggingElementsSectionHeaders](../uitableviewcontenthuggingelements/sectionheaders.md) for plain-style table views in visionOS, and [UITableViewContentHuggingElementsNone](../uitableviewcontenthuggingelements/uitableviewcontenthuggingelementsnone.md) on all other platforms.

When the value of this property is [UITableViewContentHuggingElementsSectionHeaders](../uitableviewcontenthuggingelements/sectionheaders.md), header views tightly hug their content. This means header views don’t stretch to fill the width of the table view if its content’s intrinsic content size is less than the table view’s width.

## See Also

### Managing content-hugging behavior

- [UITableViewContentHuggingElements](../uitableviewcontenthuggingelements.md): Constants that determine which types of items in a table view tightly hug their content.
