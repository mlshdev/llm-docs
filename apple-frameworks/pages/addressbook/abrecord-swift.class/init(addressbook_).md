> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecord-swift.class/init(addressbook:)](https://developer.apple.com/documentation/addressbook/abrecord-swift.class/init(addressbook:))

# init(addressBook:) (Swift)

**Framework:** Address Book  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a record using the given address book.

## Declaration

```swift
init!(addressBook: ABAddressBook!)
```

## Parameters

- `addressBook`: The address book with which to initialize the record.

<a id="Discussion"></a>

## Discussion

The record is added to `addressBook` but is not visible to other address books until `addressBook` is saved. This method is the designated initializer for this class.

## See Also

### Creating a Record

- [init()](init%28%29.md): Initializes a record using the shared address book.

# initWithAddressBook: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a record using the given address book.

## Declaration

```objectivec
- (id) initWithAddressBook:(ABAddressBook *) addressBook;
```

## Parameters

- `addressBook`: The address book with which to initialize the record.

<a id="Discussion"></a>

## Discussion

The record is added to `addressBook` but is not visible to other address books until `addressBook` is saved. This method is the designated initializer for this class.

## See Also

### Creating a Record

- [init](init%28%29.md): Initializes a record using the shared address book.
