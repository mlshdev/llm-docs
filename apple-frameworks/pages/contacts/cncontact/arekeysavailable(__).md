> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/arekeysavailable(_:)](https://developer.apple.com/documentation/contacts/cncontact/arekeysavailable(_:))

# areKeysAvailable(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Determines whether all contact property values for the specified keys are fetched.

## Declaration

```swift
func areKeysAvailable(_ keyDescriptors: [any CNKeyDescriptor]) -> Bool
```

## Parameters

- `keyDescriptors`: An array of contact property keys and/or key descriptors from contact objects.

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all the values are fetched; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [isKeyAvailable(\_:)](iskeyavailable%28__%29.md) or [areKeysAvailable(\_:)](arekeysavailable%28__%29.md) methods are used where you are not certain of the keys that when fetched. If this method returns [false](https://developer.apple.com/documentation/swift/false), refetch the contact using the contact identifier and the keys you want to fetch. Accessing a property that was not fetched will throw an [CNContactPropertyNotFetchedExceptionName](../cncontactpropertynotfetchedexceptionname.md) exception.

## See Also

### Checking the Availability of Data

- [isKeyAvailable(\_:)](iskeyavailable%28__%29.md): Determines whether the contact property value for the specified key is fetched.

# areKeysAvailable: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Determines whether all contact property values for the specified keys are fetched.

## Declaration

```objectivec
- (BOOL) areKeysAvailable:(NSArray<id<CNKeyDescriptor>> *) keyDescriptors;
```

## Parameters

- `keyDescriptors`: An array of contact property keys and/or key descriptors from contact objects.

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all the values are fetched; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [isKeyAvailable:](iskeyavailable%28__%29.md) or [areKeysAvailable:](arekeysavailable%28__%29.md) methods are used where you are not certain of the keys that when fetched. If this method returns [false](https://developer.apple.com/documentation/swift/false), refetch the contact using the contact identifier and the keys you want to fetch. Accessing a property that was not fetched will throw an [CNContactPropertyNotFetchedExceptionName](../cncontactpropertynotfetchedexceptionname.md) exception.

## See Also

### Checking the Availability of Data

- [isKeyAvailable:](iskeyavailable%28__%29.md): Determines whether the contact property value for the specified key is fetched.
