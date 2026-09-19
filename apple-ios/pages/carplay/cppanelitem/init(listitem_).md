> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelitem/init(listitem:)

# init(listItem:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize the item using a list item.

## Declaration

```swift
init(listItem: CPListItem)
```

## Parameters

- `listItem`: The list item with the information to display. The [CPListItem](../cplistitem.md) type supports primary and secondary text and images.

<a id="return-value"></a>

## Return Value

A panel item configured with the specified list item.

# initWithListItem: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize the item using a list item.

## Declaration

```objectivec
- (instancetype) initWithListItem:(CPListItem *) listItem;
```

## Parameters

- `listItem`: The list item with the information to display. The [CPListItem](../cplistitem.md) type supports primary and secondary text and images.

<a id="return-value"></a>

## Return Value

A panel item configured with the specified list item.
