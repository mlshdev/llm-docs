> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraganimating/addanimations(_:)](https://developer.apple.com/documentation/uikit/uidraganimating/addanimations(_:))

# addAnimations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds an animation block for modifying a view animation while it’s running.

## Declaration

```swift
func addAnimations(_ animations: @escaping () -> Void)
```

## Parameters

- `animations`: A block that sets animatable view properties.

## See Also

### Adding animations

- [addCompletion(\_:)](addcompletion%28__%29.md): Adds an animation completion block to run when a view animation has ended.

# addAnimations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds an animation block for modifying a view animation while it’s running.

## Declaration

```objectivec
- (void) addAnimations:(void (^)()) animations;
```

## Parameters

- `animations`: A block that sets animatable view properties.

## See Also

### Adding animations

- [addCompletion:](addcompletion%28__%29.md): Adds an animation completion block to run when a view animation has ended.
