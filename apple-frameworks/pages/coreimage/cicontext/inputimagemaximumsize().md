> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/inputimagemaximumsize()](https://developer.apple.com/documentation/coreimage/cicontext/inputimagemaximumsize())

# inputImageMaximumSize() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the maximum size allowed for any image rendered into the context.

## Declaration

```swift
func inputImageMaximumSize() -> CGSize
```

<a id="Discussion"></a>

## Discussion

Some contexts limit the maximum size of an image that can be rendered into them. For example, the maximum size might reflect a limitation in the underlying graphics hardware.

## See Also

### Determining the Allowed Extents for Images Used by a Context

- [outputImageMaximumSize()](outputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image created by the context.

# inputImageMaximumSize (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the maximum size allowed for any image rendered into the context.

## Declaration

```objectivec
- (CGSize) inputImageMaximumSize;
```

<a id="Discussion"></a>

## Discussion

Some contexts limit the maximum size of an image that can be rendered into them. For example, the maximum size might reflect a limitation in the underlying graphics hardware.

## See Also

### Determining the Allowed Extents for Images Used by a Context

- [outputImageMaximumSize](outputimagemaximumsize%28%29.md): Returns the maximum size allowed for any image created by the context.
