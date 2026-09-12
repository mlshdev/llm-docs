> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/automatichovereffect](https://developer.apple.com/documentation/swiftui/automatichovereffect)

# AutomaticHoverEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The default hover effect based on the surrounding context.

## Declaration

```swift
struct AutomaticHoverEffect
```

<a id="overview"></a>

## Overview

The automatic effect will resolve to any [defaultHoverEffect(\_:)](view/defaulthovereffect%28__%29.md) applied to the current View hierarchy, or a system-defined effect if no default effect has been defined.

You can also use [automatic](customhovereffect/automatic.md) to construct this hover effect.

## Topics

### Initializers

- [init()](automatichovereffect/init%28%29.md): Creates an automatic hover effect.

## Relationships

### Conforms To

- [CustomHoverEffect](customhovereffect.md)

## See Also

### Supporting types

- [EmptyHoverEffect](emptyhovereffect.md): A base hover effect used to build additional effects.
- [HighlightHoverEffect](highlighthovereffect.md): A hover effect that highlights views using a light source to indicate position.
- [LiftHoverEffect](lifthovereffect.md): A hover effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.
