> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychaincontents/fill(with:)

# fill(with:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Fills the keychain with the specified items.

## Declaration

```swift
func fill(with items: [TKTokenKeychainItem])
```

## Parameters

- `items`: The items to be added to the keychain.

<a id="Discussion"></a>

## Discussion

All existing items for the token are first removed from the keychain before filling the keychain with `items`.

# fillWithItems: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Fills the keychain with the specified items.

## Declaration

```objectivec
- (void) fillWithItems:(NSArray<TKTokenKeychainItem *> *) items;
```

## Parameters

- `items`: The items to be added to the keychain.

<a id="Discussion"></a>

## Discussion

All existing items for the token are first removed from the keychain before filling the keychain with `items`.
