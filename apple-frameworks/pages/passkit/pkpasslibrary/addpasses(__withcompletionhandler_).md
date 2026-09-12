> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/addpasses(_:withcompletionhandler:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/addpasses(_:withcompletionhandler:))

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

Use this method whenever the user initiates an action that generates a single pass (like purchasing a concert ticket) or multiple passes (like checking into a multiconnection flight). The user receives a prompt to confirm the overall action or to review the passes individually. If you want to force the user to review individual passes visually before adding them, use an instance of [PKAddPassesViewController](../pkaddpassesviewcontroller.md).

## See Also

### Adding passes

- [canAddSecureElementPass(primaryAccountIdentifier:)](canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [canAddFelicaPass()](canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.

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

Use this method whenever the user initiates an action that generates a single pass (like purchasing a concert ticket) or multiple passes (like checking into a multiconnection flight). The user receives a prompt to confirm the overall action or to review the passes individually. If you want to force the user to review individual passes visually before adding them, use an instance of [PKAddPassesViewController](../pkaddpassesviewcontroller.md).

## See Also

### Adding passes

- [canAddSecureElementPassWithPrimaryAccountIdentifier:](canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [canAddFelicaPass](canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.
