> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstencildescriptor/readmask](https://developer.apple.com/documentation/metal/mtlstencildescriptor/readmask)

# readMask (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A bitmask that determines from which bits that stencil comparison tests can read.

## Declaration

```swift
var readMask: UInt32 { get set }
```

<a id="discussion"></a>

## Discussion

The [readMask](readmask.md) bits are used for logical AND operations to both the stored stencil value and the reference value.

The least significant bits of the read mask are used. The default value is all ones. A logical AND operation with the default [readMask](readmask.md) does not change the value.

## See Also

### Related Documentation

- [setStencilReferenceValue(\_:)](../mtlrendercommandencoder/setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.

### Configuring stencil bit mask properties

- [writeMask](writemask.md): A bitmask that determines to which bits that stencil operations can write.

# readMask (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A bitmask that determines from which bits that stencil comparison tests can read.

## Declaration

```objectivec
@property (nonatomic) uint32_t readMask;
```

<a id="discussion"></a>

## Discussion

The [readMask](readmask.md) bits are used for logical AND operations to both the stored stencil value and the reference value.

The least significant bits of the read mask are used. The default value is all ones. A logical AND operation with the default [readMask](readmask.md) does not change the value.

## See Also

### Related Documentation

- [setStencilReferenceValue:](../mtlrendercommandencoder/setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.

### Configuring stencil bit mask properties

- [writeMask](writemask.md): A bitmask that determines to which bits that stencil operations can write.
