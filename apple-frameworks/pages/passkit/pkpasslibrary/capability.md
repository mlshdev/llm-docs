> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/capability

# PKPassLibrary.Capability (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Features for which your app can request authorization from a person.

## Declaration

```swift
enum Capability
```

<a id="Discussion"></a>

## Discussion

Pass a capability to [authorizationStatus(for:)](authorizationstatus%28for_%29.md) or [requestAuthorization(for:completion:)](requestauthorization%28for_completion_%29.md) to check or request someone’s permission to use that feature. Currently, [PKPassLibrary.Capability.backgroundAddPasses](capability/backgroundaddpasses.md) is the only capability PassKit defines; it controls whether your app can add passes to Wallet automatically, without prompting the person to review or confirm each pass.

## Topics

### Capabilities

- [PKPassLibrary.Capability.backgroundAddPasses](capability/backgroundaddpasses.md): A capability that lets your app add passes to Wallet automatically, without prompting the person to review or confirm each pass.

### Initializers

- [init(rawValue:)](capability/init%28rawvalue_%29.md)

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
- [PKPassLibrary.AuthorizationStatus](authorizationstatus.md): Statuses that indicate whether a person authorized your app to add a pass to their Wallet.
- [addPasses(\_:withCompletionHandler:)](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.

# PKPassLibraryCapability (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Features for which your app can request authorization from a person.

## Declaration

```objectivec
enum PKPassLibraryCapability : NSInteger;
```

<a id="Discussion"></a>

## Discussion

Pass a capability to [authorizationStatusForCapability:](authorizationstatus%28for_%29.md) or [requestAuthorizationForCapability:completion:](requestauthorization%28for_completion_%29.md) to check or request someone’s permission to use that feature. Currently, [PKPassLibraryCapabilityBackgroundAddPasses](capability/backgroundaddpasses.md) is the only capability PassKit defines; it controls whether your app can add passes to Wallet automatically, without prompting the person to review or confirm each pass.

## Topics

### Capabilities

- [PKPassLibraryCapabilityBackgroundAddPasses](capability/backgroundaddpasses.md): A capability that lets your app add passes to Wallet automatically, without prompting the person to review or confirm each pass.

## See Also

### Automatically adding passes

- [requestAuthorizationForCapability:completion:](requestauthorization%28for_completion_%29.md): Requests a person’s authorization to use a pass library capability.
- [PKPassLibraryAuthorizationStatus](authorizationstatus.md): Statuses that indicate whether a person authorized your app to add a pass to their Wallet.
- [addPasses:withCompletionHandler:](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
