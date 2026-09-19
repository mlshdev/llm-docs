> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainitem/init(objectid:)

# init(objectID:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token keychain item with the specified object ID.

## Declaration

```swift
init(objectID: TKToken.ObjectID)
```

## Parameters

- `objectID`: The object ID.

<a id="return-value"></a>

## Return Value

A new keychain item.

# initWithObjectID: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token keychain item with the specified object ID.

## Declaration

```objectivec
- (instancetype) initWithObjectID:(TKTokenObjectID) objectID;
```

## Parameters

- `objectID`: The object ID.

<a id="return-value"></a>

## Return Value

A new keychain item.
