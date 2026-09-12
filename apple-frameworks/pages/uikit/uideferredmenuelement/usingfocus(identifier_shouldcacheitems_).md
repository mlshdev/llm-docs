> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideferredmenuelement/usingfocus(identifier:shouldcacheitems:)](https://developer.apple.com/documentation/uikit/uideferredmenuelement/usingfocus(identifier:shouldcacheitems:))

# usingFocus(identifier:shouldCacheItems:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
class func usingFocus(identifier: UIDeferredMenuElement.Identifier, shouldCacheItems: Bool) -> Self
```

## Parameters

- `identifier`: An identifier for this deferred element that responders can check to determine which elements to provide.
- `shouldCacheItems`: Whether or not the deferred element caches items. Passing in @c YES causes this deferred element to ask the responder chain for elements only once, when the element is first encountered in a menu. Passing in @c NO asks the responder chain for elements every time the element is displayed.

<a id="discussion"></a>

## Discussion

Returns a placeholder menu element that is replaced with elements provided from the responder chain. A loading UI takes the place of the element in the menu until it is fulfilled. The element may be stored and re-used across menus.

## See Also

### Creating a deferred menu element

- [init(\_:)](init%28__%29.md): A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [uncached(\_:)](uncached%28__%29.md): Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.

# elementUsingFocusWithIdentifier:shouldCacheItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
+ (instancetype) elementUsingFocusWithIdentifier:(UIDeferredMenuElementIdentifier) identifier shouldCacheItems:(BOOL) shouldCacheItems;
```

## Parameters

- `identifier`: An identifier for this deferred element that responders can check to determine which elements to provide.
- `shouldCacheItems`: Whether or not the deferred element caches items. Passing in @c YES causes this deferred element to ask the responder chain for elements only once, when the element is first encountered in a menu. Passing in @c NO asks the responder chain for elements every time the element is displayed.

<a id="discussion"></a>

## Discussion

Returns a placeholder menu element that is replaced with elements provided from the responder chain. A loading UI takes the place of the element in the menu until it is fulfilled. The element may be stored and re-used across menus.

## See Also

### Creating a deferred menu element

- [elementWithProvider:](init%28__%29.md): A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [elementWithUncachedProvider:](uncached%28__%29.md): Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.
