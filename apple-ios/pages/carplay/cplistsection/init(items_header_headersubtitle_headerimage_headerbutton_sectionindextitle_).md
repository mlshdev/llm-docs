> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection/init(items:header:headersubtitle:headerimage:headerbutton:sectionindextitle:)](https://developer.apple.com/documentation/carplay/cplistsection/init(items:header:headersubtitle:headerimage:headerbutton:sectionindextitle:))

# init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a section with list items, a header, a section index title, and section header details.

## Declaration

```swift
init(items: [any CPListTemplateItem], header: String, headerSubtitle: String?, headerImage: UIImage?, headerButton: CPButton?, sectionIndexTitle: String?)
```

## Parameters

- `items`: A list of items to include in the section.
- `header`: The section header text.
- `sectionIndexTitle`: A section index title. The system displays only the first character of the title, so choose a single-character section index title.

<a id="return-value"></a>

## Return Value

A newly initialized list section.

## See Also

### Creating a Section

- [CPListTemplateItem](../cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](../cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](../cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](../cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](../cpmessagelistitem.md): A list template row that represents a conversation or contact.

# initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a section with list items, a header, a section index title, and section header details.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<CPListTemplateItem>> *) items header:(NSString *) header headerSubtitle:(NSString *) headerSubtitle headerImage:(UIImage *) headerImage headerButton:(CPButton *) headerButton sectionIndexTitle:(NSString *) sectionIndexTitle;
```

## Parameters

- `items`: A list of items to include in the section.
- `header`: The section header text.
- `sectionIndexTitle`: A section index title. The system displays only the first character of the title, so choose a single-character section index title.

<a id="return-value"></a>

## Return Value

A newly initialized list section.

## See Also

### Creating a Section

- [initWithItems:](initwithitems_.md): Creates a section with list items.
- [initWithItems:header:sectionIndexTitle:](initwithitems_header_sectionindextitle_.md): Creates a section with list items, a header, and a section index title.
- [CPListTemplateItem](../cplisttemplateitem.md): A description of the common properties of all list item types.
- [CPSelectableListItem](../cpselectablelistitem.md): A description of a selectable list item.
- [CPListItem](../cplistitem.md): A selectable row in a list template.
- [CPListImageRowItem](../cplistimagerowitem.md): A list template row that displays a series of images.
- [CPMessageListItem](../cpmessagelistitem.md): A list template row that represents a conversation or contact.
