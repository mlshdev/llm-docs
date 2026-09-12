> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/animationduration()](https://developer.apple.com/documentation/quartzcore/catransaction/animationduration())

# animationDuration() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the animation duration used by all animations within this transaction group.

## Declaration

```swift
class func animationDuration() -> CFTimeInterval
```

<a id="return-value"></a>

## Return Value

An interval of time used as the duration.

<a id="Discussion"></a>

## Discussion

You can retrieve the animation duration for a specific transaction by calling the [value(forKey:)](value%28forkey_%29.md) method of the transaction object and asking for the [kCATransactionAnimationDuration](../kcatransactionanimationduration.md) key.

## See Also

### Overriding Animation Duration and Timing

- [setAnimationDuration(\_:)](setanimationduration%28__%29.md): Sets the animation duration used by all animations within this transaction group.
- [animationTimingFunction()](animationtimingfunction%28%29.md): Returns the timing function used for all animations within this transaction group.
- [setAnimationTimingFunction(\_:)](setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.

# animationDuration (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the animation duration used by all animations within this transaction group.

## Declaration

```objectivec
+ (CFTimeInterval) animationDuration;
```

<a id="return-value"></a>

## Return Value

An interval of time used as the duration.

<a id="Discussion"></a>

## Discussion

You can retrieve the animation duration for a specific transaction by calling the [valueForKey:](value%28forkey_%29.md) method of the transaction object and asking for the [kCATransactionAnimationDuration](../kcatransactionanimationduration.md) key.

## See Also

### Overriding Animation Duration and Timing

- [setAnimationDuration:](setanimationduration%28__%29.md): Sets the animation duration used by all animations within this transaction group.
- [animationTimingFunction](animationtimingfunction%28%29.md): Returns the timing function used for all animations within this transaction group.
- [setAnimationTimingFunction:](setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.
