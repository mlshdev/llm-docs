> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/criteria(forrow:)](https://developer.apple.com/documentation/appkit/nsruleeditor/criteria(forrow:))

# criteria(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the currently chosen items for a given row.

## Declaration

```swift
func criteria(forRow row: Int) -> [Any]
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The currently chosen items for row `row`.

<a id="Discussion"></a>

## Discussion

The items returned are the same as those returned by calling the delegate’s [ruleEditor(\_:child:forCriterion:with:)](../nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md) method once for each item in the row.

## See Also

### Providing Data

- [reloadCriteria()](reloadcriteria%28%29.md): Instructs the receiver to refetch criteria from its delegate.
- [setCriteria(\_:andDisplayValues:forRowAt:)](setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [displayValues(forRow:)](displayvalues%28forrow_%29.md): Returns the chosen values for a given row.

# criteriaForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the currently chosen items for a given row.

## Declaration

```objectivec
- (NSArray *) criteriaForRow:(NSInteger) row;
```

## Parameters

- `row`: The index of a row in the receiver.

<a id="return-value"></a>

## Return Value

The currently chosen items for row `row`.

<a id="Discussion"></a>

## Discussion

The items returned are the same as those returned by calling the delegate’s [ruleEditor:child:forCriterion:withRowType:](../nsruleeditordelegate/ruleeditor%28__child_forcriterion_with_%29.md) method once for each item in the row.

## See Also

### Providing Data

- [reloadCriteria](reloadcriteria%28%29.md): Instructs the receiver to refetch criteria from its delegate.
- [setCriteria:andDisplayValues:forRowAtIndex:](setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [displayValuesForRow:](displayvalues%28forrow_%29.md): Returns the chosen values for a given row.
