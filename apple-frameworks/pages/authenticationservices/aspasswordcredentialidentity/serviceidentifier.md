> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredentialidentity/serviceidentifier](https://developer.apple.com/documentation/authenticationservices/aspasswordcredentialidentity/serviceidentifier)

# serviceIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An identifier that helps the system know with which apps or websites to associate this credential.

## Declaration

```swift
var serviceIdentifier: ASCredentialServiceIdentifier { get }
```

## See Also

### Distinguishing identities

- [recordIdentifier](recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.

# serviceIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An identifier that helps the system know with which apps or websites to associate this credential.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ASCredentialServiceIdentifier * serviceIdentifier;
```

## See Also

### Distinguishing identities

- [recordIdentifier](recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
