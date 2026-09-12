> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendfactor/unspecialized](https://developer.apple.com/documentation/metal/mtlblendfactor/unspecialized)

# MTLBlendFactor.unspecialized (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defers assigning the blend factor.

## Declaration

```swift
case unspecialized
```

<a id="discussion"></a>

## Discussion

Until you specialize this value in the pipeline state, it:

- behaves as `MTLBlendFactorOne` for `sourceRGBBlendFactor` and `sourceAlphaBlendFactor`
- behaves as `MTLBlendFactorZero` for `destinationRGBBlendFactor` and `destinationAlphaBlendFactor`

# MTLBlendFactorUnspecialized (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defers assigning the blend factor.

## Declaration

```objectivec
MTLBlendFactorUnspecialized
```

<a id="discussion"></a>

## Discussion

Until you specialize this value in the pipeline state, it:

- behaves as `MTLBlendFactorOne` for `sourceRGBBlendFactor` and `sourceAlphaBlendFactor`
- behaves as `MTLBlendFactorZero` for `destinationRGBBlendFactor` and `destinationAlphaBlendFactor`
