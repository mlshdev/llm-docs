> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection/initwithitems:

# initWithItems:

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a section with the provided items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<CPListTemplateItem>> *) items;
```

## Parameters

- `items`: The items to include in the section. CarPlay displays your items in the same order as your array. You can specify only [CPListItem](../cplistitem.md), [CPListImageRowItem](../cplistimagerowitem.md), and [CPMessageListItem](../cpmessagelistitem.md) types in your array. You can’t specify custom types that conform to the [CPListTemplateItem](../cplisttemplateitem.md) protocol. If you specify an empty array, the list interface hides the section. Empty sections count against the maximum number of allowed sections.

<a id="discussion"></a>

## Discussion

- Return: An initialized section object.
