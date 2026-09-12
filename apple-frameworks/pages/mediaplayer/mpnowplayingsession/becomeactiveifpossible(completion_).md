> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsession/becomeactiveifpossible(completion:)](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession/becomeactiveifpossible(completion:))

# becomeActiveIfPossible(completion:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the system to make the session the active Now Playing session if possible.

## Declaration

```swift
func becomeActiveIfPossible(completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func becomeActiveIfPossible() async -> Bool
```

## Parameters

- `completion`: The completion handler the system calls after it processes the request.

## See Also

### Managing the active state

- [isActive](isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.
- [canBecomeActive](canbecomeactive.md): A Boolean value that indicates whether the session can become the app’s active Now Playing session.

# becomeActiveIfPossibleWithCompletion: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Tells the system to make the session the active Now Playing session if possible.

## Declaration

```objectivec
- (void) becomeActiveIfPossibleWithCompletion:(void (^)(BOOL isActive)) completion;
```

## Parameters

- `completion`: The completion handler the system calls after it processes the request.

## See Also

### Managing the active state

- [active](isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.
- [canBecomeActive](canbecomeactive.md): A Boolean value that indicates whether the session can become the app’s active Now Playing session.
