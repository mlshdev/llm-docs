> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/canaddfelicapass()](https://developer.apple.com/documentation/passkit/pkpasslibrary/canaddfelicapass())

# canAddFelicaPass() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.1+

Returns a Boolean value that indicates whether the library can add FeliCa™ passes.

## Declaration

```swift
func canAddFelicaPass() -> Bool
```

<a id="Discussion"></a>

## Discussion

By default, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding passes

- [canAddSecureElementPass(primaryAccountIdentifier:)](canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [addPasses(\_:withCompletionHandler:)](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
- [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.

# canAddFelicaPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.1+

Returns a Boolean value that indicates whether the library can add FeliCa™ passes.

## Declaration

```objectivec
- (BOOL) canAddFelicaPass;
```

<a id="Discussion"></a>

## Discussion

By default, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding passes

- [canAddSecureElementPassWithPrimaryAccountIdentifier:](canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [addPasses:withCompletionHandler:](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
- [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.
