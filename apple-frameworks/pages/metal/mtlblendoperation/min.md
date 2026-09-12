> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendoperation/min](https://developer.apple.com/documentation/metal/mtlblendoperation/min)

# MTLBlendOperation.min (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Minimum of the source and destination pixel values.

## Declaration

```swift
case min
```

<a id="discussion"></a>

## Discussion

`RGB = min(Source.rgb, Dest.rgb)`

`A = min(Source.a, Dest.a)`

## See Also

### Blend operations

- [MTLBlendOperation.add](add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperation.subtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperation.reverseSubtract](reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperation.max](max.md): Maximum of the source and destination pixel values.

# MTLBlendOperationMin (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Minimum of the source and destination pixel values.

## Declaration

```objectivec
MTLBlendOperationMin
```

<a id="discussion"></a>

## Discussion

`RGB = min(Source.rgb, Dest.rgb)`

`A = min(Source.a, Dest.a)`

## See Also

### Blend operations

- [MTLBlendOperationAdd](add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperationSubtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperationReverseSubtract](reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperationMax](max.md): Maximum of the source and destination pixel values.
