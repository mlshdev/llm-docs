> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlupdateprogressevent/init(rawvalue:)

# init(rawValue:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a progress event for the given integer.

## Declaration

```swift
init(rawValue: Int)
```

<a id="Discussion"></a>

## Discussion

You do not use this initializer directly. Get update event types from the type properties, such as [trainingBegin](trainingbegin.md), [miniBatchEnd](minibatchend.md), or [epochEnd](epochend.md).
