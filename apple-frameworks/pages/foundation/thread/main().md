> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/main()](https://developer.apple.com/documentation/foundation/thread/main())

# main() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main entry point routine for the thread.

## Declaration

```swift
func main()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method takes the target and selector used to initialize the receiver and invokes the selector on the specified target. If you subclass `NSThread`, you can override this method and use it to implement the main body of your thread instead. If you do so, you do not need to invoke `super`.

You should never invoke this method directly. You should always start your thread by invoking the [start()](start%28%29.md) method.

## See Also

### Starting a Thread

- [detachNewThreadSelector(\_:toTarget:with:)](detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.
- [start()](start%28%29.md): Starts the receiver.

# main (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The main entry point routine for the thread.

## Declaration

```objectivec
- (void) main;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method takes the target and selector used to initialize the receiver and invokes the selector on the specified target. If you subclass `NSThread`, you can override this method and use it to implement the main body of your thread instead. If you do so, you do not need to invoke `super`.

You should never invoke this method directly. You should always start your thread by invoking the [start](start%28%29.md) method.

## See Also

### Starting a Thread

- [detachNewThreadSelector:toTarget:withObject:](detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.
- [start](start%28%29.md): Starts the receiver.
