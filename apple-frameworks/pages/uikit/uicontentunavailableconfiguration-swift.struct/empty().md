> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableconfiguration-swift.struct/empty()](https://developer.apple.com/documentation/uikit/uicontentunavailableconfiguration-swift.struct/empty())

# empty()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Creates the default configuration for unavailable content.

## Declaration

```swift
static func empty() -> UIContentUnavailableConfiguration
```

<a id="return-value"></a>

## Return Value

A new configuration.

<a id="Discussion"></a>

## Discussion

Use this method to create a new configuration to customize. This is useful if your empty content doesn’t fit the uses covered by configurations available with [search()](search%28%29.md) or [loading()](loading%28%29.md).
