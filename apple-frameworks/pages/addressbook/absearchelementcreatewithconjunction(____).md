> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/absearchelementcreatewithconjunction(_:_:)](https://developer.apple.com/documentation/addressbook/absearchelementcreatewithconjunction(_:_:))

# ABSearchElementCreateWithConjunction(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns a compound search element created by combiningthe search elements in an array with the given conjunction.

## Declaration

```swift
func ABSearchElementCreateWithConjunction(_ conjunction: ABSearchConjunction, _ childrenSearchElement: CFArray!) -> Unmanaged<ABSearchElementRef>!
```

## Parameters

- `conjunction`: The conjunction used to join the search elements in `children`. Can be either [kABSearchAnd](kabsearchand.md) or [kABSearchOr](kabsearchor.md).
- `childrenSearchElement`: An array containing ABSearchElement objects to be joined using `conjunction`. If `NULL` this function raises an exception.

<a id="return-value"></a>

## Return Value

A new compound searchelement joining the search elements in `children` using `conjunction`.You are responsible for releasing this object.

## See Also

### Search Elements

- [ABCopyArrayOfMatchingRecords(\_:\_:)](abcopyarrayofmatchingrecords%28____%29.md): Returns an array of records that match the given search element, or an empty array if no records match the search element.
- [ABSearchElementMatchesRecord(\_:\_:)](absearchelementmatchesrecord%28____%29.md): Tests whether or not a record matches a search element.

# ABSearchElementCreateWithConjunction (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns a compound search element created by combiningthe search elements in an array with the given conjunction.

## Declaration

```objectivec
extern ABSearchElementRefABSearchElementCreateWithConjunction(ABSearchConjunction conjunction, CFArrayRef childrenSearchElement);
```

## Parameters

- `conjunction`: The conjunction used to join the search elements in `children`. Can be either [kABSearchAnd](kabsearchand.md) or [kABSearchOr](kabsearchor.md).
- `childrenSearchElement`: An array containing ABSearchElement objects to be joined using `conjunction`. If `NULL` this function raises an exception.

<a id="return-value"></a>

## Return Value

A new compound searchelement joining the search elements in `children` using `conjunction`.You are responsible for releasing this object.

## See Also

### Search Elements

- [ABCopyArrayOfMatchingRecords](abcopyarrayofmatchingrecords%28____%29.md): Returns an array of records that match the given search element, or an empty array if no records match the search element.
- [ABSearchElementMatchesRecord](absearchelementmatchesrecord%28____%29.md): Tests whether or not a record matches a search element.
