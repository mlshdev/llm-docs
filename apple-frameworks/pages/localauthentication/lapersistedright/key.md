> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/lapersistedright/key

# key (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The private key that’s persisted by the right.

## Declaration

```swift
var key: LAPrivateKey { get }
```

## See Also

### Accessing persistent data

- [secret](secret.md): The data kept secret by the right.

# key (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The private key that’s persisted by the right.

## Declaration

```objectivec
@property (nonatomic, readonly) LAPrivateKey * key;
```

## See Also

### Accessing persistent data

- [secret](secret.md): The data kept secret by the right.
