> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractionbehavior/shouldallow(_:with:)](https://developer.apple.com/documentation/uikit/uispringloadedinteractionbehavior/shouldallow(_:with:))

# shouldAllow(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether spring-loaded interaction should begin or should continue for the specified context.

## Declaration

```swift
func shouldAllow(_ interaction: UISpringLoadedInteraction, with context: any UISpringLoadedInteractionContext) -> Bool
```

## Parameters

- `interaction`: The spring-loaded interaction requesting the information.
- `context`: An object that provides information about the current drag operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the spring-loaded interaction should begin or continue; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# shouldAllowInteraction:withContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether spring-loaded interaction should begin or should continue for the specified context.

## Declaration

```objectivec
- (BOOL) shouldAllowInteraction:(UISpringLoadedInteraction *) interaction withContext:(id<UISpringLoadedInteractionContext>) context;
```

## Parameters

- `interaction`: The spring-loaded interaction requesting the information.
- `context`: An object that provides information about the current drag operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the spring-loaded interaction should begin or continue; otherwise, [false](https://developer.apple.com/documentation/swift/false).
