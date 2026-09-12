> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction](https://developer.apple.com/documentation/quartzcore/catransaction)

# CATransaction (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A mechanism for grouping multiple layer-tree operations into atomic updates to the render tree.

## Declaration

```swift
class CATransaction
```

<a id="overview"></a>

## Overview

`CATransaction` is the Core Animation mechanism for batching multiple layer-tree operations into atomic updates to the render tree. Every modification to a layer tree must be part of a transaction. Nested transactions are supported.

Core Animation supports two types of transactions: *implicit* transactions and *explicit* transactions. Implicit transactions are created automatically when the layer tree is modified by a thread without an active transaction and are committed automatically when the thread’s runloop next iterates. Explicit transactions occur when the the application sends the [CATransaction](catransaction.md) class a [begin()](catransaction/begin%28%29.md) message before modifying the layer tree, and a [commit()](catransaction/commit%28%29.md) message afterwards.

[CATransaction](catransaction.md) allows you to override default animation properties that are set for animatable properties. You can customize duration, timing function, whether changes to properties trigger animations, and provide a handler that informs you when all animations from the transaction group are completed.

During a transaction you can temporarily acquire a recursive spin lock for managing property atomicity.

[CATransaction](catransaction.md) supports nested transactions. The following code shows how you can fade out a layer (named `transitioningLayer`) over a 2 second duration while scaling it to three times its original size. The scale animation is within a nested transaction with its own duration of 1 second. After the outer transaction completes, a completion block removes `transitioningLayer` from its parent layer.

```swift
let transitioningLayer = CALayer()
     
// Outer transaction animates `opacity` to 0 over 2 seconds
CATransaction.begin()
CATransaction.setAnimationDuration(2)
CATransaction.setCompletionBlock {
    transitioningLayer.removeFromSuperlayer()
}
    
transitioningLayer.opacity = 0
     
// Inner transaction animates scale to (3, 3, 3) over 1 second
CATransaction.begin()
CATransaction.setAnimationDuration(1)
     
transitioningLayer.transform = CATransform3DMakeScale(3, 3, 3)
     
CATransaction.commit() // Commits inner transaction
CATransaction.commit() // Commits outer transaction
```

## Topics

### Creating and Committing Transactions

- [begin()](catransaction/begin%28%29.md): Begin a new transaction for the current thread.
- [commit()](catransaction/commit%28%29.md): Commit all changes made during the current transaction.
- [flush()](catransaction/flush%28%29.md): Flushes any extant implicit transaction.

### Overriding Animation Duration and Timing

- [animationDuration()](catransaction/animationduration%28%29.md): Returns the animation duration used by all animations within this transaction group.
- [setAnimationDuration(\_:)](catransaction/setanimationduration%28__%29.md): Sets the animation duration used by all animations within this transaction group.
- [animationTimingFunction()](catransaction/animationtimingfunction%28%29.md): Returns the timing function used for all animations within this transaction group.
- [setAnimationTimingFunction(\_:)](catransaction/setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.

### Temporarily Disabling Property Animations

- [disableActions()](catransaction/disableactions%28%29.md): Returns whether actions triggered as a result of property changes made within this transaction group are suppressed.
- [setDisableActions(\_:)](catransaction/setdisableactions%28__%29.md): Sets whether actions triggered as a result of property changes made within this transaction group are suppressed.

### Getting and Setting Completion Block Objects

- [completionBlock()](catransaction/completionblock%28%29.md): Returns the completion block object.
- [setCompletionBlock(\_:)](catransaction/setcompletionblock%28__%29.md): Sets the completion block object.

### Managing Concurrency

- [lock()](catransaction/lock%28%29.md): Attempts to acquire a recursive spin-lock lock, ensuring that returned layer values are valid until unlocked.
- [unlock()](catransaction/unlock%28%29.md): Relinquishes a previously acquired transaction lock.

### Getting and Setting Transaction Properties

- [setValue(\_:forKey:)](catransaction/setvalue%28__forkey_%29.md): Sets the arbitrary keyed-data for the specified key.
- [value(forKey:)](catransaction/value%28forkey_%29.md): Returns the arbitrary keyed-data specified by the given key.

### Constants

- [Transaction properties](transaction-properties.md): These constants define the property keys used by [value(forKey:)](catransaction/value%28forkey_%29.md) and [setValue(\_:forKey:)](catransaction/setvalue%28__forkey_%29.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Animation Groups

- [CAAnimationGroup](caanimationgroup.md): An object that allows multiple animations to be grouped and run concurrently.

# CATransaction (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A mechanism for grouping multiple layer-tree operations into atomic updates to the render tree.

## Declaration

```objectivec
@interface CATransaction : NSObject
```

<a id="overview"></a>

## Overview

`CATransaction` is the Core Animation mechanism for batching multiple layer-tree operations into atomic updates to the render tree. Every modification to a layer tree must be part of a transaction. Nested transactions are supported.

Core Animation supports two types of transactions: *implicit* transactions and *explicit* transactions. Implicit transactions are created automatically when the layer tree is modified by a thread without an active transaction and are committed automatically when the thread’s runloop next iterates. Explicit transactions occur when the the application sends the [CATransaction](catransaction.md) class a [begin](catransaction/begin%28%29.md) message before modifying the layer tree, and a [commit](catransaction/commit%28%29.md) message afterwards.

[CATransaction](catransaction.md) allows you to override default animation properties that are set for animatable properties. You can customize duration, timing function, whether changes to properties trigger animations, and provide a handler that informs you when all animations from the transaction group are completed.

During a transaction you can temporarily acquire a recursive spin lock for managing property atomicity.

[CATransaction](catransaction.md) supports nested transactions. The following code shows how you can fade out a layer (named `transitioningLayer`) over a 2 second duration while scaling it to three times its original size. The scale animation is within a nested transaction with its own duration of 1 second. After the outer transaction completes, a completion block removes `transitioningLayer` from its parent layer.

```swift
let transitioningLayer = CALayer()
     
// Outer transaction animates `opacity` to 0 over 2 seconds
CATransaction.begin()
CATransaction.setAnimationDuration(2)
CATransaction.setCompletionBlock {
    transitioningLayer.removeFromSuperlayer()
}
    
transitioningLayer.opacity = 0
     
// Inner transaction animates scale to (3, 3, 3) over 1 second
CATransaction.begin()
CATransaction.setAnimationDuration(1)
     
transitioningLayer.transform = CATransform3DMakeScale(3, 3, 3)
     
CATransaction.commit() // Commits inner transaction
CATransaction.commit() // Commits outer transaction
```

## Topics

### Creating and Committing Transactions

- [begin](catransaction/begin%28%29.md): Begin a new transaction for the current thread.
- [commit](catransaction/commit%28%29.md): Commit all changes made during the current transaction.
- [flush](catransaction/flush%28%29.md): Flushes any extant implicit transaction.

### Overriding Animation Duration and Timing

- [animationDuration](catransaction/animationduration%28%29.md): Returns the animation duration used by all animations within this transaction group.
- [setAnimationDuration:](catransaction/setanimationduration%28__%29.md): Sets the animation duration used by all animations within this transaction group.
- [animationTimingFunction](catransaction/animationtimingfunction%28%29.md): Returns the timing function used for all animations within this transaction group.
- [setAnimationTimingFunction:](catransaction/setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.

### Temporarily Disabling Property Animations

- [disableActions](catransaction/disableactions%28%29.md): Returns whether actions triggered as a result of property changes made within this transaction group are suppressed.
- [setDisableActions:](catransaction/setdisableactions%28__%29.md): Sets whether actions triggered as a result of property changes made within this transaction group are suppressed.

### Getting and Setting Completion Block Objects

- [completionBlock](catransaction/completionblock%28%29.md): Returns the completion block object.
- [setCompletionBlock:](catransaction/setcompletionblock%28__%29.md): Sets the completion block object.

### Managing Concurrency

- [lock](catransaction/lock%28%29.md): Attempts to acquire a recursive spin-lock lock, ensuring that returned layer values are valid until unlocked.
- [unlock](catransaction/unlock%28%29.md): Relinquishes a previously acquired transaction lock.

### Getting and Setting Transaction Properties

- [setValue:forKey:](catransaction/setvalue%28__forkey_%29.md): Sets the arbitrary keyed-data for the specified key.
- [valueForKey:](catransaction/value%28forkey_%29.md): Returns the arbitrary keyed-data specified by the given key.

### Constants

- [Transaction properties](transaction-properties.md): These constants define the property keys used by [valueForKey:](catransaction/value%28forkey_%29.md) and [setValue:forKey:](catransaction/setvalue%28__forkey_%29.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Animation Groups

- [CAAnimationGroup](caanimationgroup.md): An object that allows multiple animations to be grouped and run concurrently.
