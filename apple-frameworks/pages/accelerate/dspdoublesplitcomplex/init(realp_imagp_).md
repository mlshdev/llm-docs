> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dspdoublesplitcomplex/init(realp:imagp:)](https://developer.apple.com/documentation/accelerate/dspdoublesplitcomplex/init(realp:imagp:))

# init(realp:imagp:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new split complex structure.

## Declaration

```swift
init(realp: UnsafeMutablePointer<Double>, imagp: UnsafeMutablePointer<Double>)
```

## Parameters

- `realp`: A pointer to an array containing the real parts of the complex numbers.
- `imagp`: A pointer to an array containing the imaginary parts of the complex numbers.
