> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitemgroup/init(items:)](https://developer.apple.com/documentation/uikit/uidynamicitemgroup/init(items:))

# init(items:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a group containing the specified items.

## Declaration

```swift
init(items: [any UIDynamicItem])
```

## Parameters

- `items`: The dynamic items to include in the group. You cannot change the items in a group after initialization.

<a id="return-value"></a>

## Return Value

A new group object containing the items.

# initWithItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a group containing the specified items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<UIDynamicItem>> *) items;
```

## Parameters

- `items`: The dynamic items to include in the group. You cannot change the items in a group after initialization.

<a id="return-value"></a>

## Return Value

A new group object containing the items.
