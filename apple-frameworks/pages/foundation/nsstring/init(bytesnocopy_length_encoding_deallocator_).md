> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(bytesnocopy:length:encoding:deallocator:)](https://developer.apple.com/documentation/foundation/nsstring/init(bytesnocopy:length:encoding:deallocator:))

# init(bytesNoCopy:length:encoding:deallocator:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
convenience init?(bytesNoCopy bytes: UnsafeMutableRawPointer, length len: Int, encoding: UInt, deallocator: ((UnsafeMutableRawPointer, Int) -> Void)? = nil)
```

# initWithBytesNoCopy:length:encoding:deallocator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
- (instancetype) initWithBytesNoCopy:(void *) bytes length:(NSUInteger) len encoding:(NSStringEncoding) encoding deallocator:(void (^)(void *, NSUInteger )) deallocator;
```
