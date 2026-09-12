> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/setanimationduration(_:)](https://developer.apple.com/documentation/quartzcore/catransaction/setanimationduration(_:))

# setAnimationDuration(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the animation duration used by all animations within this transaction group.

## Declaration

```swift
class func setAnimationDuration(_ dur: CFTimeInterval)
```

## Parameters

- `dur`: An interval of time used as the duration.

<a id="Discussion"></a>

## Discussion

You can also set the animation duration for a specific transaction object by calling the [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) method of that object and specifying the [kCATransactionAnimationDuration](../kcatransactionanimationduration.md) key.

## See Also

### Overriding Animation Duration and Timing

- [animationDuration()](animationduration%28%29.md): Returns the animation duration used by all animations within this transaction group.
- [animationTimingFunction()](animationtimingfunction%28%29.md): Returns the timing function used for all animations within this transaction group.
- [setAnimationTimingFunction(\_:)](setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.

# setAnimationDuration: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the animation duration used by all animations within this transaction group.

## Declaration

```objectivec
+ (void) setAnimationDuration:(CFTimeInterval) dur;
```

## Parameters

- `dur`: An interval of time used as the duration.

<a id="Discussion"></a>

## Discussion

You can also set the animation duration for a specific transaction object by calling the [setValue:forKey:](setvalue%28__forkey_%29.md) method of that object and specifying the [kCATransactionAnimationDuration](../kcatransactionanimationduration.md) key.

## See Also

### Overriding Animation Duration and Timing

- [animationDuration](animationduration%28%29.md): Returns the animation duration used by all animations within this transaction group.
- [animationTimingFunction](animationtimingfunction%28%29.md): Returns the timing function used for all animations within this transaction group.
- [setAnimationTimingFunction:](setanimationtimingfunction%28__%29.md): Sets the timing function used for all animations within this transaction group.
