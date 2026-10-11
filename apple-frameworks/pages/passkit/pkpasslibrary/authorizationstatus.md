> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/authorizationstatus

# PKPassLibrary.AuthorizationStatus (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Statuses that indicate whether a person authorized your app to add a pass to their Wallet.

## Declaration

```swift
enum AuthorizationStatus
```

## Topics

### Authorization statuses

- [PKPassLibrary.AuthorizationStatus.authorized](authorizationstatus/authorized.md): A status that occurs when the person allows your app to add one or more passes to Wallet.
- [PKPassLibrary.AuthorizationStatus.denied](authorizationstatus/denied.md): A status that occurs when the person doesn’t allow your app to add one or more passes to Wallet.
- [PKPassLibrary.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): A status that occurs when the authorization status isn’t specified.
- [PKPassLibrary.AuthorizationStatus.restricted](authorizationstatus/restricted.md): A status that occurs when the authorization status is limited.

### Initializers

- [init(rawValue:)](authorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Automatically adding passes

- [requestAuthorization(for:completion:)](requestauthorization%28for_completion_%29.md): Requests a person’s authorization to use a pass library capability.
- [PKPassLibrary.Capability](capability.md): Features for which your app can request authorization from a person.
- [addPasses(\_:withCompletionHandler:)](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.

# PKPassLibraryAuthorizationStatus (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Statuses that indicate whether a person authorized your app to add a pass to their Wallet.

## Declaration

```objectivec
enum PKPassLibraryAuthorizationStatus : NSInteger;
```

## Topics

### Authorization statuses

- [PKPassLibraryAuthorizationStatusAuthorized](authorizationstatus/authorized.md): A status that occurs when the person allows your app to add one or more passes to Wallet.
- [PKPassLibraryAuthorizationStatusDenied](authorizationstatus/denied.md): A status that occurs when the person doesn’t allow your app to add one or more passes to Wallet.
- [PKPassLibraryAuthorizationStatusNotDetermined](authorizationstatus/notdetermined.md): A status that occurs when the authorization status isn’t specified.
- [PKPassLibraryAuthorizationStatusRestricted](authorizationstatus/restricted.md): A status that occurs when the authorization status is limited.

## See Also

### Automatically adding passes

- [requestAuthorizationForCapability:completion:](requestauthorization%28for_completion_%29.md): Requests a person’s authorization to use a pass library capability.
- [PKPassLibraryCapability](capability.md): Features for which your app can request authorization from a person.
- [addPasses:withCompletionHandler:](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
