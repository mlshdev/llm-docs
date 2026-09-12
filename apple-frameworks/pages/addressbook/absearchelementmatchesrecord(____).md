> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/absearchelementmatchesrecord(_:_:)](https://developer.apple.com/documentation/addressbook/absearchelementmatchesrecord(_:_:))

# ABSearchElementMatchesRecord(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Tests whether or not a record matches a search element.

## Declaration

```swift
func ABSearchElementMatchesRecord(_ searchElement: ABSearchElementRef!, _ record: ABRecordRef!) -> Bool
```

## Parameters

- `searchElement`: The search element containing the query you wish to test `record` with.
- `record`: The record you wish to test.

<a id="return-value"></a>

## Return Value

Returns `true` ifthe `record` parameter satisfies theconditions in the `searchElement`, `false` otherwise.

## See Also

### Search Elements

- [ABCopyArrayOfMatchingRecords(\_:\_:)](abcopyarrayofmatchingrecords%28____%29.md): Returns an array of records that match the given search element, or an empty array if no records match the search element.
- [ABSearchElementCreateWithConjunction(\_:\_:)](absearchelementcreatewithconjunction%28____%29.md): Returns a compound search element created by combiningthe search elements in an array with the given conjunction.

# ABSearchElementMatchesRecord (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Tests whether or not a record matches a search element.

## Declaration

```objectivec
extern bool ABSearchElementMatchesRecord(ABSearchElementRef searchElement, ABRecordRef record);
```

## Parameters

- `searchElement`: The search element containing the query you wish to test `record` with.
- `record`: The record you wish to test.

<a id="return-value"></a>

## Return Value

Returns `true` ifthe `record` parameter satisfies theconditions in the `searchElement`, `false` otherwise.

## See Also

### Search Elements

- [ABCopyArrayOfMatchingRecords](abcopyarrayofmatchingrecords%28____%29.md): Returns an array of records that match the given search element, or an empty array if no records match the search element.
- [ABSearchElementCreateWithConjunction](absearchelementcreatewithconjunction%28____%29.md): Returns a compound search element created by combiningthe search elements in an array with the given conjunction.
