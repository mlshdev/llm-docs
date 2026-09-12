> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendoperation/add](https://developer.apple.com/documentation/metal/mtlblendoperation/add)

# MTLBlendOperation.add (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Add portions of both source and destination pixel values.

## Declaration

```swift
case add
```

<a id="discussion"></a>

## Discussion

`RGB = Source.rgb * SBF + Dest.rgb * DBF`

`A = Source.a * SBF + Dest.a * DBF`

## See Also

### Blend operations

- [MTLBlendOperation.subtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperation.reverseSubtract](reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperation.min](min.md): Minimum of the source and destination pixel values.
- [MTLBlendOperation.max](max.md): Maximum of the source and destination pixel values.

# MTLBlendOperationAdd (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Add portions of both source and destination pixel values.

## Declaration

```objectivec
MTLBlendOperationAdd
```

<a id="discussion"></a>

## Discussion

`RGB = Source.rgb * SBF + Dest.rgb * DBF`

`A = Source.a * SBF + Dest.a * DBF`

## See Also

### Blend operations

- [MTLBlendOperationSubtract](subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperationReverseSubtract](reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperationMin](min.md): Minimum of the source and destination pixel values.
- [MTLBlendOperationMax](max.md): Maximum of the source and destination pixel values.
