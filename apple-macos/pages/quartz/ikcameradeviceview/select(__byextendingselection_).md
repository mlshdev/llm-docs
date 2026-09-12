> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceview/select(_:byextendingselection:)](https://developer.apple.com/documentation/quartz/ikcameradeviceview/select(_:byextendingselection:))

# select(\_:byExtendingSelection:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to select the specified files, extending the selection if specified.

## Declaration

```swift
func select(_ indexes: IndexSet!, byExtendingSelection extend: Bool)
```

## Parameters

- `indexes`: The indexes of the files to select.
- `extend`: [true](https://developer.apple.com/documentation/swift/true) if the selection should be extended, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selection Management

- [selectedIndexes()](selectedindexes%28%29.md): The selected indexes of the camera files.

# selectIndexes:byExtendingSelection: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to select the specified files, extending the selection if specified.

## Declaration

```objectivec
- (void) selectIndexes:(NSIndexSet *) indexes byExtendingSelection:(BOOL) extend;
```

## Parameters

- `indexes`: The indexes of the files to select.
- `extend`: [true](https://developer.apple.com/documentation/swift/true) if the selection should be extended, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selection Management

- [selectedIndexes](selectedindexes%28%29.md): The selected indexes of the camera files.
