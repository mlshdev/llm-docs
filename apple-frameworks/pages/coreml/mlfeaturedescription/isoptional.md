> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturedescription/isoptional](https://developer.apple.com/documentation/coreml/mlfeaturedescription/isoptional)

# isOptional (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether this feature is optional.

## Declaration

```swift
var isOptional: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Optional values can be `nil`, for models that have inputs related to features being present or not.

## See Also

### Inspecting a feature

- [name](name.md): The name of this feature.
- [type](type.md): The type of this feature.
- [MLFeatureType](../mlfeaturetype.md): The possible types for feature values, input features, and output features.

# optional (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether this feature is optional.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isOptional) BOOL optional;
```

<a id="Discussion"></a>

## Discussion

Optional values can be `nil`, for models that have inputs related to features being present or not.

## See Also

### Inspecting a feature

- [name](name.md): The name of this feature.
- [type](type.md): The type of this feature.
- [MLFeatureType](../mlfeaturetype.md): The possible types for feature values, input features, and output features.
