> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/reloadcriteria()](https://developer.apple.com/documentation/appkit/nsruleeditor/reloadcriteria())

# reloadCriteria() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Instructs the receiver to refetch criteria from its delegate.

## Declaration

```swift
func reloadCriteria()
```

<a id="Discussion"></a>

## Discussion

You can use this method to indicate that the available criteria may have changed and should be refetched from the delegate and the popups recalculated. If any item in a given row is “orphaned” (that is, is no longer reported as a child of its previous parent), its criteria and display values are set to valid choices.

## See Also

### Providing Data

- [setCriteria(\_:andDisplayValues:forRowAt:)](setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [criteria(forRow:)](criteria%28forrow_%29.md): Returns the currently chosen items for a given row.
- [displayValues(forRow:)](displayvalues%28forrow_%29.md): Returns the chosen values for a given row.

# reloadCriteria (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Instructs the receiver to refetch criteria from its delegate.

## Declaration

```objectivec
- (void) reloadCriteria;
```

<a id="Discussion"></a>

## Discussion

You can use this method to indicate that the available criteria may have changed and should be refetched from the delegate and the popups recalculated. If any item in a given row is “orphaned” (that is, is no longer reported as a child of its previous parent), its criteria and display values are set to valid choices.

## See Also

### Providing Data

- [setCriteria:andDisplayValues:forRowAtIndex:](setcriteria%28__anddisplayvalues_forrowat_%29.md): Modifies the row at a given index to contain the given items and values.
- [criteriaForRow:](criteria%28forrow_%29.md): Returns the currently chosen items for a given row.
- [displayValuesForRow:](displayvalues%28forrow_%29.md): Returns the chosen values for a given row.
