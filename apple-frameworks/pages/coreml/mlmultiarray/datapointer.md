> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmultiarray/datapointer

# dataPointer (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.2) · iPadOS 11.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 4.0+ (deprecated in 27.2)

A pointer to the multiarray’s underlying memory.

> Use getBytesWithHandler or getMutableBytesWithHandler instead. For Swift, use withUnsafeBytes or withUnsafeMutableBytes.

## Declaration

```swift
var dataPointer: UnsafeMutableRawPointer { get }
```

## See Also

### Accessing a multiarray’s elements

- [subscript(\_:)](subscript%28__%29.md)
- [pixelBuffer](pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.

# dataPointer (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.2) · iPadOS 11.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 4.0+ (deprecated in 27.2)

A pointer to the multiarray’s underlying memory.

> Use getBytesWithHandler or getMutableBytesWithHandler instead. For Swift, use withUnsafeBytes or withUnsafeMutableBytes.

## Declaration

```objectivec
@property (nonatomic, readonly) void * dataPointer;
```

## See Also

### Accessing a multiarray’s elements

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Assigns a number to the multiarray’s element at the location that the linear offset defines.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Assigns a number to the multiarray’s element at the location that the number array defines.
- [getBytesWithHandler:](getbyteswithhandler_.md): Get the underlying buffer pointer to read.
- [getMutableBytesWithHandler:](getmutablebyteswithhandler_.md): Get the underlying buffer pointer to mutate.
- [pixelBuffer](pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
