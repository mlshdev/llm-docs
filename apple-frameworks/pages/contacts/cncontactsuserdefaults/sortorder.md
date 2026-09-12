> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactsuserdefaults/sortorder](https://developer.apple.com/documentation/contacts/cncontactsuserdefaults/sortorder)

# sortOrder (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Default sorting order by name.

## Declaration

```swift
var sortOrder: CNContactSortOrder { get }
```

<a id="Discussion"></a>

## Discussion

Sort order is determined by the operating system’s configured language or overridden by the user.

## See Also

### Getting the Default Values

- [countryCode](countrycode.md): An ISO country code.

# sortOrder (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Default sorting order by name.

## Declaration

```objectivec
@property (nonatomic, readonly) CNContactSortOrder sortOrder;
```

```objectivec
@property (atomic, readonly) CNContactSortOrder sortOrder;
```

<a id="Discussion"></a>

## Discussion

Sort order is determined by the operating system’s configured language or overridden by the user.

## See Also

### Getting the Default Values

- [countryCode](countrycode.md): An ISO country code.
