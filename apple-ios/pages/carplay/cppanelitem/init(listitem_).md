> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
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

## See Also

### Initializing the panel

- [init(gridButtons:)](init%28gridbuttons_%29.md): Initialize the item using one or more grid buttons.
- [init(coder:)](init%28coder_%29.md)

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

## See Also

### Initializing the panel

- [initWithGridButtons:](init%28gridbuttons_%29.md): Initialize the item using one or more grid buttons.
