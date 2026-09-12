> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class/replace(at:withvalue:)](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class/replace(at:withvalue:))

# replace(at:withValue:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the value at the given index.

## Declaration

```swift
func replace(at index: Int, withValue value: Any!) -> Bool
```

## Parameters

- `index`: The index of the value that will be replaced.
- `value`: The new value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the value is `nil` or if the index is out of bounds, this method raises an exception.

## See Also

### Replacing values and labels

- [replaceLabel(at:withLabel:)](replacelabel%28at_withlabel_%29.md): Replaces the label at the given index.

# replaceValueAtIndex:withValue: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the value at the given index.

## Declaration

```objectivec
- (BOOL) replaceValueAtIndex:(NSUInteger) index withValue:(id) value;
```

## Parameters

- `index`: The index of the value that will be replaced.
- `value`: The new value.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the value is `nil` or if the index is out of bounds, this method raises an exception.

## See Also

### Replacing values and labels

- [replaceLabelAtIndex:withLabel:](replacelabel%28at_withlabel_%29.md): Replaces the label at the given index.
