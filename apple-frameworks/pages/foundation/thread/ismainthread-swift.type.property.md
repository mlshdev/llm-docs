> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/ismainthread-swift.type.property](https://developer.apple.com/documentation/foundation/thread/ismainthread-swift.type.property)

# isMainThread (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the current thread is the main thread.

## Declaration

```swift
class var isMainThread: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current thread is the main thread, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with the Main Thread

- [isMainThread](ismainthread-swift.property.md): A Boolean value that indicates whether the receiver is the main thread.
- [main](main.md): Returns the `NSThread` object representing the main thread.

# isMainThread (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the current thread is the main thread.

## Declaration

```objectivec
@property (class, readonly) BOOL isMainThread;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current thread is the main thread, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with the Main Thread

- [isMainThread](ismainthread-swift.property.md): A Boolean value that indicates whether the receiver is the main thread.
- [mainThread](main.md): Returns the `NSThread` object representing the main thread.
