> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/type](https://developer.apple.com/documentation/metal/mtlargument/type)

# type (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The argument’s resource type.

## Declaration

```swift
var type: MTLArgumentType { get }
```

<a id="discussion"></a>

## Discussion

This property indicates which type of resource is used (buffer, texture, sampler, or threadgroup memory) in the shading language code. For information on possible values, see [MTLArgumentType](../mtlargumenttype.md).

## See Also

### Describing the argument

- [name](name.md): Deprecated. The name of the argument.
- [isActive](isactive.md): Deprecated. A Boolean that indicates whether the compiled function uses the argument.
- [index](index.md): Deprecated. The index in the argument table that corresponds to the function argument.
- [access](access.md): Deprecated. The argument’s read and/or write access.

# type (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The argument’s resource type.

## Declaration

```objectivec
@property (readonly) MTLArgumentType type;
```

<a id="discussion"></a>

## Discussion

This property indicates which type of resource is used (buffer, texture, sampler, or threadgroup memory) in the shading language code. For information on possible values, see [MTLArgumentType](../mtlargumenttype.md).

## See Also

### Describing the argument

- [name](name.md): Deprecated. The name of the argument.
- [active](isactive.md): Deprecated. A Boolean that indicates whether the compiled function uses the argument.
- [index](index.md): Deprecated. The index in the argument table that corresponds to the function argument.
- [access](access.md): Deprecated. The argument’s read and/or write access.
