> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/transitioncontext/addanimation(_:)](https://developer.apple.com/documentation/storekit/skoverlay/transitioncontext/addanimation(_:))

# addAnimation(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Adds a closure you can use to animate view properties.

## Declaration

```swift
func addAnimation(_ block: @escaping () -> Void)
```

## Parameters

- `block`: A closure that sets animatable view properties and runs on the main thread.

## See Also

### Adding an Animation

- [startFrame](startframe.md): The size and location of the overlay before the transition.
- [endFrame](endframe.md): The size and location of the overlay at the end of the transition.

# addAnimationBlock: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Adds a closure you can use to animate view properties.

## Declaration

```objectivec
- (void) addAnimationBlock:(void (^)()) block;
```

## Parameters

- `block`: A closure that sets animatable view properties and runs on the main thread.

## See Also

### Adding an Animation

- [startFrame](startframe.md): The size and location of the overlay before the transition.
- [endFrame](endframe.md): The size and location of the overlay at the end of the transition.
