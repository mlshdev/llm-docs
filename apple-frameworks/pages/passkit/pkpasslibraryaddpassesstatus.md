> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibraryaddpassesstatus](https://developer.apple.com/documentation/passkit/pkpasslibraryaddpassesstatus)

# PKPassLibraryAddPassesStatus (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 3.0+

Statuses that PassKit uses when it adds passes to the pass library.

## Declaration

```swift
enum PKPassLibraryAddPassesStatus
```

## Topics

### Constants

- [PKPassLibraryAddPassesStatus.didAddPasses](pkpasslibraryaddpassesstatus/didaddpasses.md): A status that occurs when the user successfully adds one or more passes.
- [PKPassLibraryAddPassesStatus.shouldReviewPasses](pkpasslibraryaddpassesstatus/shouldreviewpasses.md): A status that occurs when the app prompts the user to review the passes.
- [PKPassLibraryAddPassesStatus.didCancelAddPasses](pkpasslibraryaddpassesstatus/didcanceladdpasses.md): A status that occurs when the user cancels the addition of passes.

### Initializers

- [init(rawValue:)](pkpasslibraryaddpassesstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding passes

- [canAddSecureElementPass(primaryAccountIdentifier:)](pkpasslibrary/canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [canAddFelicaPass()](pkpasslibrary/canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [addPasses(\_:withCompletionHandler:)](pkpasslibrary/addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.

# PKPassLibraryAddPassesStatus (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 3.0+

Statuses that PassKit uses when it adds passes to the pass library.

## Declaration

```objectivec
enum PKPassLibraryAddPassesStatus : NSInteger;
```

## Topics

### Constants

- [PKPassLibraryDidAddPasses](pkpasslibraryaddpassesstatus/didaddpasses.md): A status that occurs when the user successfully adds one or more passes.
- [PKPassLibraryShouldReviewPasses](pkpasslibraryaddpassesstatus/shouldreviewpasses.md): A status that occurs when the app prompts the user to review the passes.
- [PKPassLibraryDidCancelAddPasses](pkpasslibraryaddpassesstatus/didcanceladdpasses.md): A status that occurs when the user cancels the addition of passes.

## See Also

### Adding passes

- [canAddSecureElementPassWithPrimaryAccountIdentifier:](pkpasslibrary/canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [canAddFelicaPass](pkpasslibrary/canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [addPasses:withCompletionHandler:](pkpasslibrary/addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
