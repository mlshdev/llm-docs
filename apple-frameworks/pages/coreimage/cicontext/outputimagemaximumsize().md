> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/outputimagemaximumsize()](https://developer.apple.com/documentation/coreimage/cicontext/outputimagemaximumsize())

# outputImageMaximumSize() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the maximum size allowed for any image created by the context.

## Declaration

```swift
func outputImageMaximumSize() -> CGSize
```

<a id="Discussion"></a>

## Discussion

Some contexts limit the maximum size of an image that can be created by them. For example, the maximum size might reflect a limitation in the underlying graphics hardware.

## See Also

### Determining the Allowed Extents for Images Used by a Context

- [inputImageMaximumSize()](inputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image rendered into the context.

# outputImageMaximumSize (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the maximum size allowed for any image created by the context.

## Declaration

```objectivec
- (CGSize) outputImageMaximumSize;
```

<a id="Discussion"></a>

## Discussion

Some contexts limit the maximum size of an image that can be created by them. For example, the maximum size might reflect a limitation in the underlying graphics hardware.

## See Also

### Determining the Allowed Extents for Images Used by a Context

- [inputImageMaximumSize](inputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image rendered into the context.
