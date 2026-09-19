> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abrecord-swift.class/init()

# init() (Swift)

**Framework:** Address Book  
**Kind:** Initializer  
**Availability:** macOS

Initializes a record using the shared address book.

## Declaration

```swift
init!()
```

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and later, this is equivalent to `initWithAddressBook:[ABAddressBook addressBook]`.

## See Also

### Creating a Record

- [init(addressBook:)](init%28addressbook_%29.md): Initializes a record using the given address book.

# init (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a record using the shared address book.

## Declaration

```objectivec
- (id) init;
```

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and later, this is equivalent to `initWithAddressBook:[ABAddressBook addressBook]`.

## See Also

### Creating a Record

- [initWithAddressBook:](init%28addressbook_%29.md): Initializes a record using the given address book.
