> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/user](https://developer.apple.com/documentation/foundation/morphology/user)

# user

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The addressing preferences of the current user.

## Declaration

```swift
static let user: Morphology
```

<a id="Discussion"></a>

## Discussion

If the user hasn’t specified preferences, or chose not to share them with this app, the [isUnspecified](isunspecified.md) property is `true`.

This value doesn’t change throughout the lifetime of the process.
