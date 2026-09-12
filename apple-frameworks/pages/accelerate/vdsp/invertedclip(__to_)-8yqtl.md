> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/invertedclip(_:to:)-8yqtl](https://developer.apple.com/documentation/accelerate/vdsp/invertedclip(_:to:)-8yqtl)

# invertedClip(\_:to:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a double-precision vector that’s inverted-clipped to the specified range.

## Declaration

```swift
static func invertedClip<U>(_ vector: U, to bounds: ClosedRange<Double>) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## See Also

### Clipping Operations

- [clip(\_:to:)](clip%28__to_%29-8jsic.md): Returns the elements of a double-precision vector clipped to the specified range.
- [clip(\_:to:)](clip%28__to_%29-20gz4.md): Returns the elements of a single-precision vector clipped to the specified range.
- [clip(\_:to:result:)](clip%28__to_result_%29-3lbii.md): Calculates the elements of a double-precision vector clipped to the specified range.
- [clip(\_:to:result:)](clip%28__to_result_%29-84zw9.md): Calculates the elements of a single-precision vector clipped to the specified range.
- [invertedClip(\_:to:)](invertedclip%28__to_%29-4pkxw.md): Returns a single-precision vector that’s inverted-clipped to the specified range.
- [invertedClip(\_:to:result:)](invertedclip%28__to_result_%29-5ioal.md): Calculates a double-precision vector that’s inverted-clipped to the specified range.
- [invertedClip(\_:to:result:)](invertedclip%28__to_result_%29-3q12m.md): Calculates a single-precision vector that’s inverted-clipped to the specified range.
