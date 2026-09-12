> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/defaultnameordering()](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/defaultnameordering())

# defaultNameOrdering() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the default name ordering defined by the user in the Address Book application’s preferences.

## Declaration

```swift
func defaultNameOrdering() -> Int
```

<a id="return-value"></a>

## Return Value

The default name ordering defined by the user in the Address Book application’s preferences.

<a id="Discussion"></a>

## Discussion

The possible values are kABFirstNameFirst and kABLastNameFirst.

## See Also

### Retrieving Default Values

- [defaultCountryCode()](defaultcountrycode%28%29.md): Returns the default country code for records with unspecified country codes.

# defaultNameOrdering (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the default name ordering defined by the user in the Address Book application’s preferences.

## Declaration

```objectivec
- (NSInteger) defaultNameOrdering;
```

<a id="return-value"></a>

## Return Value

The default name ordering defined by the user in the Address Book application’s preferences.

<a id="Discussion"></a>

## Discussion

The possible values are kABFirstNameFirst and kABLastNameFirst.

## See Also

### Retrieving Default Values

- [defaultCountryCode](defaultcountrycode%28%29.md): Returns the default country code for records with unspecified country codes.
