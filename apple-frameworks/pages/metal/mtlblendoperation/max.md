> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendoperation/max](https://developer.apple.com/documentation/metal/mtlblendoperation/max)

# MTLBlendOperation.max (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Maximum of the source and destination pixel values.

## Declaration

```swift
case max
```

<a id="discussion"></a>

## Discussion

`RGB = max(Source.rgb, Dest.rgb)`

`A = max(Source.a, Dest.a)`

## See Also

### Blend operations

- [MTLBlendOperation.add](add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperation.subtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperation.reverseSubtract](reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperation.min](min.md): Minimum of the source and destination pixel values.

# MTLBlendOperationMax (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Maximum of the source and destination pixel values.

## Declaration

```objectivec
MTLBlendOperationMax
```

<a id="discussion"></a>

## Discussion

`RGB = max(Source.rgb, Dest.rgb)`

`A = max(Source.a, Dest.a)`

## See Also

### Blend operations

- [MTLBlendOperationAdd](add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperationSubtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperationReverseSubtract](reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperationMin](min.md): Minimum of the source and destination pixel values.
