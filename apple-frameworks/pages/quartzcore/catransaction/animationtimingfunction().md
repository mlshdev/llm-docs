> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/catransaction/animationtimingfunction()

# animationTimingFunction() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the timing function used for all animations within this transaction group.

## Declaration

```swift
class func animationTimingFunction() -> CAMediaTimingFunction?
```

<a id="return-value"></a>

## Return Value

An instance of `CAMediaTimingFunction`.

<a id="Discussion"></a>

## Discussion

This is a convenience method that returns the [CAMediaTimingFunction](../camediatimingfunction.md) for the [value(forKey:)](value%28forkey_%29.md) value returned by the  [kCATransactionAnimationTimingFunction](../kcatransactionanimationtimingfunction.md) key.

## See Also

### Overriding Animation Duration and Timing

- [animationDuration()](animationduration%28%29.md): Returns the animation duration used by all animations within this transaction group.
- [setAnimationDuration(\_:)](setanimationduration%28__%29.md): Sets the animation duration used by all animations within this transaction group.
- [setAnimationTimingFunction(\_:)](setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.

# animationTimingFunction (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the timing function used for all animations within this transaction group.

## Declaration

```objectivec
+ (CAMediaTimingFunction *) animationTimingFunction;
```

<a id="return-value"></a>

## Return Value

An instance of `CAMediaTimingFunction`.

<a id="Discussion"></a>

## Discussion

This is a convenience method that returns the [CAMediaTimingFunction](../camediatimingfunction.md) for the [valueForKey:](value%28forkey_%29.md) value returned by the  [kCATransactionAnimationTimingFunction](../kcatransactionanimationtimingfunction.md) key.

## See Also

### Overriding Animation Duration and Timing

- [animationDuration](animationduration%28%29.md): Returns the animation duration used by all animations within this transaction group.
- [setAnimationDuration:](setanimationduration%28__%29.md): Sets the animation duration used by all animations within this transaction group.
- [setAnimationTimingFunction:](setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.
