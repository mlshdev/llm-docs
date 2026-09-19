> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/densevector_double/init(count:data:)

# init(count:data:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new vector of double-precision values.

## Declaration

```swift
init(count: Int32, data: UnsafeMutablePointer<Double>)
```

## Parameters

- `count`: The number of items in the vector.
- `data`: The array of double-precision, floating-point values.
