> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractionanimating/addanimations(_:)](https://developer.apple.com/documentation/uikit/uieditmenuinteractionanimating/addanimations(_:))

# addAnimations(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Adds a closure that performs animations to run alongside the edit menu interaction presentation.

## Declaration

```swift
func addAnimations(_ animations: @escaping () -> Void)
```

## Parameters

- `animations`: A closure that performs animations.

## See Also

### Adding Animations

- [addCompletion(\_:)](addcompletion%28__%29.md): Adds a closure to perform operations when the edit menu interaction presentation animations are complete.

# addAnimations: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Adds a closure that performs animations to run alongside the edit menu interaction presentation.

## Declaration

```objectivec
- (void) addAnimations:(void (^)()) animations;
```

## Parameters

- `animations`: A closure that performs animations.

## See Also

### Adding Animations

- [addCompletion:](addcompletion%28__%29.md): Adds a closure to perform operations when the edit menu interaction presentation animations are complete.
