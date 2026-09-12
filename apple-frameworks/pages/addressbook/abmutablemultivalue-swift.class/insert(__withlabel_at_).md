> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class/insert(_:withlabel:at:)](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class/insert(_:withlabel:at:))

# insert(\_:withLabel:at:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a value and its label at the given index in a multivalue list.

## Declaration

```swift
func insert(_ value: Any!, withLabel label: String!, at index: Int) -> String!
```

## Parameters

- `value`: The value to add.
- `label`: The label to associate with the value.
- `index`: The index where the value will be inserted.

<a id="return-value"></a>

## Return Value

The identifier of the inserted value and label if they are added successfully; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

If either the value or the label is `nil` or if the index is out of bounds, this method raises an exception

This method performs no type checking and will let you add a value whose type does not match the types of the other values in the list. However, if you try to use a multivalue list whose values are not all of the same type, other methods, such as the `ABRecord`  [setValue(\_:forProperty:)](../abrecord-swift.class/setvalue%28__forproperty_%29.md) method, will return [false](https://developer.apple.com/documentation/swift/false) or `kABErrorInProperty`.

## See Also

### Adding a value

- [add(\_:withLabel:)](add%28__withlabel_%29.md): Adds a value and its label to a multivalue list.

# insertValue:withLabel:atIndex: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Inserts a value and its label at the given index in a multivalue list.

## Declaration

```objectivec
- (NSString *) insertValue:(id) value withLabel:(NSString *) label atIndex:(NSUInteger) index;
```

## Parameters

- `value`: The value to add.
- `label`: The label to associate with the value.
- `index`: The index where the value will be inserted.

<a id="return-value"></a>

## Return Value

The identifier of the inserted value and label if they are added successfully; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

If either the value or the label is `nil` or if the index is out of bounds, this method raises an exception

This method performs no type checking and will let you add a value whose type does not match the types of the other values in the list. However, if you try to use a multivalue list whose values are not all of the same type, other methods, such as the `ABRecord`  [setValue:forProperty:](../abrecord-swift.class/setvalue%28__forproperty_%29.md) method, will return [false](https://developer.apple.com/documentation/swift/false) or `kABErrorInProperty`.

## See Also

### Adding a value

- [addValue:withLabel:](add%28__withlabel_%29.md): Adds a value and its label to a multivalue list.
