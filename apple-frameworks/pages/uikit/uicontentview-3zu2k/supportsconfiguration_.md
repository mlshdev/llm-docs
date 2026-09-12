> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentview-3zu2k/supportsconfiguration:](https://developer.apple.com/documentation/uikit/uicontentview-3zu2k/supportsconfiguration:)

# supportsConfiguration:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Determines whether the view is compatible with the provided configuration.

## Declaration

```objectivec
- (BOOL) supportsConfiguration:(id<UIContentConfiguration>) configuration;
```

## Parameters

- `configuration`: The new configuration to test for compatibility.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view supports this configuration being set to its [configuration](configuration.md) property and is capable of updating itself for the configuration; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation assumes the view is compatible with configuration classes that match the class of the view’s existing configuration.
