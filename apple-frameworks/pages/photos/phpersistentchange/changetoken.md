> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phpersistentchange/changetoken

# changeToken (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An opaque object that represents the state of Photos library.

## Declaration

```swift
var changeToken: PHPersistentChangeToken { get }
```

## See Also

### Getting the Change Token

- [PHPersistentChangeToken](../phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

# changeToken (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An opaque object that represents the state of Photos library.

## Declaration

```objectivec
@property (nonatomic, readonly) PHPersistentChangeToken * changeToken;
```

## See Also

### Getting the Change Token

- [PHPersistentChangeToken](../phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.
