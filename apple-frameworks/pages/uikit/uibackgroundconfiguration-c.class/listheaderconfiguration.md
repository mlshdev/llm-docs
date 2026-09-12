> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-c.class/listheaderconfiguration](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-c.class/listheaderconfiguration)

# listHeaderConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Represents a generic header background configuration that automatically adopts the style of a containing list when updated for a new configuration state, by reading the `listEnvironment` trait from the state’s trait collection. Defaults to the background configuration for a header in a plain-style list.

## Declaration

```objectivec
+ (instancetype) listHeaderConfiguration;
```
