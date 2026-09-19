> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkidentitydocumentdescriptor/intenttostore(element:)

# intentToStore(element:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Gets the intent to store for an identity element you specify.

## Declaration

```swift
func intentToStore(element: PKIdentityElement) -> PKIdentityIntentToStore?
```

## Parameters

- `element`: The element to inspect.

<a id="return-value"></a>

## Return Value

A [PKIdentityIntentToStore](../pkidentityintenttostore.md) for the element, if available.

# intentToStoreForElement: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Gets the intent to store for an identity element you specify.

## Declaration

```objectivec
- (PKIdentityIntentToStore *) intentToStoreForElement:(PKIdentityElement *) element;
```

## Parameters

- `element`: The element to inspect.

<a id="return-value"></a>

## Return Value

A [PKIdentityIntentToStore](../pkidentityintenttostore.md) for the element, if available.
