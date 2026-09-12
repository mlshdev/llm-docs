> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalueindexforidentifier(_:_:)](https://developer.apple.com/documentation/addressbook/abmultivalueindexforidentifier(_:_:))

# ABMultiValueIndexForIdentifier(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the index for the given identifier.

## Declaration

```swift
func ABMultiValueIndexForIdentifier(_ multiValue: ABMultiValueRef!, _ identifier: CFString!) -> CFIndex
```

## Parameters

- `multiValue`: The multi-value list that you wish to access.
- `identifier`: The identifier whose index you wish to obtain.

<a id="return-value"></a>

## Return Value

The index of `identifier`.

## See Also

### Multi Values

- [ABMultiValueAdd(\_:\_:\_:\_:)](abmultivalueadd%28________%29.md): Adds a value and its label to a multi-value list.
- [ABMultiValueCopyIdentifierAtIndex(\_:\_:)](abmultivaluecopyidentifieratindex%28____%29.md): Returns the identifier at the given index.
- [ABMultiValueCopyLabelAtIndex(\_:\_:)](abmultivaluecopylabelatindex%28____%29.md): Deprecated. Returns the label for the given index.
- [ABMultiValueCopyPrimaryIdentifier(\_:)](abmultivaluecopyprimaryidentifier%28__%29.md): Returns the identifier for the primary value.
- [ABMultiValueCopyValueAtIndex(\_:\_:)](abmultivaluecopyvalueatindex%28____%29.md): Deprecated. Returns the value for the given index.
- [ABMultiValueCount(\_:)](abmultivaluecount%28__%29.md): Returns the number of entries in a multi-value list.
- [ABMultiValueCreate()](abmultivaluecreate%28%29.md): Returns a new ABMultiValue object.
- [ABMultiValueCreateCopy(\_:)](abmultivaluecreatecopy%28__%29.md): Returns a copy of a multi-value object.
- [ABMultiValueCreateMutable(\_:)](abmultivaluecreatemutable%28__%29.md): Deprecated. Returns a newly created mutable multi-value list object.
- [ABMultiValueCreateMutableCopy(\_:)](abmultivaluecreatemutablecopy%28__%29.md): Deprecated. Returns a mutable copy of a multi-value object.
- [ABMultiValueInsert(\_:\_:\_:\_:\_:)](abmultivalueinsert%28__________%29.md): Inserts a value and its label at the given index in amulti-value list.
- [ABMultiValuePropertyType(\_:)](abmultivaluepropertytype%28__%29.md): Returns the type for the values in a multi-value list.
- [ABMultiValueRemove(\_:\_:)](abmultivalueremove%28____%29.md): Removes the value and label at the given index.
- [ABMultiValueReplaceLabel(\_:\_:\_:)](abmultivaluereplacelabel%28______%29.md): Replaces the label at the given index.
- [ABMultiValueReplaceValue(\_:\_:\_:)](abmultivaluereplacevalue%28______%29.md): Replaces the value at the given index.

# ABMultiValueIndexForIdentifier (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the index for the given identifier.

## Declaration

```objectivec
extern CFIndex ABMultiValueIndexForIdentifier(ABMultiValueRef multiValue, CFStringRef identifier);
```

## Parameters

- `multiValue`: The multi-value list that you wish to access.
- `identifier`: The identifier whose index you wish to obtain.

<a id="return-value"></a>

## Return Value

The index of `identifier`.

## See Also

### Multi Values

- [ABMultiValueAdd](abmultivalueadd%28________%29.md): Adds a value and its label to a multi-value list.
- [ABMultiValueCopyIdentifierAtIndex](abmultivaluecopyidentifieratindex%28____%29.md): Returns the identifier at the given index.
- [ABMultiValueCopyLabelAtIndex](abmultivaluecopylabelatindex%28____%29.md): Deprecated. Returns the label for the given index.
- [ABMultiValueCopyPrimaryIdentifier](abmultivaluecopyprimaryidentifier%28__%29.md): Returns the identifier for the primary value.
- [ABMultiValueCopyValueAtIndex](abmultivaluecopyvalueatindex%28____%29.md): Deprecated. Returns the value for the given index.
- [ABMultiValueCount](abmultivaluecount%28__%29.md): Returns the number of entries in a multi-value list.
- [ABMultiValueCreate](abmultivaluecreate%28%29.md): Returns a new ABMultiValue object.
- [ABMultiValueCreateCopy](abmultivaluecreatecopy%28__%29.md): Returns a copy of a multi-value object.
- [ABMultiValueCreateMutable](abmultivaluecreatemutable%28__%29.md): Deprecated. Returns a newly created mutable multi-value list object.
- [ABMultiValueCreateMutableCopy](abmultivaluecreatemutablecopy%28__%29.md): Deprecated. Returns a mutable copy of a multi-value object.
- [ABMultiValueInsert](abmultivalueinsert%28__________%29.md): Inserts a value and its label at the given index in amulti-value list.
- [ABMultiValuePropertyType](abmultivaluepropertytype%28__%29.md): Returns the type for the values in a multi-value list.
- [ABMultiValueRemove](abmultivalueremove%28____%29.md): Removes the value and label at the given index.
- [ABMultiValueReplaceLabel](abmultivaluereplacelabel%28______%29.md): Replaces the label at the given index.
- [ABMultiValueReplaceValue](abmultivaluereplacevalue%28______%29.md): Replaces the value at the given index.
