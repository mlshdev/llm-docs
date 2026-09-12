> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/iskeyavailable(_:)](https://developer.apple.com/documentation/contacts/cncontact/iskeyavailable(_:))

# isKeyAvailable(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the contact property value for the specified key is fetched.

## Declaration

```swift
func isKeyAvailable(_ key: String) -> Bool
```

## Parameters

- `key`: A contact property key. For a list of valid keys, see [Contact Keys](../contact-keys.md).

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is fetched, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [isKeyAvailable(\_:)](iskeyavailable%28__%29.md) or [areKeysAvailable(\_:)](arekeysavailable%28__%29.md) methods are used when you are not certain of the keys that were fetched. If this method returns [false](https://developer.apple.com/documentation/swift/false), refetch the contact using the contact identifier and the keys you want to fetch. Accessing a property that was not fetched will throw [CNContactPropertyNotFetchedExceptionName](../cncontactpropertynotfetchedexceptionname.md).

## See Also

### Checking the Availability of Data

- [areKeysAvailable(\_:)](arekeysavailable%28__%29.md): Determines whether all contact property values for the specified keys are fetched.

# isKeyAvailable: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Determines whether the contact property value for the specified key is fetched.

## Declaration

```objectivec
- (BOOL) isKeyAvailable:(NSString *) key;
```

## Parameters

- `key`: A contact property key. For a list of valid keys, see [Contact Keys](../contact-keys.md).

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is fetched, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [isKeyAvailable:](iskeyavailable%28__%29.md) or [areKeysAvailable:](arekeysavailable%28__%29.md) methods are used when you are not certain of the keys that were fetched. If this method returns [false](https://developer.apple.com/documentation/swift/false), refetch the contact using the contact identifier and the keys you want to fetch. Accessing a property that was not fetched will throw [CNContactPropertyNotFetchedExceptionName](../cncontactpropertynotfetchedexceptionname.md).

## See Also

### Checking the Availability of Data

- [areKeysAvailable:](arekeysavailable%28__%29.md): Determines whether all contact property values for the specified keys are fetched.
