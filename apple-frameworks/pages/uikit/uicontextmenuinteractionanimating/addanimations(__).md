> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractionanimating/addanimations(_:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractionanimating/addanimations(_:))

# addAnimations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Adds the specified animation block to the animator.

## Declaration

```swift
func addAnimations(_ animations: @escaping () -> Void)
```

## Parameters

- `animations`: The animation block.

## See Also

### Adding Custom Animations

- [addCompletion(\_:)](addcompletion%28__%29.md): Adds the specified completion block to the animator.

# addAnimations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Adds the specified animation block to the animator.

## Declaration

```objectivec
- (void) addAnimations:(void (^)()) animations;
```

## Parameters

- `animations`: The animation block.

## See Also

### Adding Custom Animations

- [addCompletion:](addcompletion%28__%29.md): Adds the specified completion block to the animator.
