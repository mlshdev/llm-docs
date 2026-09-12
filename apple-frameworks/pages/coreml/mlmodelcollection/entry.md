> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/entry](https://developer.apple.com/documentation/coreml/mlmodelcollection/entry)

# MLModelCollection.Entry (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

A model and its identifier within a model collection.

> Use [Background Assets](../../backgroundassets.md) or [URLSession](../../foundation/urlsession.md) instead.

## Declaration

```swift
class Entry
```

## Topics

### Identifying a model

- [modelIdentifier](entry/modelidentifier.md): Deprecated. The name of the model, which is unique to the collection.

### Locating a compiled model file

- [modelURL](entry/modelurl.md): Deprecated. The compiled model’s location on the device’s file system.

### Comparing model collection entries

- [isEqual(to:)](entry/isequal%28to_%29.md): Deprecated. Returns a Boolean value that indicates whether the two entries are equal.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Retreiving models from a collection

- [entries](entries.md): Deprecated. A dictionary of model entries keyed to the models’ identifiers.

# MLModelCollectionEntry (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

A model and its identifier within a model collection.

> Use [Background Assets](../../backgroundassets.md) or [NSURLSession](../../foundation/urlsession.md) instead.

## Declaration

```objectivec
@interface MLModelCollectionEntry : NSObject
```

## Topics

### Identifying a model

- [modelIdentifier](entry/modelidentifier.md): Deprecated. The name of the model, which is unique to the collection.

### Locating a compiled model file

- [modelURL](entry/modelurl.md): Deprecated. The compiled model’s location on the device’s file system.

### Comparing model collection entries

- [isEqualToModelCollectionEntry:](entry/isequal%28to_%29.md): Deprecated. Returns a Boolean value that indicates whether the two entries are equal.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Retreiving models from a collection

- [entries](entries.md): Deprecated. A dictionary of model entries keyed to the models’ identifiers.
