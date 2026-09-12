> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideferredmenuelement/provider/init(_:)](https://developer.apple.com/documentation/uikit/uideferredmenuelement/provider/init(_:))

# init(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
convenience init(_ elementProvider: @escaping (@escaping ([UIMenuElement]) -> Void) -> Void)
```

## Parameters

- `elementProvider`: An asynchronous element provider block. Call this block’s completion handler when the responder’s menu items are available.

<a id="discussion"></a>

## Discussion

Creates a deferred menu element provider with an asynchronous block.

# providerWithElementProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
+ (instancetype) providerWithElementProvider:(void (^)(void (^completion)(NSArray<UIMenuElement *> *elements))) elementProvider;
```

## Parameters

- `elementProvider`: An asynchronous element provider block. Call this block’s completion handler when the responder’s menu items are available.

<a id="discussion"></a>

## Discussion

Creates a deferred menu element provider with an asynchronous block.
