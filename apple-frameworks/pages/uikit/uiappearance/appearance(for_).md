> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiappearance/appearance(for:)](https://developer.apple.com/documentation/uikit/uiappearance/appearance(for:))

# appearance(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the appearance proxy for the receiver that has the passed trait collection.

## Declaration

```swift
static func appearance(for trait: UITraitCollection) -> Self
```

## Parameters

- `trait`: The trait collection used for matching.

<a id="return-value"></a>

## Return Value

The appearance proxy for the receiver.

## See Also

### Working with the appearance proxy

- [appearance()](appearance%28%29.md): Returns the appearance proxy for the receiver.
- [appearance(whenContainedInInstancesOf:)](appearance%28whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe.
- [appearance(for:whenContainedInInstancesOf:)](appearance%28for_whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.

# appearanceForTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the appearance proxy for the receiver that has the passed trait collection.

## Declaration

```objectivec
+ (instancetype) appearanceForTraitCollection:(UITraitCollection *) trait;
```

## Parameters

- `trait`: The trait collection used for matching.

<a id="return-value"></a>

## Return Value

The appearance proxy for the receiver.

## See Also

### Working with the appearance proxy

- [appearance](appearance%28%29.md): Returns the appearance proxy for the receiver.
- [appearanceWhenContainedInInstancesOfClasses:](appearance%28whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe.
- [appearanceForTraitCollection:whenContainedInInstancesOfClasses:](appearance%28for_whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.
- [appearanceWhenContainedIn:](appearancewhencontainedin_.md): Deprecated. Returns the appearance proxy for object when it’s contained in the hierarchy the specified classes describe.
- [appearanceForTraitCollection:whenContainedIn:](appearancefortraitcollection_whencontainedin_.md): Deprecated. Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.
