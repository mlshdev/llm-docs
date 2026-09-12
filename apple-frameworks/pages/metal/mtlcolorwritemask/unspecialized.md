> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcolorwritemask/unspecialized](https://developer.apple.com/documentation/metal/mtlcolorwritemask/unspecialized)

# unspecialized (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defers assigning the color write mask.

## Declaration

```swift
static var unspecialized: MTLColorWriteMask { get }
```

<a id="discussion"></a>

## Discussion

Until you specialize this value in the pipeline state, it behaves as `MTLColorWriteMaskAll`.

# MTLColorWriteMaskUnspecialized (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defers assigning the color write mask.

## Declaration

```objectivec
MTLColorWriteMaskUnspecialized
```

<a id="discussion"></a>

## Discussion

Until you specialize this value in the pipeline state, it behaves as `MTLColorWriteMaskAll`.
