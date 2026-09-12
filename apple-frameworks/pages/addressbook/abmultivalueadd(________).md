> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalueadd(_:_:_:_:)](https://developer.apple.com/documentation/addressbook/abmultivalueadd(_:_:_:_:))

# ABMultiValueAdd(\_:\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds a value and its label to a multi-value list.

## Declaration

```swift
func ABMultiValueAdd(_ multiValue: ABMutableMultiValueRef!, _ value: CFTypeRef!, _ label: CFString!, _ outIdentifier: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> Bool
```

## Parameters

- `multiValue`: The multi-value list you wish to modify.
- `value`: An object representing a value in a multi-value list–it must be of the correct type. For example, if `multiValue` is the value for a property of type [kABMultiStringProperty](kabmultistringproperty.md), then `value` needs to be a CFString object. See Property Types for a list of supported types in a multi-value list(see descriptions of the `kABMulti...` constants). If `value` is `NULL`, this function raises an exception.
- `label`: The label for `value`—it need not be unique. If `label` is `NULL`, this function raises an exception.
- `outIdentifier`: If `value` is added successfully, this parameter returns the new identifier.

<a id="return-value"></a>

## Return Value

`true` ifsuccessfully, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This function performs no type checking and will let you adda value whose type does not match the types of the other valuesin the list. However, if you try to use a multi-value list whosevalues are not all of the same type, functions, such as the ABRecord [ABRecordSetValue(\_:\_:\_:\_:)](abrecordsetvalue%28________%29.md) function,will returns `NULL` or [kABErrorInProperty](kaberrorinproperty.md).

## See Also

### Multi Values

- [ABMultiValueCopyIdentifierAtIndex(\_:\_:)](abmultivaluecopyidentifieratindex%28____%29.md): Returns the identifier at the given index.
- [ABMultiValueCopyLabelAtIndex(\_:\_:)](abmultivaluecopylabelatindex%28____%29.md): Deprecated. Returns the label for the given index.
- [ABMultiValueCopyPrimaryIdentifier(\_:)](abmultivaluecopyprimaryidentifier%28__%29.md): Returns the identifier for the primary value.
- [ABMultiValueCopyValueAtIndex(\_:\_:)](abmultivaluecopyvalueatindex%28____%29.md): Deprecated. Returns the value for the given index.
- [ABMultiValueCount(\_:)](abmultivaluecount%28__%29.md): Returns the number of entries in a multi-value list.
- [ABMultiValueCreate()](abmultivaluecreate%28%29.md): Returns a new ABMultiValue object.
- [ABMultiValueCreateCopy(\_:)](abmultivaluecreatecopy%28__%29.md): Returns a copy of a multi-value object.
- [ABMultiValueCreateMutable(\_:)](abmultivaluecreatemutable%28__%29.md): Deprecated. Returns a newly created mutable multi-value list object.
- [ABMultiValueCreateMutableCopy(\_:)](abmultivaluecreatemutablecopy%28__%29.md): Deprecated. Returns a mutable copy of a multi-value object.
- [ABMultiValueIndexForIdentifier(\_:\_:)](abmultivalueindexforidentifier%28____%29.md): Returns the index for the given identifier.
- [ABMultiValueInsert(\_:\_:\_:\_:\_:)](abmultivalueinsert%28__________%29.md): Inserts a value and its label at the given index in amulti-value list.
- [ABMultiValuePropertyType(\_:)](abmultivaluepropertytype%28__%29.md): Returns the type for the values in a multi-value list.
- [ABMultiValueRemove(\_:\_:)](abmultivalueremove%28____%29.md): Removes the value and label at the given index.
- [ABMultiValueReplaceLabel(\_:\_:\_:)](abmultivaluereplacelabel%28______%29.md): Replaces the label at the given index.
- [ABMultiValueReplaceValue(\_:\_:\_:)](abmultivaluereplacevalue%28______%29.md): Replaces the value at the given index.

# ABMultiValueAdd (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds a value and its label to a multi-value list.

## Declaration

```objectivec
extern bool ABMultiValueAdd(ABMutableMultiValueRef multiValue, CFTypeRef value, CFStringRef label, CFStringRef*outIdentifier);
```

## Parameters

- `multiValue`: The multi-value list you wish to modify.
- `value`: An object representing a value in a multi-value list–it must be of the correct type. For example, if `multiValue` is the value for a property of type [kABMultiStringProperty](kabmultistringproperty.md), then `value` needs to be a CFString object. See Property Types for a list of supported types in a multi-value list(see descriptions of the `kABMulti...` constants). If `value` is `NULL`, this function raises an exception.
- `label`: The label for `value`—it need not be unique. If `label` is `NULL`, this function raises an exception.
- `outIdentifier`: If `value` is added successfully, this parameter returns the new identifier.

<a id="return-value"></a>

## Return Value

`true` ifsuccessfully, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This function performs no type checking and will let you adda value whose type does not match the types of the other valuesin the list. However, if you try to use a multi-value list whosevalues are not all of the same type, functions, such as the ABRecord [ABRecordSetValue](abrecordsetvalue%28________%29.md) function,will returns `NULL` or [kABErrorInProperty](kaberrorinproperty.md).

## See Also

### Multi Values

- [ABMultiValueCopyIdentifierAtIndex](abmultivaluecopyidentifieratindex%28____%29.md): Returns the identifier at the given index.
- [ABMultiValueCopyLabelAtIndex](abmultivaluecopylabelatindex%28____%29.md): Deprecated. Returns the label for the given index.
- [ABMultiValueCopyPrimaryIdentifier](abmultivaluecopyprimaryidentifier%28__%29.md): Returns the identifier for the primary value.
- [ABMultiValueCopyValueAtIndex](abmultivaluecopyvalueatindex%28____%29.md): Deprecated. Returns the value for the given index.
- [ABMultiValueCount](abmultivaluecount%28__%29.md): Returns the number of entries in a multi-value list.
- [ABMultiValueCreate](abmultivaluecreate%28%29.md): Returns a new ABMultiValue object.
- [ABMultiValueCreateCopy](abmultivaluecreatecopy%28__%29.md): Returns a copy of a multi-value object.
- [ABMultiValueCreateMutable](abmultivaluecreatemutable%28__%29.md): Deprecated. Returns a newly created mutable multi-value list object.
- [ABMultiValueCreateMutableCopy](abmultivaluecreatemutablecopy%28__%29.md): Deprecated. Returns a mutable copy of a multi-value object.
- [ABMultiValueIndexForIdentifier](abmultivalueindexforidentifier%28____%29.md): Returns the index for the given identifier.
- [ABMultiValueInsert](abmultivalueinsert%28__________%29.md): Inserts a value and its label at the given index in amulti-value list.
- [ABMultiValuePropertyType](abmultivaluepropertytype%28__%29.md): Returns the type for the values in a multi-value list.
- [ABMultiValueRemove](abmultivalueremove%28____%29.md): Removes the value and label at the given index.
- [ABMultiValueReplaceLabel](abmultivaluereplacelabel%28______%29.md): Replaces the label at the given index.
- [ABMultiValueReplaceValue](abmultivaluereplacevalue%28______%29.md): Replaces the value at the given index.
