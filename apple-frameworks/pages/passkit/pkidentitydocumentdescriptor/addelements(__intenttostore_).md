> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitydocumentdescriptor/addelements(_:intenttostore:)](https://developer.apple.com/documentation/passkit/pkidentitydocumentdescriptor/addelements(_:intenttostore:))

# addElements(\_:intentToStore:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Adds a list of identity element and defines the way an app, or it’s server, stores the elements.

## Declaration

```swift
func addElements(_ elements: [PKIdentityElement], intentToStore: PKIdentityIntentToStore)
```

## Parameters

- `elements`: A list of identity elements.
- `intentToStore`: An object that defines how long an app or it’s server stores the elements.

## See Also

### Adding an identity element

- [PKIdentityIntentToStore](../pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.

# addElements:withIntentToStore: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Adds a list of identity element and defines the way an app, or it’s server, stores the elements.

## Declaration

```objectivec
- (void) addElements:(NSArray<PKIdentityElement *> *) elements withIntentToStore:(PKIdentityIntentToStore *) intentToStore;
```

## Parameters

- `elements`: A list of identity elements.
- `intentToStore`: An object that defines how long an app or it’s server stores the elements.

## See Also

### Adding an identity element

- [PKIdentityIntentToStore](../pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.
