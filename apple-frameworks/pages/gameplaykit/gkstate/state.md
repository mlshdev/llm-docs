> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkstate/state](https://developer.apple.com/documentation/gameplaykit/gkstate/state)

# state

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a state object with the specified list of valid next states.

## Declaration

```objectivec
+ (instancetype) state;
```

<a id="return-value"></a>

## Return Value

A state object.

<a id="Discussion"></a>

## Discussion

Call this method to conveniently create instances of your custom state classes. To perform custom initialization in those classes, override the [init](init%28%29.md) initializer.

## See Also

### Creating a State

- [init](init%28%29.md): Initializes a state object.
