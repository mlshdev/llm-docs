> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(cgcontext:options:)-6p78w](https://developer.apple.com/documentation/coreimage/cicontext/init(cgcontext:options:)-6p78w)

# init(cgContext:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Image context from a Quartz context, using the specified options.

## Declaration

```swift
init(cgContext cgctx: CGContext, options: [CIContextOption : Any]? = nil)
```

## Parameters

- `cgctx`: A Quartz graphics context.
- `options`: A dictionary that contains color space information. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.

<a id="Discussion"></a>

## Discussion

After calling this method, Core Image draws content to the specified Quartz graphics context.

When you create a [CIContext](../cicontext.md) object using a Quartz graphics context, any transformations that are already set on the Quartz graphics context affect drawing to that context.

> **Note**

>  To obtain a Core Image context for the current AppKit drawing context in macOS, use the [NSGraphicsContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext) [ciContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext/cicontext) property.

# contextWithCGContext:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Image context from a Quartz context, using the specified options.

## Declaration

```objectivec
+ (CIContext *) contextWithCGContext:(CGContextRef) cgctx options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `cgctx`: A Quartz graphics context.
- `options`: A dictionary that contains color space information. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.

<a id="Discussion"></a>

## Discussion

After calling this method, Core Image draws content to the specified Quartz graphics context.

When you create a [CIContext](../cicontext.md) object using a Quartz graphics context, any transformations that are already set on the Quartz graphics context affect drawing to that context.

> **Note**

>  To obtain a Core Image context for the current AppKit drawing context in macOS, use the [NSGraphicsContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext) [CIContext](https://developer.apple.com/documentation/appkit/nsgraphicscontext/cicontext) property.
