> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagetransferfunction/init(c0:c1:c2:c3:gamma:cutoff:c4:c5:)](https://developer.apple.com/documentation/accelerate/vimagetransferfunction/init(c0:c1:c2:c3:gamma:cutoff:c4:c5:))

# init(c0:c1:c2:c3:gamma:cutoff:c4:c5:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a structure that represents a transfer function to convert from linear to nonlinear RGB.

## Declaration

```swift
init(c0: CGFloat, c1: CGFloat, c2: CGFloat, c3: CGFloat, gamma: CGFloat, cutoff: CGFloat, c4: CGFloat, c5: CGFloat)
```

## Parameters

- `c0`: The `c0` value in the transfer function.
- `c1`: The `c1` value in the transfer function.
- `c2`: The `c2` value in the transfer function.
- `c3`: The `c3` value in the transfer function.
- `gamma`: The `gamma` value in the transfer function.
- `cutoff`: The `cutoff` value in the transfer function.
- `c4`: The `c4` value in the transfer function.
- `c5`: The `c5` value in the transfer function.

<a id="return-value"></a>

## Return Value

A new structure that represents a transfer function.

<a id="Discussion"></a>

## Discussion

Listing 1.

```objc
if (R >= cutoff) {
    R' = c0 * pow( c1 * R + c2, gamma ) + c3
} 
else {
    R' = c4 * R + c5                             
}
```

## See Also

### Initializers

- [init()](init%28%29.md): Creates an empty transfer function structure.
