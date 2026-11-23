> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelitem/init(gridbuttons:)

# init(gridButtons:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize the item using one or more grid buttons.

## Declaration

```swift
init(gridButtons: [CPGridButton])
```

## Parameters

- `gridButtons`: The grid buttons to display in the item. Specify the buttons in the order you want them to appear. Include no more than four grid buttons in the array.

<a id="return-value"></a>

## Return Value

A panel item configured with the specified grid buttons.

## See Also

### Initializing the panel

- [init(listItem:)](init%28listitem_%29.md): Initialize the item using a list item.
- [init(coder:)](init%28coder_%29.md)

# initWithGridButtons: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize the item using one or more grid buttons.

## Declaration

```objectivec
- (instancetype) initWithGridButtons:(NSArray<CPGridButton *> *) gridButtons;
```

## Parameters

- `gridButtons`: The grid buttons to display in the item. Specify the buttons in the order you want them to appear. Include no more than four grid buttons in the array.

<a id="return-value"></a>

## Return Value

A panel item configured with the specified grid buttons.

## See Also

### Initializing the panel

- [initWithListItem:](init%28listitem_%29.md): Initialize the item using a list item.
