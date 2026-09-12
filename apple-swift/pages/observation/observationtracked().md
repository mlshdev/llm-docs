> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observationtracked()](https://developer.apple.com/documentation/observation/observationtracked())

# ObservationTracked()

**Framework:** Observation  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Synthesizes a property for accessors.

## Declaration

```swift
@attached(accessor, names: named(init), named(get), named(set), named(_modify)) @attached(peer, names: prefixed(`_`)) macro ObservationTracked()
```

<a id="overview"></a>

## Overview

The [Observation](../observation.md) module uses this macro. Its use outside of the framework isn’t necessary.
