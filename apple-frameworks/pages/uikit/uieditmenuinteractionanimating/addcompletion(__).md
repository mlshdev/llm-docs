> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuinteractionanimating/addcompletion(_:)](https://developer.apple.com/documentation/uikit/uieditmenuinteractionanimating/addcompletion(_:))

# addCompletion(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Adds a closure to perform operations when the edit menu interaction presentation animations are complete.

## Declaration

```swift
func addCompletion(_ completion: @escaping () -> Void)
```

## Parameters

- `completion`: A closure that performs operations after the animations complete.

## See Also

### Adding Animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds a closure that performs animations to run alongside the edit menu interaction presentation.

# addCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Adds a closure to perform operations when the edit menu interaction presentation animations are complete.

## Declaration

```objectivec
- (void) addCompletion:(void (^)()) completion;
```

## Parameters

- `completion`: A closure that performs operations after the animations complete.

## See Also

### Adding Animations

- [addAnimations:](addanimations%28__%29.md): Adds a closure that performs animations to run alongside the edit menu interaction presentation.
