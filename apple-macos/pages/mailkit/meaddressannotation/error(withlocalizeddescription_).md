> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meaddressannotation/error(withlocalizeddescription:)](https://developer.apple.com/documentation/mailkit/meaddressannotation/error(withlocalizeddescription:))

# error(withLocalizedDescription:) (Swift)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Indicates an address is invalid and may result in failure to deliver a message.

## Declaration

```swift
class func error(withLocalizedDescription localizedDescription: String) -> MEAddressAnnotation
```

## Parameters

- `localizedDescription`: A user-visible string with details about the reason the address is invalid.

<a id="return-value"></a>

## Return Value

An annotation that indicates an email address is invalid and may result in failure to deliver a message.

## See Also

### Specifying Email Address Validity

- [success(withLocalizedDescription:)](success%28withlocalizeddescription_%29.md): Indicates an address is valid and correct.
- [warning(withLocalizedDescription:)](warning%28withlocalizeddescription_%29.md): Indicates an address may be invalid or needs attention.

# errorWithLocalizedDescription: (Objective-C)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Indicates an address is invalid and may result in failure to deliver a message.

## Declaration

```objectivec
+ (MEAddressAnnotation *) errorWithLocalizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `localizedDescription`: A user-visible string with details about the reason the address is invalid.

<a id="return-value"></a>

## Return Value

An annotation that indicates an email address is invalid and may result in failure to deliver a message.

## See Also

### Specifying Email Address Validity

- [successWithLocalizedDescription:](success%28withlocalizeddescription_%29.md): Indicates an address is valid and correct.
- [warningWithLocalizedDescription:](warning%28withlocalizeddescription_%29.md): Indicates an address may be invalid or needs attention.
