> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/recordidentifier](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/recordidentifier)

# recordIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A string used to correlate this identity to a record in your app’s own database.

## Declaration

```swift
var recordIdentifier: String? { get }
```

## See Also

### Distinguishing identities

- [credentialID](credentialid.md): The credential identifier for this passkey credential identity.

# recordIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A string used to correlate this identity to a record in your app’s own database.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * recordIdentifier;
```

## See Also

### Distinguishing identities

- [credentialID](credentialid.md): The credential identifier for this passkey credential identity.
