> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/init(items:)](https://developer.apple.com/documentation/uikit/uigravitybehavior/init(items:))

# init(items:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a gravity behavior with an array of dynamic items.

## Declaration

```swift
init(items: [any UIDynamicItem])
```

## Parameters

- `items`: The dynamic items that you want to be subject to the gravity behavior.

<a id="return-value"></a>

## Return Value

The initialized gravity behavior, or `nil` if there was a problem initializing the object.

# initWithItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a gravity behavior with an array of dynamic items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<UIDynamicItem>> *) items;
```

## Parameters

- `items`: The dynamic items that you want to be subject to the gravity behavior.

<a id="return-value"></a>

## Return Value

The initialized gravity behavior, or `nil` if there was a problem initializing the object.
