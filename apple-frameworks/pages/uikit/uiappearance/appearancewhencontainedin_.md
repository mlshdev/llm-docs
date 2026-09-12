> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiappearance/appearancewhencontainedin:](https://developer.apple.com/documentation/uikit/uiappearance/appearancewhencontainedin:)

# appearanceWhenContainedIn:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the appearance proxy for object when it’s contained in the hierarchy the specified classes describe.

## Declaration

```objectivec
+ (instancetype) appearanceWhenContainedIn:(Class<UIAppearanceContainer> *) ContainerClass;
```

## Parameters

- `ContainerClass`: A nil-terminated list of appearance container classes, in ascending hierarchical order.

<a id="return-value"></a>

## Return Value

The appearance proxy to use for the object.

<a id="Discussion"></a>

## Discussion

Set the `ContainerClass` array to an ascending hierarchical list of containing types. For example, if you want a navigation bar to take on a specific appearance when contained in a navigation controller inside a tab bar controller, set `ContainerClass` to `@[[UINavigationController class], [UITabBarController class], nil]`.

Do not set `ContainerClass` to an unrelated list of types or to a list that does not match the containment hierarchy of your user interface.

This method throws an exception for any item in the var-args list that is not a Class object that conforms to the `UIAppearanceContainer` protocol.

## See Also

### Working with the appearance proxy

- [appearance](appearance%28%29.md): Returns the appearance proxy for the receiver.
- [appearanceForTraitCollection:](appearance%28for_%29.md): Returns the appearance proxy for the receiver that has the passed trait collection.
- [appearanceWhenContainedInInstancesOfClasses:](appearance%28whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe.
- [appearanceForTraitCollection:whenContainedInInstancesOfClasses:](appearance%28for_whencontainedininstancesof_%29.md): Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.
- [appearanceForTraitCollection:whenContainedIn:](appearancefortraitcollection_whencontainedin_.md): Deprecated. Returns the appearance proxy for the object when it’s contained in the hierarchy the specified classes describe and has the specified trait collection.
