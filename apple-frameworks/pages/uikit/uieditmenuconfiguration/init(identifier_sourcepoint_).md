> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uieditmenuconfiguration/init(identifier:sourcepoint:)

# init(identifier:sourcePoint:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Initializes a new configuration with the source location you specify.

## Declaration

```swift
@MainActor @preconcurrency convenience init(identifier: AnyHashable?, sourcePoint: CGPoint)
```

## Parameters

- `identifier`: The unique identifier for this configuration object.
- `sourcePoint`: The source location of the interaction.
