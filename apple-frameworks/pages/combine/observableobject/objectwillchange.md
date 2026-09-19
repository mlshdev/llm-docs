> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/observableobject/objectwillchange

# objectWillChange

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that emits before the object has changed.

## Declaration

```swift
var objectWillChange: Self.ObjectWillChangePublisher { get }
```

## Default Implementations

### ObservableObject Implementations

- [objectWillChange](objectwillchange-5gopl.md): Conforms when `ObjectWillChangePublisher` is `ObservableObjectPublisher`.

## See Also

### Publishing changes

- [ObjectWillChangePublisher](objectwillchangepublisher.md): The type of publisher that emits before the object has changed.
