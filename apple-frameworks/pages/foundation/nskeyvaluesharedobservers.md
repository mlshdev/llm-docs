> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluesharedobservers](https://developer.apple.com/documentation/foundation/nskeyvaluesharedobservers)

# NSKeyValueSharedObservers (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection of key-value observations which may be registered with multiple observable objects

## Declaration

```swift
class NSKeyValueSharedObservers
```

## Topics

### Initializers

- [init(observableClass:)](nskeyvaluesharedobservers/init%28observableclass_%29.md): A new collection of observables for an observable object of the given class

### Instance Methods

- [addSharedObserver(\_:forKey:options:context:)](nskeyvaluesharedobservers/addsharedobserver%28__forkey_options_context_%29.md): Add a new observer to the collection.
- [snapshot()](nskeyvaluesharedobservers/snapshot%28%29.md): A momentary snapshot of all observers added to the collection thus far, that can be assigned to an observable using `-[NSObject setSharedObservers:]`

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

## See Also

### Classes

- [NSKeyValueObservation](nskeyvalueobservation.md)
- [NSKeyValueSharedObserversSnapshot](nskeyvaluesharedobserverssnapshot.md): A collection of key-value observations which may be registered with multiple observable objects. Create using `-[NSKeyValueSharedObservers snapshot]`

# NSKeyValueSharedObservers (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection of key-value observations which may be registered with multiple observable objects

## Declaration

```objectivec
@interface NSKeyValueSharedObservers : NSObject
```

## Topics

### Instance Methods

- [addSharedObserver:forKey:options:context:](nskeyvaluesharedobservers/addsharedobserver%28__forkey_options_context_%29.md): Add a new observer to the collection.
- [initWithObservableClass:](nskeyvaluesharedobservers/init%28observableclass_%29.md): A new collection of observables for an observable object of the given class
- [snapshot](nskeyvaluesharedobservers/snapshot%28%29.md): A momentary snapshot of all observers added to the collection thus far, that can be assigned to an observable using `-[NSObject setSharedObservers:]`

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Classes

- [NSConstantString](nsconstantstring.md)
- [NSKeyValueSharedObserversSnapshot](nskeyvaluesharedobserverssnapshot.md): A collection of key-value observations which may be registered with multiple observable objects. Create using `-[NSKeyValueSharedObservers snapshot]`
- [NSLocalizedNumberFormatRule](nslocalizednumberformatrule.md)
- [NSSimpleCString](nssimplecstring.md)
