> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/index](https://developer.apple.com/documentation/metal/mtlargument/index)

# index (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The index in the argument table that corresponds to the function argument.

## Declaration

```swift
var index: Int { get }
```

<a id="discussion"></a>

## Discussion

A command encoder ([MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) or [MTLRenderCommandEncoder](../mtlrendercommandencoder.md)) specifies the index in the corresponding argument table. For example, an app can call the [setTexture(\_:index:)](../mtlcomputecommandencoder/settexture%28__index_%29.md) method of [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) to specify an index in the texture argument table for an [MTLTexture](../mtltexture.md) instance that is used as an argument of a compute function.

## See Also

### Describing the argument

- [name](name.md): Deprecated. The name of the argument.
- [isActive](isactive.md): Deprecated. A Boolean that indicates whether the compiled function uses the argument.
- [type](type.md): Deprecated. The argument’s resource type.
- [access](access.md): Deprecated. The argument’s read and/or write access.

# index (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The index in the argument table that corresponds to the function argument.

## Declaration

```objectivec
@property (readonly) NSUInteger index;
```

<a id="discussion"></a>

## Discussion

A command encoder ([MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) or [MTLRenderCommandEncoder](../mtlrendercommandencoder.md)) specifies the index in the corresponding argument table. For example, an app can call the [setTexture:atIndex:](../mtlcomputecommandencoder/settexture%28__index_%29.md) method of [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) to specify an index in the texture argument table for an [MTLTexture](../mtltexture.md) instance that is used as an argument of a compute function.

## See Also

### Describing the argument

- [name](name.md): Deprecated. The name of the argument.
- [active](isactive.md): Deprecated. A Boolean that indicates whether the compiled function uses the argument.
- [type](type.md): Deprecated. The argument’s resource type.
- [access](access.md): Deprecated. The argument’s read and/or write access.
