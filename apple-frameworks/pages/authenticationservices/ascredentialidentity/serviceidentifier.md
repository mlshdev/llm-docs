> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentity/serviceidentifier](https://developer.apple.com/documentation/authenticationservices/ascredentialidentity/serviceidentifier)

# serviceIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

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
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An identifier that helps the system know with which apps or websites to associate this credential.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ASCredentialServiceIdentifier * serviceIdentifier;
```

## See Also

### Distinguishing identities

- [recordIdentifier](recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
