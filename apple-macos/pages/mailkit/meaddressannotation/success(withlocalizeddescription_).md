> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meaddressannotation/success(withlocalizeddescription:)](https://developer.apple.com/documentation/mailkit/meaddressannotation/success(withlocalizeddescription:))

# success(withLocalizedDescription:) (Swift)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Indicates an address is valid and correct.

## Declaration

```swift
class func success(withLocalizedDescription localizedDescription: String) -> MEAddressAnnotation
```

## Parameters

- `localizedDescription`: A user-visible string with details about the address, such as the full name of the recipient.

<a id="return-value"></a>

## Return Value

An annotation that indicates an email address is valid.

## See Also

### Specifying Email Address Validity

- [warning(withLocalizedDescription:)](warning%28withlocalizeddescription_%29.md): Indicates an address may be invalid or needs attention.
- [error(withLocalizedDescription:)](error%28withlocalizeddescription_%29.md): Indicates an address is invalid and may result in failure to deliver a message.

# successWithLocalizedDescription: (Objective-C)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Indicates an address is valid and correct.

## Declaration

```objectivec
+ (MEAddressAnnotation *) successWithLocalizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `localizedDescription`: A user-visible string with details about the address, such as the full name of the recipient.

<a id="return-value"></a>

## Return Value

An annotation that indicates an email address is valid.

## See Also

### Specifying Email Address Validity

- [warningWithLocalizedDescription:](warning%28withlocalizeddescription_%29.md): Indicates an address may be invalid or needs attention.
- [errorWithLocalizedDescription:](error%28withlocalizeddescription_%29.md): Indicates an address is invalid and may result in failure to deliver a message.
