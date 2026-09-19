> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialidentity/recordidentifier

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

- [serviceIdentifier](serviceidentifier.md): An identifier that helps the system know with which apps or websites to associate this credential.

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

- [serviceIdentifier](serviceidentifier.md): An identifier that helps the system know with which apps or websites to associate this credential.
