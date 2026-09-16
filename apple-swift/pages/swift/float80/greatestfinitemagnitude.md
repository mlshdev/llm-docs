> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/greatestfinitemagnitude

# greatestFiniteMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** macOS 10.10+

The greatest finite number representable by this type.

## Declaration

```swift
static var greatestFiniteMagnitude: Float80 { get }
```

<a id="discussion"></a>

## Discussion

This value compares greater than or equal to all finite numbers, but less than `infinity`.

This value corresponds to type-specific C macros such as `FLT_MAX` and `DBL_MAX`. The naming of those macros is slightly misleading, because `infinity` is greater than this value.
