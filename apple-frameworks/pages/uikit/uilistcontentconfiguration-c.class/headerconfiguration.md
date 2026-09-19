> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uilistcontentconfiguration-c.class/headerconfiguration

# headerConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Represents a generic header configuration that automatically adopts the style of a containing list when updating for a new configuration state, by reading the `listEnvironment` trait from the state’s trait collection. Defaults to the header configuration for a plain-style list.

## Declaration

```objectivec
+ (instancetype) headerConfiguration;
```
