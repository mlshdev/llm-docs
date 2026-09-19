> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/keyvalueobservingpublisher/didchange()

# didChange()

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a publisher that emits values when a KVO-compliant property changes.

## Declaration

```swift
func didChange() -> Publishers.Map<NSObject.KeyValueObservingPublisher<Subject, Value>, Void>
```

<a id="return-value"></a>

## Return Value

A key-value observing publisher.
