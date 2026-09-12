> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/traitoverrides-8u19n](https://developer.apple.com/documentation/uikit/uiviewcontroller/traitoverrides-8u19n)

# traitOverrides

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A mutable container of traits you use to set trait changes for this view controller and its views.

## Declaration

```objectivec
@property (nonatomic, readonly) id<UITraitOverrides> traitOverrides;
```

## See Also

### Overriding trait values

- [UITraitOverrides](../uitraitoverrides-c.protocol.md): A mutable container of traits you use to set trait changes for an object and its descendants.
- [updateTraitsIfNeeded](updatetraitsifneeded%28%29.md): Updates traits immediately for this view controller and its view, including any view controllers and views in this subtree.
