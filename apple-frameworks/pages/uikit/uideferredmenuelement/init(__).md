> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideferredmenuelement/init(_:)](https://developer.apple.com/documentation/uikit/uideferredmenuelement/init(_:))

# init(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.

## Declaration

```swift
convenience init(_ elementProvider: @escaping (@escaping ([UIMenuElement]) -> Void) -> Void)
```

## Parameters

- `elementProvider`: The closure the system calls to request the deferred menu items.

<a id="Discussion"></a>

## Discussion

The system calls each element’s closure once, when it first encounters the element in a menu. Once provided, the system caches the element and may reuse it across menus.

You can use [uncached(\_:)](uncached%28__%29.md) to initialize a deferred menu element without caching. With caching disabled, the system calls the provider closure each time it displays the element.

## See Also

### Creating a deferred menu element

- [uncached(\_:)](uncached%28__%29.md): Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [usingFocus(identifier:shouldCacheItems:)](usingfocus%28identifier_shouldcacheitems_%29.md)

# elementWithProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.

## Declaration

```objectivec
+ (instancetype) elementWithProvider:(void (^)(void (^completion)(NSArray<UIMenuElement *> *elements))) elementProvider;
```

## Parameters

- `elementProvider`: The closure the system calls to request the deferred menu items.

<a id="Discussion"></a>

## Discussion

The system calls each element’s closure once, when it first encounters the element in a menu. Once provided, the system caches the element and may reuse it across menus.

You can use [elementWithUncachedProvider:](uncached%28__%29.md) to initialize a deferred menu element without caching. With caching disabled, the system calls the provider closure each time it displays the element.

## See Also

### Creating a deferred menu element

- [elementWithUncachedProvider:](uncached%28__%29.md): Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [elementUsingFocusWithIdentifier:shouldCacheItems:](usingfocus%28identifier_shouldcacheitems_%29.md)
