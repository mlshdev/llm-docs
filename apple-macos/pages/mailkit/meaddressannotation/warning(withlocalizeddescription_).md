> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meaddressannotation/warning(withlocalizeddescription:)](https://developer.apple.com/documentation/mailkit/meaddressannotation/warning(withlocalizeddescription:))

# warning(withLocalizedDescription:) (Swift)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Indicates an address may be invalid or needs attention.

## Declaration

```swift
class func warning(withLocalizedDescription localizedDescription: String) -> MEAddressAnnotation
```

## Parameters

- `localizedDescription`: A user-visible string with details about why the recipient needs attention.

<a id="return-value"></a>

## Return Value

An annotation that indicates an email address may not be valid or needs attention.

## See Also

### Specifying Email Address Validity

- [success(withLocalizedDescription:)](success%28withlocalizeddescription_%29.md): Indicates an address is valid and correct.
- [error(withLocalizedDescription:)](error%28withlocalizeddescription_%29.md): Indicates an address is invalid and may result in failure to deliver a message.

# warningWithLocalizedDescription: (Objective-C)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Indicates an address may be invalid or needs attention.

## Declaration

```objectivec
+ (MEAddressAnnotation *) warningWithLocalizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `localizedDescription`: A user-visible string with details about why the recipient needs attention.

<a id="return-value"></a>

## Return Value

An annotation that indicates an email address may not be valid or needs attention.

## See Also

### Specifying Email Address Validity

- [successWithLocalizedDescription:](success%28withlocalizeddescription_%29.md): Indicates an address is valid and correct.
- [errorWithLocalizedDescription:](error%28withlocalizeddescription_%29.md): Indicates an address is invalid and may result in failure to deliver a message.
