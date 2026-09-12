> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishapeprovider-31jrf](https://developer.apple.com/documentation/uikit/uishapeprovider-31jrf)

# UIShapeProvider

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An interface for a type that provides a custom shape by resolving it dynamically based on a context.

## Declaration

```objectivec
@protocol UIShapeProvider <NSObject>
```

## Topics

### Resolving a custom shape

- [resolvedShapeInContext:](uishapeprovider-31jrf/resolvedshapeincontext_.md): Resolves the shape in the provided context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIShape](uishape-c.class.md)

## See Also

### Creating a dynamic hover shape

- [shapeWithProvider:](uishape-c.class/shapewithprovider_.md): Creates a dynamic shape that resolves using the provided resolver closure and resolution context.
- [resolvedShapeInContext:](uishape-c.class/resolvedshapeincontext_.md): Resolves the shape in the provided context.
- [UIShapeResolutionContext](uishaperesolutioncontext.md): The context for resolving a dynamic shape.
- [UIResolvedShape](uiresolvedshape.md): A shape that has completely resolved based on a context.
