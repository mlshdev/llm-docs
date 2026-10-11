> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/capability/backgroundaddpasses

# PKPassLibrary.Capability.backgroundAddPasses (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A capability that lets your app add passes to Wallet automatically, without prompting the person to review or confirm each pass.

## Declaration

```swift
case backgroundAddPasses
```

<a id="Discussion"></a>

## Discussion

Request this capability when your app needs to add passes in the background, for example, after a purchase or a check-in, without interrupting the person with a confirmation prompt. If the person hasn’t granted this capability, call [requestAuthorization(for:completion:)](../requestauthorization%28for_completion_%29.md) to ask for permission. If the person denies the request, present the passes for review instead by using an instance of [PKAddPassesViewController](../../pkaddpassesviewcontroller.md).

# PKPassLibraryCapabilityBackgroundAddPasses (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A capability that lets your app add passes to Wallet automatically, without prompting the person to review or confirm each pass.

## Declaration

```objectivec
PKPassLibraryCapabilityBackgroundAddPasses
```

<a id="Discussion"></a>

## Discussion

Request this capability when your app needs to add passes in the background, for example, after a purchase or a check-in, without interrupting the person with a confirmation prompt. If the person hasn’t granted this capability, call [requestAuthorizationForCapability:completion:](../requestauthorization%28for_completion_%29.md) to ask for permission. If the person denies the request, present the passes for review instead by using an instance of [PKAddPassesViewController](../../pkaddpassesviewcontroller.md).
