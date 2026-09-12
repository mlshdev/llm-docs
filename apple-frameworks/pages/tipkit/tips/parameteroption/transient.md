> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/parameteroption/transient](https://developer.apple.com/documentation/tipkit/tips/parameteroption/transient)

# ParameterOption.transient

**Framework:** TipKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An option that resets the parameter value the first time it is referenced.

## Declaration

```swift
static var transient: Tips.ParameterOption { get }
```

<a id="Overview"></a>

## Overview

Use this option to to reset your parameter to a default value between app launches.

```swift
struct LandmarksUser {
    // Define the user interaction you want to use for a display rule.
    @Parameter(.transient)
    static var lastViewedLandmark: Landmark? = nil
}
```

## See Also

### Related Documentation

- [Parameter](../parameter.md): A type that monitors the state of its wrapped value to reevaluate any dependent tip rules when the value changes.
