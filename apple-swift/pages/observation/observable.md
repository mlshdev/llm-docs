> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observable](https://developer.apple.com/documentation/observation/observable)

# Observable

**Framework:** Observation  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that emits notifications to observers when underlying data changes.

## Declaration

```swift
protocol Observable
```

## Mentioned In

- [Applying Macros](../swift/applying-macros.md)

<a id="overview"></a>

## Overview

Conforming to this protocol signals to other APIs that the type supports observation. However, applying the `Observable` protocol by itself to a type doesn’t add observation functionality to the type. Instead, always use the [Observable()](observable%28%29.md) macro when adding observation support to a type.

## See Also

### Observable conformance

- [Observable()](observable%28%29.md): Defines and implements conformance of the Observable protocol.
