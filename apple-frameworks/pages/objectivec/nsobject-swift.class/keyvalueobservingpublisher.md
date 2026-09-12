> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/keyvalueobservingpublisher](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/keyvalueobservingpublisher)

# NSObject.KeyValueObservingPublisher

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A Combine publisher that produces a new element whenever the observed value changes.

## Declaration

```swift
struct KeyValueObservingPublisher<Subject, Value> where Subject : NSObject
```

<a id="overview"></a>

## Overview

Use this publisher to integrate a property that’s compliant with key-value observing into a Combine publishing chain. You can create a publisher of this type with the [NSObject](../nsobject-swift.class.md) instance method `publisher(for:options:)`, passing in the key path and a set of [NSKeyValueObservingOptions](../../foundation/nskeyvalueobservingoptions.md).

## Topics

### Creating a KVO Publisher

- [init(object:keyPath:options:)](keyvalueobservingpublisher/init%28object_keypath_options_%29.md): Creates a key-value observing publisher for the given combination of object and key path, using publishing behavior options you provide.

### Inspecting KVO Publisher Properties

- [object](keyvalueobservingpublisher/object.md): The object that contains the property to publish.
- [keyPath](keyvalueobservingpublisher/keypath.md): The key path, relative to the object receiving this message, of the property to publish.
- [options](keyvalueobservingpublisher/options.md): Options that determine which elements the publisher produces.

### Instance Methods

- [didChange()](keyvalueobservingpublisher/didchange%28%29.md): Conforms when `Subject` inherits `NSObject`. Returns a publisher that emits values when a KVO-compliant property changes.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Publisher](../../combine/publisher.md)
