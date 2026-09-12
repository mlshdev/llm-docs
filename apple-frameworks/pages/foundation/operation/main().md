> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/main()](https://developer.apple.com/documentation/foundation/operation/main())

# main() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the receiver’s non-concurrent task.

## Declaration

```swift
func main()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. You should override this method to perform the desired task. In your implementation, do not invoke `super`. This method will automatically execute within an autorelease pool provided by `NSOperation`, so you do not need to create your own autorelease pool block in your implementation.

If you are implementing a concurrent operation, you are not required to override this method but may do so if you plan to call it from your custom [start()](start%28%29.md) method.

## See Also

### Executing the Operation

- [start()](start%28%29.md): Begins the execution of the operation.
- [completionBlock](completionblock.md): The block to execute after the operation’s main task is completed.

# main (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs the receiver’s non-concurrent task.

## Declaration

```objectivec
- (void) main;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. You should override this method to perform the desired task. In your implementation, do not invoke `super`. This method will automatically execute within an autorelease pool provided by `NSOperation`, so you do not need to create your own autorelease pool block in your implementation.

If you are implementing a concurrent operation, you are not required to override this method but may do so if you plan to call it from your custom [start](start%28%29.md) method.

## See Also

### Executing the Operation

- [start](start%28%29.md): Begins the execution of the operation.
- [completionBlock](completionblock.md): The block to execute after the operation’s main task is completed.
