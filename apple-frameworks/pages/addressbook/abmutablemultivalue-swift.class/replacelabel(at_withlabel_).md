> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class/replacelabel(at:withlabel:)](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class/replacelabel(at:withlabel:))

# replaceLabel(at:withLabel:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the label at the given index.

## Declaration

```swift
func replaceLabel(at index: Int, withLabel label: String!) -> Bool
```

## Parameters

- `index`: The index of the label that will be replaced.
- `label`: The new label.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the label is `nil` or if the index is out of bounds, this method raises an exception.

## See Also

### Replacing values and labels

- [replace(at:withValue:)](replace%28at_withvalue_%29.md): Replaces the value at the given index.

# replaceLabelAtIndex:withLabel: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the label at the given index.

## Declaration

```objectivec
- (BOOL) replaceLabelAtIndex:(NSUInteger) index withLabel:(NSString *) label;
```

## Parameters

- `index`: The index of the label that will be replaced.
- `label`: The new label.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the label is `nil` or if the index is out of bounds, this method raises an exception.

## See Also

### Replacing values and labels

- [replaceValueAtIndex:withValue:](replace%28at_withvalue_%29.md): Replaces the value at the given index.
