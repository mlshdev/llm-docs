> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class/removeandlabel(at:)](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class/removeandlabel(at:))

# removeAndLabel(at:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes the value and label at the given index.

## Declaration

```swift
func removeAndLabel(at index: Int) -> Bool
```

## Parameters

- `index`: The index of the value-label pair that will be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the index is out of bounds, this method raises an exception.

# removeValueAndLabelAtIndex: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes the value and label at the given index.

## Declaration

```objectivec
- (BOOL) removeValueAndLabelAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the value-label pair that will be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the index is out of bounds, this method raises an exception.
