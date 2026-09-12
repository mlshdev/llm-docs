> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/add(_:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/add(_:))

# add(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds an `ABPerson` or `ABGroup` record to the Address Book database.

## Declaration

```swift
func add(_ record: ABRecord!) -> Bool
```

## Parameters

- `record`: The record to add.

<a id="return-value"></a>

## Return Value

`true` if the record was added successfully; otherwise `false`.

<a id="Discussion"></a>

## Discussion

If the `record` argument is `nil`, this method raises an exception. Your changes are not committed until you call the [save()](save%28%29.md) method.

It is more efficient to use the  [ABRecord](../abrecord-swift.class.md) method [init(addressBook:)](../abrecord-swift.class/init%28addressbook_%29.md) when possible.

## See Also

### Adding and Removing Records

- [add(\_:error:)](add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [remove(\_:error:)](remove%28__error_%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
- [remove(\_:)](remove%28__%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.

# addRecord: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds an `ABPerson` or `ABGroup` record to the Address Book database.

## Declaration

```objectivec
- (BOOL) addRecord:(ABRecord *) record;
```

## Parameters

- `record`: The record to add.

<a id="return-value"></a>

## Return Value

`true` if the record was added successfully; otherwise `false`.

<a id="Discussion"></a>

## Discussion

If the `record` argument is `nil`, this method raises an exception. Your changes are not committed until you call the [save](save%28%29.md) method.

It is more efficient to use the  [ABRecord](../abrecord-swift.class.md) method [initWithAddressBook:](../abrecord-swift.class/init%28addressbook_%29.md) when possible.

## See Also

### Adding and Removing Records

- [addRecord:error:](add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [removeRecord:error:](remove%28__error_%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
- [removeRecord:](remove%28__%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
