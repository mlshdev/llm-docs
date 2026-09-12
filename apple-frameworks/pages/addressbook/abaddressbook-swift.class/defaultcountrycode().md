> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/defaultcountrycode()](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/defaultcountrycode())

# defaultCountryCode() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the default country code for records with unspecified country codes.

## Declaration

```swift
func defaultCountryCode() -> String!
```

<a id="return-value"></a>

## Return Value

The default country code.

<a id="Discussion"></a>

## Discussion

This value returned is set by the user in the Address Book application’s general preference. The supported country codes are listed in [ABPerson](../abperson.md).

## See Also

### Retrieving Default Values

- [defaultNameOrdering()](defaultnameordering%28%29.md): Returns the default name ordering defined by the user in the Address Book application’s preferences.

# defaultCountryCode (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the default country code for records with unspecified country codes.

## Declaration

```objectivec
- (NSString *) defaultCountryCode;
```

<a id="return-value"></a>

## Return Value

The default country code.

<a id="Discussion"></a>

## Discussion

This value returned is set by the user in the Address Book application’s general preference. The supported country codes are listed in [ABPerson](../abperson.md).

## See Also

### Retrieving Default Values

- [defaultNameOrdering](defaultnameordering%28%29.md): Returns the default name ordering defined by the user in the Address Book application’s preferences.
