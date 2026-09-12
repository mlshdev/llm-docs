> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/updatetraitsifneeded()](https://developer.apple.com/documentation/uikit/uiviewcontroller/updatetraitsifneeded())

# updateTraitsIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Updates traits immediately for this view controller and its view, including any view controllers and views in this subtree.

## Declaration

```swift
func updateTraitsIfNeeded()
```

<a id="discussion"></a>

## Discussion

The system sends trait change callbacks synchronously.

## See Also

### Overriding trait values

- [traitOverrides](traitoverrides-1z1cc.md): A mutable container of traits you use to set trait changes for this view controller and its views.
- [UITraitOverrides](../uitraitoverrides-swift.struct.md): A mutable container of traits you use to set trait changes for an object and its descendants.

# updateTraitsIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Updates traits immediately for this view controller and its view, including any view controllers and views in this subtree.

## Declaration

```objectivec
- (void) updateTraitsIfNeeded;
```

<a id="discussion"></a>

## Discussion

The system sends trait change callbacks synchronously.

## See Also

### Overriding trait values

- [traitOverrides](traitoverrides-8u19n.md): A mutable container of traits you use to set trait changes for this view controller and its views.
- [UITraitOverrides](../uitraitoverrides-c.protocol.md): A mutable container of traits you use to set trait changes for an object and its descendants.
