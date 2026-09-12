> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/remove(_:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/remove(_:))

# remove(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes an `ABPerson` or `ABGroup` record from the Address Book database.

## Declaration

```swift
func remove(_ record: ABRecord!) -> Bool
```

## Parameters

- `record`: The record to be removed.

<a id="return-value"></a>

## Return Value

`true` if the record was removed successfully; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If `record` is `nil`, this method raises an exception. Your changes are not committed until you call the [save()](save%28%29.md) method.

## See Also

### Adding and Removing Records

- [add(\_:error:)](add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [add(\_:)](add%28__%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [remove(\_:error:)](remove%28__error_%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.

# removeRecord: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes an `ABPerson` or `ABGroup` record from the Address Book database.

## Declaration

```objectivec
- (BOOL) removeRecord:(ABRecord *) record;
```

## Parameters

- `record`: The record to be removed.

<a id="return-value"></a>

## Return Value

`true` if the record was removed successfully; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If `record` is `nil`, this method raises an exception. Your changes are not committed until you call the [save](save%28%29.md) method.

## See Also

### Adding and Removing Records

- [addRecord:error:](add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [addRecord:](add%28__%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [removeRecord:error:](remove%28__error_%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
