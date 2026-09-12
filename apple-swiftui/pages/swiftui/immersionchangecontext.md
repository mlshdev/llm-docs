> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersionchangecontext](https://developer.apple.com/documentation/swiftui/immersionchangecontext)

# ImmersionChangeContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 2.0+

A structure that represents a state of immersion of your app.

## Declaration

```swift
struct ImmersionChangeContext
```

<a id="overview"></a>

## Overview

You don’t use this structure directly. Instead, SwiftUI provides instances of this structure via the `onImmersionChange` modifier’s closure.

## Topics

### Instance Properties

- [amount](immersionchangecontext/amount.md): The current amount of immersion.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to immersion changes

- [onImmersionChange(initial:\_:)](view/onimmersionchange%28initial___%29.md): Performs an action when the immersion state of your app changes.
