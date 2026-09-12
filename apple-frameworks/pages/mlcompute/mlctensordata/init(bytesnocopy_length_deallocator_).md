> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordata/init(bytesnocopy:length:deallocator:)](https://developer.apple.com/documentation/mlcompute/mlctensordata/init(bytesnocopy:length:deallocator:))

# init(bytesNoCopy:length:deallocator:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.

## Declaration

```swift
convenience init(bytesNoCopy bytes: UnsafeMutableRawPointer, length: Int, deallocator: @escaping (UnsafeMutableRawPointer, Int) -> Void)
```

## Parameters

- `bytes`: A buffer that contains data.
- `length`: The number of bytes you want to reference from `bytes`. This number must not exceed the length of `bytes`.
- `deallocator`: A callback to invoke after the system deallocates the object instance.

<a id="return-value"></a>

## Return Value

A new `MLCTensorData` instance.

## See Also

### Creating Tensor Data

- [init(bytesNoCopy:length:)](init%28bytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of data and length of bytes you specify.
- [init(immutableBytesNoCopy:length:)](init%28immutablebytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.

# dataWithBytesNoCopy:length:deallocator: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.

## Declaration

```objectivec
+ (instancetype) dataWithBytesNoCopy:(void *) bytes length:(NSUInteger) length deallocator:(void (^)(void *bytes, NSUInteger length)) deallocator;
```

## Parameters

- `bytes`: A buffer that contains data.
- `length`: The number of bytes you want to reference from `bytes`. This number must not exceed the length of `bytes`.
- `deallocator`: A callback to invoke after the system deallocates the object instance.

<a id="return-value"></a>

## Return Value

A new `MLCTensorData` instance.

## See Also

### Creating Tensor Data

- [dataWithBytesNoCopy:length:](init%28bytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of data and length of bytes you specify.
- [dataWithImmutableBytesNoCopy:length:](init%28immutablebytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.
