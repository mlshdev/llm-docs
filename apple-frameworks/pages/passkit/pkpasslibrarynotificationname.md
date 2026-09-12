> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationname](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationname)

# PKPassLibraryNotificationName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The types of notifications that the pass library posts.

## Declaration

```swift
struct PKPassLibraryNotificationName
```

## Topics

### Creating a pass library notification name

- [init(rawValue:)](pkpasslibrarynotificationname/init%28rawvalue_%29.md): Creates a pass library notification name according to the provided raw value.
- [init(\_:)](pkpasslibrarynotificationname/init%28__%29.md): Creates a pass library notification name according to the provided string.

### Notification names

- [PKPassLibraryDidChange](pkpasslibrarynotificationname/pkpasslibrarydidchange.md): A notification that PassKit posts when the pass library changes.
- [PKPassLibraryRemotePaymentPassesDidChange](pkpasslibrarynotificationname/pkpasslibraryremotepaymentpassesdidchange.md): A notification that PassKit posts when it adds or removes a pass on a paired remote device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving notifications

- [PKPassLibraryNotificationKey](pkpasslibrarynotificationkey.md): The user info keys that a pass library notification uses.

# PKPassLibraryNotificationName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The types of notifications that the pass library posts.

## Declaration

```objectivec
typedef NSString * PKPassLibraryNotificationName;
```

## Topics

### Notification names

- [PKPassLibraryDidChangeNotification](pkpasslibrarynotificationname/pkpasslibrarydidchange.md): A notification that PassKit posts when the pass library changes.
- [PKPassLibraryRemotePaymentPassesDidChangeNotification](pkpasslibrarynotificationname/pkpasslibraryremotepaymentpassesdidchange.md): A notification that PassKit posts when it adds or removes a pass on a paired remote device.

## See Also

### Receiving notifications

- [PKPassLibraryNotificationKey](pkpasslibrarynotificationkey.md): The user info keys that a pass library notification uses.
