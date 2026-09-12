> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordata/init(immutablebytesnocopy:length:)](https://developer.apple.com/documentation/mlcompute/mlctensordata/init(immutablebytesnocopy:length:))

# init(immutableBytesNoCopy:length:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.

## Declaration

```swift
convenience init(immutableBytesNoCopy bytes: UnsafeRawPointer, length: Int)
```

## Parameters

- `bytes`: A buffer that contains immutable data.
- `length`: The number of bytes you choose to reference from `bytes`. This number must not exceed the length of `bytes`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t mutate the underlying bytes in a tensor data instance you create with this initializer. Doing so may result in unexpected behavior.

## See Also

### Creating Tensor Data

- [init(bytesNoCopy:length:)](init%28bytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of data and length of bytes you specify.
- [init(bytesNoCopy:length:deallocator:)](init%28bytesnocopy_length_deallocator_%29.md): Deprecated. Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.

# dataWithImmutableBytesNoCopy:length: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.

## Declaration

```objectivec
+ (instancetype) dataWithImmutableBytesNoCopy:(const void *) bytes length:(NSUInteger) length;
```

## Parameters

- `bytes`: A buffer that contains immutable data.
- `length`: The number of bytes you choose to reference from `bytes`. This number must not exceed the length of `bytes`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t mutate the underlying bytes in a tensor data instance you create with this initializer. Doing so may result in unexpected behavior.

## See Also

### Creating Tensor Data

- [dataWithBytesNoCopy:length:](init%28bytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of data and length of bytes you specify.
- [dataWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Deprecated. Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.
