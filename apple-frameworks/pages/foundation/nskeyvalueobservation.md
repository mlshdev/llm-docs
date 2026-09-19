> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nskeyvalueobservation

# NSKeyValueObservation

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
@objc(_NSKeyValueObservation) class NSKeyValueObservation
```

## Topics

### Instance Methods

- [invalidate()](nskeyvalueobservation/invalidate%28%29.md): invalidate() will be called automatically when an NSKeyValueObservation is deinited

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [NSKeyValueSharedObservers](nskeyvaluesharedobservers.md): A collection of key-value observations which may be registered with multiple observable objects
- [NSKeyValueSharedObserversSnapshot](nskeyvaluesharedobserverssnapshot.md): A collection of key-value observations which may be registered with multiple observable objects. Create using `-[NSKeyValueSharedObservers snapshot]`
