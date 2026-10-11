> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/requestauthorization(for:completion:)

# requestAuthorization(for:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Requests a person’s authorization to use a pass library capability.

## Declaration

```swift
func requestAuthorization(for capability: PKPassLibrary.Capability, completion: @escaping @Sendable (PKPassLibrary.AuthorizationStatus) -> Void)
```

```swift
func requestAuthorization(for capability: PKPassLibrary.Capability) async -> PKPassLibrary.AuthorizationStatus
```

<a id="Discussion"></a>

## Discussion

Call this method before using a capability that requires someone’s explicit permission, like [PKPassLibrary.Capability.backgroundAddPasses](capability/backgroundaddpasses.md). If the person hasn’t decided whether to grant your app that capability, PassKit prompts them for permission and calls your completion handler with their choice. If the person already granted or denied the capability, PassKit calls your completion handler immediately, without showing a prompt.

Use [authorizationStatus(for:)](authorizationstatus%28for_%29.md) to check the person’s current authorization status for a capability without prompting them.

## See Also

### Automatically adding passes

- [PKPassLibrary.AuthorizationStatus](authorizationstatus.md): Statuses that indicate whether a person authorized your app to add a pass to their Wallet.
- [PKPassLibrary.Capability](capability.md): Features for which your app can request authorization from a person.
- [addPasses(\_:withCompletionHandler:)](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.

# requestAuthorizationForCapability:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Requests a person’s authorization to use a pass library capability.

## Declaration

```objectivec
- (void) requestAuthorizationForCapability:(PKPassLibraryCapability) capability completion:(void (^)(PKPassLibraryAuthorizationStatus status)) completion;
```

<a id="Discussion"></a>

## Discussion

Call this method before using a capability that requires someone’s explicit permission, like [PKPassLibraryCapabilityBackgroundAddPasses](capability/backgroundaddpasses.md). If the person hasn’t decided whether to grant your app that capability, PassKit prompts them for permission and calls your completion handler with their choice. If the person already granted or denied the capability, PassKit calls your completion handler immediately, without showing a prompt.

Use [authorizationStatusForCapability:](authorizationstatus%28for_%29.md) to check the person’s current authorization status for a capability without prompting them.

## See Also

### Automatically adding passes

- [PKPassLibraryAuthorizationStatus](authorizationstatus.md): Statuses that indicate whether a person authorized your app to add a pass to their Wallet.
- [PKPassLibraryCapability](capability.md): Features for which your app can request authorization from a person.
- [addPasses:withCompletionHandler:](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
