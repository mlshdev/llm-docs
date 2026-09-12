> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/seek(to:completion:)](https://developer.apple.com/documentation/phase/phasesoundevent/seek(to:completion:))

# seek(to:completion:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Advances the sound event’s playback position to a specific time.

## Declaration

```swift
func seek(to time: Double, completion handler: (@Sendable (PHASESoundEvent.SeekHandlerReason) -> Void)? = nil)
```

```swift
func seek(to time: Double) async -> PHASESoundEvent.SeekHandlerReason
```

## Parameters

- `time`: The playback position to advance to. The framework scales this value by [unitsPerSecond](../phaseengine/unitspersecond.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func seek(to time: Double) async -> PHASESoundEvent.SeekHandlerReason
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Seeking a Time

- [PHASESoundEvent.SeekHandlerReason](seekhandlerreason.md): Indicates the status after a sound event changes its playback position.

# seekToTime:completion: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Advances the sound event’s playback position to a specific time.

## Declaration

```objectivec
- (void) seekToTime:(double) time completion:(void (^)(PHASESoundEventSeekHandlerReason reason)) handler;
```

## Parameters

- `time`: The playback position to advance to. The framework scales this value by [unitsPerSecond](../phaseengine/unitspersecond.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func seek(to time: Double) async -> PHASESoundEvent.SeekHandlerReason
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Seeking a Time

- [PHASESoundEventSeekHandlerReason](seekhandlerreason.md): Indicates the status after a sound event changes its playback position.
