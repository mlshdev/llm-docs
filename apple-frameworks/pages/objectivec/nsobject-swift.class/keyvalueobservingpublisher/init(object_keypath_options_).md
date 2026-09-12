> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/keyvalueobservingpublisher/init(object:keypath:options:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/keyvalueobservingpublisher/init(object:keypath:options:))

# init(object:keyPath:options:)

**Framework:** Objective-C Runtime  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a key-value observing publisher for the given combination of object and key path, using publishing behavior options you provide.

## Declaration

```swift
init(object: Subject, keyPath: KeyPath<Subject, Value>, options: NSKeyValueObservingOptions)
```

## Parameters

- `object`: The object that contains the property to publish.
- `keyPath`: The key path, relative to the object receiving this message, of the property to publish.
- `options`: Options that determine which elements the publisher produces. Set this parameter to `[]` to receive new elements when the observed property changes.

<a id="Discussion"></a>

## Discussion

This publisher produces a new element every time the observed property changes.
