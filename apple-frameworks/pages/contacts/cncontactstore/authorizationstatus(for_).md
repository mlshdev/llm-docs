> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/authorizationstatus(for:)](https://developer.apple.com/documentation/contacts/cncontactstore/authorizationstatus(for:))

# authorizationStatus(for:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the current authorization status to access the contact data.

## Declaration

```swift
class func authorizationStatus(for entityType: CNEntityType) -> CNAuthorizationStatus
```

## Parameters

- `entityType`: Set to [CNEntityType](../cnentitytype.md).

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="Return-Value"></a>

## Return Value

The current authorization status to access the contact data.

<a id="Discussion"></a>

## Discussion

Based on the authorization status, your application might display or hide its UI elements that access any Contacts API. This method is thread-safe and will not block your application. To see different authorization status, see `CNAuthorizationStatus`.

## See Also

### Requesting access to the user’s contacts

- [requestAccess(for:completionHandler:)](requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [CNAuthorizationStatus](../cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
- [CNEntityType](../cnentitytype.md): The entities the user can grant access to.

# authorizationStatusForEntityType: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the current authorization status to access the contact data.

## Declaration

```objectivec
+ (CNAuthorizationStatus) authorizationStatusForEntityType:(CNEntityType) entityType;
```

## Parameters

- `entityType`: Set to [CNEntityType](../cnentitytype.md).

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="Return-Value"></a>

## Return Value

The current authorization status to access the contact data.

<a id="Discussion"></a>

## Discussion

Based on the authorization status, your application might display or hide its UI elements that access any Contacts API. This method is thread-safe and will not block your application. To see different authorization status, see `CNAuthorizationStatus`.

## See Also

### Requesting access to the user’s contacts

- [requestAccessForEntityType:completionHandler:](requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [CNAuthorizationStatus](../cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
- [CNEntityType](../cnentitytype.md): The entities the user can grant access to.
