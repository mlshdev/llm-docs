> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpoint/greatestfinitemagnitude](https://developer.apple.com/documentation/swift/floatingpoint/greatestfinitemagnitude)

# greatestFiniteMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The greatest finite number representable by this type.

## Declaration

```swift
static var greatestFiniteMagnitude: Self { get }
```

<a id="discussion"></a>

## Discussion

This value compares greater than or equal to all finite numbers, but less than `infinity`.

This value corresponds to type-specific C macros such as `FLT_MAX` and `DBL_MAX`. The naming of those macros is slightly misleading, because `infinity` is greater than this value.
