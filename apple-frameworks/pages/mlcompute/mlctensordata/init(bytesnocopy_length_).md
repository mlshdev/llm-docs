> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordata/init(bytesnocopy:length:)](https://developer.apple.com/documentation/mlcompute/mlctensordata/init(bytesnocopy:length:))

# init(bytesNoCopy:length:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor data instance with the buffer of data and length of bytes you specify.

## Declaration

```swift
convenience init(bytesNoCopy bytes: UnsafeMutableRawPointer, length: Int)
```

## Parameters

- `bytes`: A buffer that contains data.
- `length`: The number of bytes you choose to reference from `bytes`. This number must not exceed the length of `bytes`.

## See Also

### Creating Tensor Data

- [init(bytesNoCopy:length:deallocator:)](init%28bytesnocopy_length_deallocator_%29.md): Deprecated. Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.
- [init(immutableBytesNoCopy:length:)](init%28immutablebytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.

# dataWithBytesNoCopy:length: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor data instance with the buffer of data and length of bytes you specify.

## Declaration

```objectivec
+ (instancetype) dataWithBytesNoCopy:(void *) bytes length:(NSUInteger) length;
```

## Parameters

- `bytes`: A buffer that contains data.
- `length`: The number of bytes you choose to reference from `bytes`. This number must not exceed the length of `bytes`.

## See Also

### Creating Tensor Data

- [dataWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Deprecated. Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.
- [dataWithImmutableBytesNoCopy:length:](init%28immutablebytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.
