> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/displayvalues(forrow:)](https://developer.apple.com/documentation/appkit/nsruleeditor/displayvalues(forrow:))

# displayValues(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the chosen values for a given row.

## Declaration

```swift
func displayValues(forRow row: Int) -> [Any]
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The chosen values (strings, views, or menu items) for row `row`.

<a id="Discussion"></a>

## Discussion

The values returned are the same as those returned from the delegate’s [ruleEditor(\_:displayValueForCriterion:inRow:)](../nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md) method.

## See Also

### Providing Data

- [reloadCriteria()](reloadcriteria%28%29.md): Instructs the receiver to refetch criteria from its delegate.
- [setCriteria(\_:andDisplayValues:forRowAt:)](setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [criteria(forRow:)](criteria%28forrow_%29.md): Returns the currently chosen items for a given row.

# displayValuesForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the chosen values for a given row.

## Declaration

```objectivec
- (NSArray *) displayValuesForRow:(NSInteger) row;
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The chosen values (strings, views, or menu items) for row `row`.

<a id="Discussion"></a>

## Discussion

The values returned are the same as those returned from the delegate’s [ruleEditor:displayValueForCriterion:inRow:](../nsruleeditordelegate/ruleeditor%28__displayvalueforcriterion_inrow_%29.md) method.

## See Also

### Providing Data

- [reloadCriteria](reloadcriteria%28%29.md): Instructs the receiver to refetch criteria from its delegate.
- [setCriteria:andDisplayValues:forRowAtIndex:](setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [criteriaForRow:](criteria%28forrow_%29.md): Returns the currently chosen items for a given row.
