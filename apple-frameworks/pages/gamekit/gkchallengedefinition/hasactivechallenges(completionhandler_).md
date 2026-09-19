> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkchallengedefinition/hasactivechallenges(completionhandler:)

# hasActiveChallenges(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates if this definition has active challenges associated with it.

## Declaration

```swift
func hasActiveChallenges(completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
var hasActiveChallenges: Bool { get async throws }
```

# hasActiveChallengesWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates if this definition has active challenges associated with it.

## Declaration

```objectivec
- (void) hasActiveChallengesWithCompletionHandler:(void (^)(BOOL hasActiveChallenges, NSError *error)) completionHandler;
```
