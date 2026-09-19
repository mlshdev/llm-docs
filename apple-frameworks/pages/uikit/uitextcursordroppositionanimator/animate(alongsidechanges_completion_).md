> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextcursordroppositionanimator/animate(alongsidechanges:completion:)

# animate(alongsideChanges:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Optionally, provide an animation block or completion block to run alongside cursor appearance or position update animations.

## Declaration

```swift
func animate(alongsideChanges animation: (() -> Void)?, completion: (() -> Void)? = nil)
```

```swift
func animate(alongsideChanges animation: (() -> Void)?) async
```

# animateAlongsideChanges:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Optionally, provide an animation block or completion block to run alongside cursor appearance or position update animations.

## Declaration

```objectivec
- (void) animateAlongsideChanges:(void (^)()) animation completion:(void (^)()) completion;
```
