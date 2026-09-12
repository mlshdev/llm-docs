> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentview-5fh3z/supports(_:)](https://developer.apple.com/documentation/uikit/uicontentview-5fh3z/supports(_:))

# supports(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS

Determines whether the view is compatible with the provided configuration.

## Declaration

```swift
@MainActor func supports(_ configuration: any UIContentConfiguration) -> Bool
```

## Parameters

- `configuration`: The new configuration to test for compatibility.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view supports this configuration being set to its [configuration](configuration.md) property and is capable of updating itself for the configuration; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation assumes the view is compatible with configuration types that match the type of the view’s existing configuration.

## Default Implementations

### UIContentView Implementations

- [supports(\_:)](supports%28__%29-q5rd.md)
