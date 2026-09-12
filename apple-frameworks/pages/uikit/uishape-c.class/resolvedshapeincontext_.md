> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishape-c.class/resolvedshapeincontext:](https://developer.apple.com/documentation/uikit/uishape-c.class/resolvedshapeincontext:)

# resolvedShapeInContext:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Resolves the shape in the provided context.

## Declaration

```objectivec
- (UIResolvedShape *) resolvedShapeInContext:(UIShapeResolutionContext *) context;
```

## See Also

### Creating a dynamic hover shape

- [shapeWithProvider:](shapewithprovider_.md): Creates a dynamic shape that resolves using the provided resolver closure and resolution context.
- [UIShapeProvider](../uishapeprovider-31jrf.md): An interface for a type that provides a custom shape by resolving it dynamically based on a context.
- [UIShapeResolutionContext](../uishaperesolutioncontext.md): The context for resolving a dynamic shape.
- [UIResolvedShape](../uiresolvedshape.md): A shape that has completely resolved based on a context.
