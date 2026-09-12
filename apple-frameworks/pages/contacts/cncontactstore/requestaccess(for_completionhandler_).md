> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/requestaccess(for:completionhandler:)](https://developer.apple.com/documentation/contacts/cncontactstore/requestaccess(for:completionhandler:))

# requestAccess(for:completionHandler:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Requests access to the user’s contacts.

## Declaration

```swift
func requestAccess(for entityType: CNEntityType, completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func requestAccess(for entityType: CNEntityType) async throws -> Bool
```

## Parameters

- `entityType`: Set to `CNEntityTypeContacts`.
- `completionHandler`: Set granted to [true](https://developer.apple.com/documentation/swift/true) if the user allows access and error is `nil`.

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="Discussion"></a>

## Discussion

> **Important**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAccess(for entityType: CNEntityType) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Users grant or deny access to contact data on a per-app basis. Request access to contact data by calling the [requestAccess(for:completionHandler:)](requestaccess%28for_completionhandler_%29.md) method, which returns right away. The first time your app calls this method, the system prompts the user to grant or deny access to your app. The system then saves the user’s response and does not prompt them again.

The system executes `completionHandler` on an arbitrary queue. It is recommended that you use [CNContactStore](../cncontactstore.md) instance methods in this completion handler instead of the UI main thread. This method is optional when [CNContactStore](../cncontactstore.md) is used in the background thread. If you don’t request access, [CNContactStore](../cncontactstore.md) may block your app while asking the user for access.

## See Also

### Requesting access to the user’s contacts

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNAuthorizationStatus](../cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
- [CNEntityType](../cnentitytype.md): The entities the user can grant access to.

# requestAccessForEntityType:completionHandler: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Requests access to the user’s contacts.

## Declaration

```objectivec
- (void) requestAccessForEntityType:(CNEntityType) entityType completionHandler:(void (^)(BOOL granted, NSError *error)) completionHandler;
```

## Parameters

- `entityType`: Set to `CNEntityTypeContacts`.
- `completionHandler`: Set granted to [true](https://developer.apple.com/documentation/swift/true) if the user allows access and error is `nil`.

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="Discussion"></a>

## Discussion

> **Important**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAccess(for entityType: CNEntityType) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Users grant or deny access to contact data on a per-app basis. Request access to contact data by calling the [requestAccessForEntityType:completionHandler:](requestaccess%28for_completionhandler_%29.md) method, which returns right away. The first time your app calls this method, the system prompts the user to grant or deny access to your app. The system then saves the user’s response and does not prompt them again.

The system executes `completionHandler` on an arbitrary queue. It is recommended that you use [CNContactStore](../cncontactstore.md) instance methods in this completion handler instead of the UI main thread. This method is optional when [CNContactStore](../cncontactstore.md) is used in the background thread. If you don’t request access, [CNContactStore](../cncontactstore.md) may block your app while asking the user for access.

## See Also

### Requesting access to the user’s contacts

- [authorizationStatusForEntityType:](authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNAuthorizationStatus](../cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
- [CNEntityType](../cnentitytype.md): The entities the user can grant access to.
