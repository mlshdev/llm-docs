> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiappearance/appearance(for:whencontainedininstancesof:)](https://developer.apple.com/documentation/uikit/uiappearance/appearance(for:whencontainedininstancesof:))

# appearance(for:whenContainedInInstancesOf:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.

## Declaration

```swift
static func appearance(for trait: UITraitCollection, whenContainedInInstancesOf containerTypes: [any UIAppearanceContainer.Type]) -> Self
```

## Parameters

- `trait`: The trait collection to use for matching.
- `containerTypes`: An array of appearance container classes, in ascending hierarchical order.

<a id="return-value"></a>

## Return Value

The appearance proxy to use for the object.

<a id="Discussion"></a>

## Discussion

Set the `containerTypes` array to an ascending hierarchical list of containing types for the trait collection. For example, if you want a navigation bar to take on a specific appearance when contained in a navigation controller inside a tab bar controller, set `containerTypes` to `[UINavigationController.self, UITabBarController.self]` (Swift) or `@[[UINavigationController class], [UITabBarController class]]` (Objective-C).

Do not set `containerTypes` to an unrelated list of types or to a list that does not match the containment hierarchy of your user interface.

## See Also

### Working with the appearance proxy

- [appearance()](appearance%28%29.md): Returns the appearance proxy for the receiver.
- [appearance(for:)](appearance%28for_%29.md): Returns the appearance proxy for the receiver that has the passed trait collection.
- [appearance(whenContainedInInstancesOf:)](appearance%28whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe.

# appearanceForTraitCollection:whenContainedInInstancesOfClasses: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.

## Declaration

```objectivec
+ (instancetype) appearanceForTraitCollection:(UITraitCollection *) trait whenContainedInInstancesOfClasses:(NSArray<Class<UIAppearanceContainer>> *) containerTypes;
```

## Parameters

- `trait`: The trait collection to use for matching.
- `containerTypes`: An array of appearance container classes, in ascending hierarchical order.

<a id="return-value"></a>

## Return Value

The appearance proxy to use for the object.

<a id="Discussion"></a>

## Discussion

Set the `containerTypes` array to an ascending hierarchical list of containing types for the trait collection. For example, if you want a navigation bar to take on a specific appearance when contained in a navigation controller inside a tab bar controller, set `containerTypes` to `[UINavigationController.self, UITabBarController.self]` (Swift) or `@[[UINavigationController class], [UITabBarController class]]` (Objective-C).

Do not set `containerTypes` to an unrelated list of types or to a list that does not match the containment hierarchy of your user interface.

## See Also

### Working with the appearance proxy

- [appearance](appearance%28%29.md): Returns the appearance proxy for the receiver.
- [appearanceForTraitCollection:](appearance%28for_%29.md): Returns the appearance proxy for the receiver that has the passed trait collection.
- [appearanceWhenContainedInInstancesOfClasses:](appearance%28whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe.
- [appearanceWhenContainedIn:](appearancewhencontainedin_.md): Deprecated. Returns the appearance proxy for object when it’s contained in the hierarchy the specified classes describe.
- [appearanceForTraitCollection:whenContainedIn:](appearancefortraitcollection_whencontainedin_.md): Deprecated. Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.
