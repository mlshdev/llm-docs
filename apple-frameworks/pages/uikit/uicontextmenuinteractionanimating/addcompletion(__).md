> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicontextmenuinteractionanimating/addcompletion(_:)

# addCompletion(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```swift
func addCompletion(_ completion: @escaping () -> Void)
```

## Parameters

- `completion`: The completion block.

## See Also

### Adding Custom Animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.

# addCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```objectivec
- (void) addCompletion:(void (^)()) completion;
```

## Parameters

- `completion`: The completion block.

## See Also

### Adding Custom Animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
