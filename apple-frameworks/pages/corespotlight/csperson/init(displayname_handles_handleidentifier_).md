> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csperson/init(displayname:handles:handleidentifier:)](https://developer.apple.com/documentation/corespotlight/csperson/init(displayname:handles:handleidentifier:))

# init(displayName:handles:handleIdentifier:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a new `CSPerson` object initialized with the specified display name and contact attributes.

## Declaration

```swift
init(displayName: String?, handles: [String], handleIdentifier: String)
```

## Parameters

- `displayName`: The name of the person in a user-displayable string.
- `handles`: An array of contact handles, such as phone number or email address.
- `handleIdentifier`: A property key that specifies a handle type, such as [CNContactEmailAddressesKey](../../contacts/cncontactemailaddresseskey.md).

<a id="return-value"></a>

## Return Value

An initialized person object that represents a user’s contact.

## See Also

### Initializing a person object

- [init(coder:)](init%28coder_%29.md)

# initWithDisplayName:handles:handleIdentifier: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a new `CSPerson` object initialized with the specified display name and contact attributes.

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) displayName handles:(NSArray<NSString *> *) handles handleIdentifier:(NSString *) handleIdentifier;
```

## Parameters

- `displayName`: The name of the person in a user-displayable string.
- `handles`: An array of contact handles, such as phone number or email address.
- `handleIdentifier`: A property key that specifies a handle type, such as [CNContactEmailAddressesKey](../../contacts/cncontactemailaddresseskey.md).

<a id="return-value"></a>

## Return Value

An initialized person object that represents a user’s contact.
