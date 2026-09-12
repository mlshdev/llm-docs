> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/getvalue(_:size:)](https://developer.apple.com/documentation/foundation/nsvalue/getvalue(_:size:))

# getValue(\_:size:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Copies the value into the specified buffer.

## Declaration

```swift
func getValue(_ value: UnsafeMutableRawPointer, size: Int)
```

## Parameters

- `value`: A buffer into which to copy the value. The buffer must be large enough to hold the value.
- `size`: The number of bytes to copy.

# getValue:size: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Copies the value into the specified buffer.

## Declaration

```objectivec
- (void) getValue:(void *) value size:(NSUInteger) size;
```

## Parameters

- `value`: A buffer into which to copy the value. The buffer must be large enough to hold the value.
- `size`: The number of bytes to copy.
