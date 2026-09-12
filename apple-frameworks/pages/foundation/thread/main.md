> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/main](https://developer.apple.com/documentation/foundation/thread/main)

# main (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSThread` object representing the main thread.

## Declaration

```swift
class var main: Thread { get }
```

<a id="return-value"></a>

## Return Value

The `NSThread` object representing the main thread.

## See Also

### Working with the Main Thread

- [isMainThread](ismainthread-swift.type.property.md): Returns a Boolean value that indicates whether the current thread is the main thread.
- [isMainThread](ismainthread-swift.property.md): A Boolean value that indicates whether the receiver is the main thread.

# mainThread (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSThread` object representing the main thread.

## Declaration

```objectivec
@property (class, strong, readonly) NSThread * mainThread;
```

<a id="return-value"></a>

## Return Value

The `NSThread` object representing the main thread.

## See Also

### Working with the Main Thread

- [isMainThread](ismainthread-swift.type.property.md): Returns a Boolean value that indicates whether the current thread is the main thread.
- [isMainThread](ismainthread-swift.property.md): A Boolean value that indicates whether the receiver is the main thread.
