> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/densevector_float/init(count:data:)

# init(count:data:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new vector of single-precision values.

## Declaration

```swift
init(count: Int32, data: UnsafeMutablePointer<Float>)
```

## Parameters

- `count`: The number of items in the vector.
- `data`: The array of single-precision, floating-point values.
