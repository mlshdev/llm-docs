> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraganimating/addcompletion(_:)](https://developer.apple.com/documentation/uikit/uidraganimating/addcompletion(_:))

# addCompletion(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds an animation completion block to run when a view animation has ended.

## Declaration

```swift
func addCompletion(_ completion: @escaping (UIViewAnimatingPosition) -> Void)
```

## Parameters

- `completion`: A block that sets animatable view properties.

## See Also

### Adding animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds an animation block for modifying a view animation while it’s running.

# addCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds an animation completion block to run when a view animation has ended.

## Declaration

```objectivec
- (void) addCompletion:(void (^)(UIViewAnimatingPosition finalPosition)) completion;
```

## Parameters

- `completion`: A block that sets animatable view properties.

## See Also

### Adding animations

- [addAnimations:](addanimations%28__%29.md): Adds an animation block for modifying a view animation while it’s running.
