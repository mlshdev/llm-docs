> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowleveldeformationcontext/init(_:)

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a context targeting the specified Metal device.

## Declaration

```swift
init(_ device: any MTLDevice) throws
```

## Parameters

- `device`: The Metal device to target.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the context cannot be initialized for the given device.
