> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactsuserdefaults/countrycode](https://developer.apple.com/documentation/contacts/cncontactsuserdefaults/countrycode)

# countryCode (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An ISO country code.

## Declaration

```swift
var countryCode: String { get }
```

<a id="Discussion"></a>

## Discussion

ISO is the default country code for phone numbers. This is determined by the device’s SIM card or the operating system’s configured language.

## See Also

### Getting the Default Values

- [sortOrder](sortorder.md): Default sorting order by name.

# countryCode (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An ISO country code.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * countryCode;
```

```objectivec
@property (atomic, copy, readonly) NSString * countryCode;
```

<a id="Discussion"></a>

## Discussion

ISO is the default country code for phone numbers. This is determined by the device’s SIM card or the operating system’s configured language.

## See Also

### Getting the Default Values

- [sortOrder](sortorder.md): Default sorting order by name.
