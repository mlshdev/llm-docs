> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/relyingpartyidentifier](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/relyingpartyidentifier)

# relyingPartyIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A string that identifies this identity’s relying party.

## Declaration

```swift
var relyingPartyIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

A passkey credential identity reports its `relyingPartyIdentifier` value as its [serviceIdentifier](../ascredentialidentity/serviceidentifier.md).

# relyingPartyIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A string that identifies this identity’s relying party.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * relyingPartyIdentifier;
```

<a id="Discussion"></a>

## Discussion

A passkey credential identity reports its `relyingPartyIdentifier` value as its [serviceIdentifier](../ascredentialidentity/serviceidentifier.md).
