> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/observableobject/objectwillchangepublisher

# ObjectWillChangePublisher

**Framework:** Combine  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of publisher that emits before the object has changed.

## Declaration

```swift
associatedtype ObjectWillChangePublisher : Publisher = ObservableObjectPublisher where Self.ObjectWillChangePublisher.Failure == Never
```

## See Also

### Publishing changes

- [objectWillChange](objectwillchange.md): A publisher that emits before the object has changed.
