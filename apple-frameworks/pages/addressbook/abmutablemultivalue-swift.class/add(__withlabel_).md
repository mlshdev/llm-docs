> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class/add(_:withlabel:)](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class/add(_:withlabel:))

# add(\_:withLabel:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds a value and its label to a multivalue list.

## Declaration

```swift
func add(_ value: Any!, withLabel label: String!) -> String!
```

## Parameters

- `value`: The value to add.
- `label`: The label to associate with the value.

<a id="return-value"></a>

## Return Value

The new identifier if `value` is added successfully; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The `value` argument must be of the correct type. For example, if the receiver is the value for a property of type `kABMultiStringProperty`, then `value` needs to be an NSString object. See [Property Types](../property_types.md) for a list of supported types in a multivalue list (see descriptions of the `kABMulti...` constants). If either the `value` or the `label` argument is `nil`, this method raises an exception.

This method performs no type checking and will let you add a value whose type does not match the types of the other values in the list. However, if you try to use a multivalue list whose values are not all of the same type, other methods, such as the `ABRecord`  [setValue(\_:forProperty:)](../abrecord-swift.class/setvalue%28__forproperty_%29.md) method, will return `false` or [kABErrorInProperty](../kaberrorinproperty.md).

## See Also

### Adding a value

- [insert(\_:withLabel:at:)](insert%28__withlabel_at_%29.md): Inserts a value and its label at the given index in a multivalue list.

# addValue:withLabel: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds a value and its label to a multivalue list.

## Declaration

```objectivec
- (NSString *) addValue:(id) value withLabel:(NSString *) label;
```

## Parameters

- `value`: The value to add.
- `label`: The label to associate with the value.

<a id="return-value"></a>

## Return Value

The new identifier if `value` is added successfully; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The `value` argument must be of the correct type. For example, if the receiver is the value for a property of type `kABMultiStringProperty`, then `value` needs to be an NSString object. See [Property Types](../property_types.md) for a list of supported types in a multivalue list (see descriptions of the `kABMulti...` constants). If either the `value` or the `label` argument is `nil`, this method raises an exception.

This method performs no type checking and will let you add a value whose type does not match the types of the other values in the list. However, if you try to use a multivalue list whose values are not all of the same type, other methods, such as the `ABRecord`  [setValue:forProperty:](../abrecord-swift.class/setvalue%28__forproperty_%29.md) method, will return `false` or [kABErrorInProperty](../kaberrorinproperty.md).

## See Also

### Adding a value

- [insertValue:withLabel:atIndex:](insert%28__withlabel_at_%29.md): Inserts a value and its label at the given index in a multivalue list.
