> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideferredmenuelement/uncached(_:)](https://developer.apple.com/documentation/uikit/uideferredmenuelement/uncached(_:))

# uncached(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.

## Declaration

```swift
class func uncached(_ elementProvider: @escaping (@escaping ([UIMenuElement]) -> Void) -> Void) -> Self
```

## Parameters

- `elementProvider`: The closure the system calls to request the deferred menu items.

<a id="Discussion"></a>

## Discussion

When you use this initializer, the system calls each deferred element’s completion closure every time it encounters the element in a menu. The system doesn’t cache the element for reuse.

## See Also

### Creating a deferred menu element

- [init(\_:)](init%28__%29.md): A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [usingFocus(identifier:shouldCacheItems:)](usingfocus%28identifier_shouldcacheitems_%29.md)

# elementWithUncachedProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.

## Declaration

```objectivec
+ (instancetype) elementWithUncachedProvider:(void (^)(void (^completion)(NSArray<UIMenuElement *> *elements))) elementProvider;
```

## Parameters

- `elementProvider`: The closure the system calls to request the deferred menu items.

<a id="Discussion"></a>

## Discussion

When you use this initializer, the system calls each deferred element’s completion closure every time it encounters the element in a menu. The system doesn’t cache the element for reuse.

## See Also

### Creating a deferred menu element

- [elementWithProvider:](init%28__%29.md): A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [elementUsingFocusWithIdentifier:shouldCacheItems:](usingfocus%28identifier_shouldcacheitems_%29.md)
