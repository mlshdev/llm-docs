> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/keyvalueobservingpublisher/keypath

# keyPath

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The key path, relative to the object receiving this message, of the property to publish.

## Declaration

```swift
let keyPath: KeyPath<Subject, Value>
```

## See Also

### Inspecting KVO Publisher Properties

- [object](object.md): The object that contains the property to publish.
- [options](options.md): Options that determine which elements the publisher produces.
