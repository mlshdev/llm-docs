> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/resetmode(completionhandler:)

# resetMode(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Reset Mode command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func resetMode(completionHandler: @escaping @Sendable (Int, Int, (any Error)?) -> Void)
```

```swift
func resetMode() async throws -> (Int, Int)
```

# resetModeWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Reset Mode command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) resetModeWithCompletionHandler:(void (^)(NSInteger statusFlag1, NSInteger statusFlag2, NSError *error)) completionHandler;
```
