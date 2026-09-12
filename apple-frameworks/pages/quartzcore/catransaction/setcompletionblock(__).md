> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/setcompletionblock(_:)](https://developer.apple.com/documentation/quartzcore/catransaction/setcompletionblock(_:))

# setCompletionBlock(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the completion block object.

## Declaration

```swift
class func setCompletionBlock(_ block: (() -> Void)?)
```

## Parameters

- `block`: A block object called when animations for this transaction group are completed.

  The block object takes no parameters and returns no value.

<a id="Discussion"></a>

## Discussion

The completion block object that is guaranteed to be called (on the main thread) as soon as all animations subsequently added by this transaction group have completed (or have been removed.) If no animations are added before the current transaction group is committed (or the completion block is set to a different value,) the block will be invoked immediately.

## See Also

### Getting and Setting Completion Block Objects

- [completionBlock()](completionblock%28%29.md): Returns the completion block object.

# setCompletionBlock: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the completion block object.

## Declaration

```objectivec
+ (void) setCompletionBlock:(void (^)()) block;
```

## Parameters

- `block`: A block object called when animations for this transaction group are completed.

  The block object takes no parameters and returns no value.

<a id="Discussion"></a>

## Discussion

The completion block object that is guaranteed to be called (on the main thread) as soon as all animations subsequently added by this transaction group have completed (or have been removed.) If no animations are added before the current transaction group is committed (or the completion block is set to a different value,) the block will be invoked immediately.

## See Also

### Getting and Setting Completion Block Objects

- [completionBlock](completionblock%28%29.md): Returns the completion block object.
