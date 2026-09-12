> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitoverrides-c.protocol](https://developer.apple.com/documentation/uikit/uitraitoverrides-c.protocol)

# UITraitOverrides

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A mutable container of traits you use to set trait changes for an object and its descendants.

## Declaration

```objectivec
@protocol UITraitOverrides <UIMutableTraits>
```

## Topics

### Inspecting overrides

- [containsTrait:](uitraitoverrides-c.protocol/containstrait_.md): Returns a Boolean value that indicates whether the trait overrides contain a change for the trait you provide.

### Removing overrides

- [removeTrait:](uitraitoverrides-c.protocol/removetrait_.md): Removes the change for the trait you provide.

## Relationships

### Inherits From

- [UIMutableTraits](uimutabletraits-8l00o.md)

## See Also

### Overriding trait values

- [traitOverrides](uipresentationcontroller/traitoverrides-9o0j4.md)
