> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph/init(graphobjects:)](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph/init(graphobjects:))

# init(graphObjects:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an inference graph with the layers from the graph objects you specify.

## Declaration

```swift
convenience init(graphObjects: [MLCGraph])
```

## Parameters

- `graphObjects`: The graph objects whose layers you add to the inference graph.

# graphWithGraphObjects: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an inference graph with the layers from the graph objects you specify.

## Declaration

```objectivec
+ (instancetype) graphWithGraphObjects:(NSArray<MLCGraph *> *) graphObjects;
```

## Parameters

- `graphObjects`: The graph objects whose layers you add to the inference graph.
