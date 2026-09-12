> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteractionanimating/addcompletion(_:)](https://developer.apple.com/documentation/uikit/uipointerinteractionanimating/addcompletion(_:))

# addCompletion(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```swift
func addCompletion(_ completion: @escaping (Bool) -> Void)
```

## See Also

### Managing animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.

# addCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```objectivec
- (void) addCompletion:(void (^)(BOOL finished)) completion;
```

## See Also

### Managing animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
