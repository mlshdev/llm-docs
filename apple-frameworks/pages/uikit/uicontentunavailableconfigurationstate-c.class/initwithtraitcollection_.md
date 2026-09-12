> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableconfigurationstate-c.class/initwithtraitcollection:](https://developer.apple.com/documentation/uikit/uicontentunavailableconfigurationstate-c.class/initwithtraitcollection:)

# initWithTraitCollection:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a configuration state with the specified trait collection.

## Declaration

```objectivec
- (instancetype) initWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: The trait collection describing the user interface environment.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create a configuration state yourself. To access the current configuration state for a content-unavailable view, read [contentUnavailableConfigurationState](../uiviewcontroller/contentunavailableconfigurationstate-9bvga.md). View controller subclasses can override that property to customize the configuration state returned by the system.
