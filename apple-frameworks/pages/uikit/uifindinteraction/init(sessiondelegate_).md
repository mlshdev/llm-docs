> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifindinteraction/init(sessiondelegate:)

# init(sessionDelegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initializes a find interaction object with the delegate object you specify.

## Declaration

```swift
init(sessionDelegate: any UIFindInteractionDelegate)
```

<a id="return-value"></a>

## Return Value

Returns a find interaction object with the associated delegate.

<a id="Discussion"></a>

## Discussion

Create an object that conforms to the [UIFindInteractionDelegate](../uifindinteractiondelegate.md) protocol and assign it to this property.

# initWithSessionDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initializes a find interaction object with the delegate object you specify.

## Declaration

```objectivec
- (instancetype) initWithSessionDelegate:(id<UIFindInteractionDelegate>) sessionDelegate;
```

<a id="return-value"></a>

## Return Value

Returns a find interaction object with the associated delegate.

<a id="Discussion"></a>

## Discussion

Create an object that conforms to the [UIFindInteractionDelegate](../uifindinteractiondelegate.md) protocol and assign it to this property.
