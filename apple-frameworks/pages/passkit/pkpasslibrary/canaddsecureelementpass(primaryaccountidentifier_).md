> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/canaddsecureelementpass(primaryaccountidentifier:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/canaddsecureelementpass(primaryaccountidentifier:))

# canAddSecureElementPass(primaryAccountIdentifier:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.2+

Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.

## Declaration

```swift
func canAddSecureElementPass(primaryAccountIdentifier: String) -> Bool
```

## Parameters

- `primaryAccountIdentifier`: A unique identifer for the underlying primary account number (PAN) for funding transactions. This isn’t the PAN itself.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit can add a secure element pass for the specified account; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Adding a Secure Element pass requires a special entitlement that Apple provides. If the entitlement isn’t present, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding passes

- [canAddFelicaPass()](canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [addPasses(\_:withCompletionHandler:)](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
- [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.

# canAddSecureElementPassWithPrimaryAccountIdentifier: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.2+

Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.

## Declaration

```objectivec
- (BOOL) canAddSecureElementPassWithPrimaryAccountIdentifier:(NSString *) primaryAccountIdentifier;
```

## Parameters

- `primaryAccountIdentifier`: A unique identifer for the underlying primary account number (PAN) for funding transactions. This isn’t the PAN itself.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit can add a secure element pass for the specified account; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Adding a Secure Element pass requires a special entitlement that Apple provides. If the entitlement isn’t present, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding passes

- [canAddFelicaPass](canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [addPasses:withCompletionHandler:](addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
- [PKPassLibraryAddPassesStatus](../pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.
