> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/isactive](https://developer.apple.com/documentation/metal/mtlargument/isactive)

# isActive (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean that indicates whether the compiled function uses the argument.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

When you create the [MTLFunction](../mtlfunction.md) object, Metal statically determines whether the function uses the argument. If [true](https://developer.apple.com/documentation/swift/true), you need to provide a value for this argument when you encode a command that calls this function. If [false](https://developer.apple.com/documentation/swift/false), the function doesn’t use the argument, and you can ignore it.

## See Also

### Describing the argument

- [name](name.md): Deprecated. The name of the argument.
- [index](index.md): Deprecated. The index in the argument table that corresponds to the function argument.
- [type](type.md): Deprecated. The argument’s resource type.
- [access](access.md): Deprecated. The argument’s read and/or write access.

# active (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean that indicates whether the compiled function uses the argument.

## Declaration

```objectivec
@property (readonly, getter=isActive) BOOL active;
```

<a id="discussion"></a>

## Discussion

When you create the [MTLFunction](../mtlfunction.md) object, Metal statically determines whether the function uses the argument. If [true](https://developer.apple.com/documentation/swift/true), you need to provide a value for this argument when you encode a command that calls this function. If [false](https://developer.apple.com/documentation/swift/false), the function doesn’t use the argument, and you can ignore it.

## See Also

### Describing the argument

- [name](name.md): Deprecated. The name of the argument.
- [index](index.md): Deprecated. The index in the argument table that corresponds to the function argument.
- [type](type.md): Deprecated. The argument’s resource type.
- [access](access.md): Deprecated. The argument’s read and/or write access.
