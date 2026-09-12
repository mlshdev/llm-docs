> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrolleranimationcoordinator/addcoordinatedanimations(_:completion:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrolleranimationcoordinator/addcoordinatedanimations(_:completion:))

# addCoordinatedAnimations(\_:completion:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Adds animations to perform alongside the playback controls’ visibility animation.

## Declaration

```swift
func addCoordinatedAnimations(_ animations: (() -> Void)?, completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func addCoordinatedAnimations(_ animations: (() -> Void)?) async -> Bool
```

## Parameters

- `animations`: The animations to execute.
- `completion`: A closure to execute after the main animation completes. The system runs the specified animations in the same animation context as the main animation.

# addCoordinatedAnimations:completion: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Adds animations to perform alongside the playback controls’ visibility animation.

## Declaration

```objectivec
- (void) addCoordinatedAnimations:(void (^)()) animations completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `animations`: The animations to execute.
- `completion`: A closure to execute after the main animation completes. The system runs the specified animations in the same animation context as the main animation.
