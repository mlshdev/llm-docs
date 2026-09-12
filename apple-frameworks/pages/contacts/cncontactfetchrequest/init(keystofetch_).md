> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest/init(keystofetch:)](https://developer.apple.com/documentation/contacts/cncontactfetchrequest/init(keystofetch:))

# init(keysToFetch:) (Swift)

**Framework:** Contacts  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Creates a fetch request for the specified keys.

## Declaration

```swift
init(keysToFetch: [any CNKeyDescriptor])
```

## Parameters

- `keysToFetch`: An array of contact property keys and/or key descriptors from contacts objects to be fetched in the returned contacts. For a list of possible keys, see [Contact Keys](../contact-keys.md).

<a id="Return-Value"></a>

## Return Value

The initialized [CNContactFetchRequest](../cncontactfetchrequest.md) instance.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for this class. Using `init` raises an exception.

## See Also

### Creating a Fetch Request

- [CNKeyDescriptor](../cnkeydescriptor.md): This protocol is reserved for Contacts framework usage.

# initWithKeysToFetch: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Creates a fetch request for the specified keys.

## Declaration

```objectivec
- (instancetype) initWithKeysToFetch:(NSArray<id<CNKeyDescriptor>> *) keysToFetch;
```

## Parameters

- `keysToFetch`: An array of contact property keys and/or key descriptors from contacts objects to be fetched in the returned contacts. For a list of possible keys, see [Contact Keys](../contact-keys.md).

<a id="Return-Value"></a>

## Return Value

The initialized [CNContactFetchRequest](../cncontactfetchrequest.md) instance.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for this class. Using `init` raises an exception.

## See Also

### Creating a Fetch Request

- [CNKeyDescriptor](../cnkeydescriptor.md): This protocol is reserved for Contacts framework usage.
