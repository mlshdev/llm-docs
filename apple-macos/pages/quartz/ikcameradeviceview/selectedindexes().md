> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikcameradeviceview/selectedindexes()

# selectedIndexes() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

The selected indexes of the camera files.

## Declaration

```swift
func selectedIndexes() -> IndexSet!
```

<a id="return-value"></a>

## Return Value

The indexes of the selected files.

## See Also

### Selection Management

- [select(\_:byExtendingSelection:)](select%28__byextendingselection_%29.md): Invoked to select the specified files, extending the selection if specified.

# selectedIndexes (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

The selected indexes of the camera files.

## Declaration

```objectivec
- (NSIndexSet *) selectedIndexes;
```

<a id="return-value"></a>

## Return Value

The indexes of the selected files.

## See Also

### Selection Management

- [selectIndexes:byExtendingSelection:](select%28__byextendingselection_%29.md): Invoked to select the specified files, extending the selection if specified.
