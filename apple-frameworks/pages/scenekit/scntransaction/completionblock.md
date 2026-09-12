> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransaction/completionblock](https://developer.apple.com/documentation/scenekit/scntransaction/completionblock)

# completionBlock (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the block previously associated with the current transaction.

## Declaration

```swift
class var completionBlock: (() -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

See `setCompletionBlock(_:)`, `setCompletionBlock:` in Objective-C, for a description of the role of the completion block object.

# completionBlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the block previously associated with the current transaction.

## Declaration

```objectivec
@property (class, nonatomic, copy, nullable) void (^completionBlock)();
```

<a id="Discussion"></a>

## Discussion

See `setCompletionBlock(_:)`, `setCompletionBlock:` in Objective-C, for a description of the role of the completion block object.
