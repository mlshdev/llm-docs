> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtldrawablepresentedhandler

# MTLDrawablePresentedHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block of code invoked after a drawable is presented.

## Declaration

```swift
typealias MTLDrawablePresentedHandler = @Sendable (any MTLDrawable) -> Void
```

## See Also

### Render pass outputs

- [MTLDrawable](mtldrawable.md): A displayable resource that can be rendered or written to.

# MTLDrawablePresentedHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block of code invoked after a drawable is presented.

## Declaration

```objectivec
typedef void (^)(id<MTLDrawable>) MTLDrawablePresentedHandler;
```

## See Also

### Render pass outputs

- [MTLDrawable](mtldrawable.md): A displayable resource that can be rendered or written to.
