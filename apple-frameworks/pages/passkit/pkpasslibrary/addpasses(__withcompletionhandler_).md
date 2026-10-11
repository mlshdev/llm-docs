> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpasslibrary/addpasses(_:withcompletionhandler:)

# addPasses(\_:withCompletionHandler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Presents a user interface for adding multiple passes at once.

## Declaration

```swift
func addPasses(_ passes: [PKPass], withCompletionHandler completion: (@Sendable (PKPassLibraryAddPassesStatus) -> Void)? = nil)
```

```swift
func addPasses(_ passes: [PKPass]) async -> PKPassLibraryAddPassesStatus
```

## Parameters

- `passes`: The passes to add.
- `completion`: The completion handler that PassKit calls after the user selects an action. This handler takes the following parameter:

  - **`status`**: A  [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md) value that indicates whether PassKit adds the passes. If the user selects to review the passes, PassKit sets the status to [PKPassLibraryAddPassesStatus.shouldReviewPasses](../pkpasslibraryaddpassesstatus/shouldreviewpasses.md). In this case, you must present an instance of [PKAddPassesViewController](../pkaddpassesviewcontroller.md) to let the user review and add the passes.

<a id="Discussion"></a>

## Discussion

Use this method when someone initiates an action that generates a single pass, like purchasing a concert ticket, or multiple passes, like checking into a multiconnection flight. Your app adds the pass to the person’s Wallet automatically with [PKPassLibrary.Capability.backgroundAddPasses](capability/backgroundaddpasses.md), or they receive a prompt to confirm the overall action or review the passes individually. If you want to the person to review individual passes visually before adding them, use an instance of [PKAddPassesViewController](../pkaddpassesviewcontroller.md).

## See Also

### Automatically adding passes

- [requestAuthorization(for:completion:)](requestauthorization%28for_completion_%29.md): Requests a person’s authorization to use a pass library capability.
- [PKPassLibrary.AuthorizationStatus](authorizationstatus.md): Statuses that indicate whether a person authorized your app to add a pass to their Wallet.
- [PKPassLibrary.Capability](capability.md): Features for which your app can request authorization from a person.

# addPasses:withCompletionHandler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Presents a user interface for adding multiple passes at once.

## Declaration

```objectivec
- (void) addPasses:(NSArray<PKPass *> *) passes withCompletionHandler:(void (^)(PKPassLibraryAddPassesStatus status)) completion;
```

## Parameters

- `passes`: The passes to add.
- `completion`: The completion handler that PassKit calls after the user selects an action. This handler takes the following parameter:

  - **`status`**: A  [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md) value that indicates whether PassKit adds the passes. If the user selects to review the passes, PassKit sets the status to [PKPassLibraryShouldReviewPasses](../pkpasslibraryaddpassesstatus/shouldreviewpasses.md). In this case, you must present an instance of [PKAddPassesViewController](../pkaddpassesviewcontroller.md) to let the user review and add the passes.

<a id="Discussion"></a>

## Discussion

Use this method when someone initiates an action that generates a single pass, like purchasing a concert ticket, or multiple passes, like checking into a multiconnection flight. Your app adds the pass to the person’s Wallet automatically with [PKPassLibraryCapabilityBackgroundAddPasses](capability/backgroundaddpasses.md), or they receive a prompt to confirm the overall action or review the passes individually. If you want to the person to review individual passes visually before adding them, use an instance of [PKAddPassesViewController](../pkaddpassesviewcontroller.md).

## See Also

### Automatically adding passes

- [requestAuthorizationForCapability:completion:](requestauthorization%28for_completion_%29.md): Requests a person’s authorization to use a pass library capability.
- [PKPassLibraryAuthorizationStatus](authorizationstatus.md): Statuses that indicate whether a person authorized your app to add a pass to their Wallet.
- [PKPassLibraryCapability](capability.md): Features for which your app can request authorization from a person.
