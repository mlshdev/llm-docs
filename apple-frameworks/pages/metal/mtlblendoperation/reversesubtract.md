> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendoperation/reversesubtract](https://developer.apple.com/documentation/metal/mtlblendoperation/reversesubtract)

# MTLBlendOperation.reverseSubtract (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Subtract a portion of the source values from a portion of the destination pixel values.

## Declaration

```swift
case reverseSubtract
```

<a id="discussion"></a>

## Discussion

`RGB = Dest.rgb * DBF - Source.rgb * SBF`

`A = Dest.a * DBF - Source.a * SBF`

## See Also

### Blend operations

- [MTLBlendOperation.add](add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperation.subtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperation.min](min.md): Minimum of the source and destination pixel values.
- [MTLBlendOperation.max](max.md): Maximum of the source and destination pixel values.

# MTLBlendOperationReverseSubtract (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Subtract a portion of the source values from a portion of the destination pixel values.

## Declaration

```objectivec
MTLBlendOperationReverseSubtract
```

<a id="discussion"></a>

## Discussion

`RGB = Dest.rgb * DBF - Source.rgb * SBF`

`A = Dest.a * DBF - Source.a * SBF`

## See Also

### Blend operations

- [MTLBlendOperationAdd](add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperationSubtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperationMin](min.md): Minimum of the source and destination pixel values.
- [MTLBlendOperationMax](max.md): Maximum of the source and destination pixel values.
