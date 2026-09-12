> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:tintconfigurationforitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:tintconfigurationforitem:))

# outlineView(\_:tintConfigurationForItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Customizes an item’s tinting behavior.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, tintConfigurationForItem item: Any) -> NSTintConfiguration?
```

## Parameters

- `outlineView`: The outline view to which you apply the tinting behavior.
- `item`: The item to which you apply the tinting behavior.

<a id="return-value"></a>

## Return Value

Returns a new [NSTintConfiguration](../nstintconfiguration.md) object to create a particular tinting behavior for the item’s row, or `nil` to inherit the tinting behavior from the item’s parent.

<a id="Discussion"></a>

## Discussion

You typically use this method to customize the color for a sidebar.

## See Also

### Customizing Tint Color

- [NSTintConfiguration](../nstintconfiguration.md): An object that gives you the ability to choose from system-provided tinting behaviors.

# outlineView:tintConfigurationForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Customizes an item’s tinting behavior.

## Declaration

```objectivec
- (NSTintConfiguration *) outlineView:(NSOutlineView *) outlineView tintConfigurationForItem:(id) item;
```

## Parameters

- `outlineView`: The outline view to which you apply the tinting behavior.
- `item`: The item to which you apply the tinting behavior.

<a id="return-value"></a>

## Return Value

Returns a new [NSTintConfiguration](../nstintconfiguration.md) object to create a particular tinting behavior for the item’s row, or `nil` to inherit the tinting behavior from the item’s parent.

<a id="Discussion"></a>

## Discussion

You typically use this method to customize the color for a sidebar.

## See Also

### Customizing Tint Color

- [NSTintConfiguration](../nstintconfiguration.md): An object that gives you the ability to choose from system-provided tinting behaviors.
