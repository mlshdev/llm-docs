> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteraction/init(delegate:)](https://developer.apple.com/documentation/uikit/uidropinteraction/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a drop interaction object with a custom delegate object.

## Declaration

```swift
init(delegate: any UIDropInteractionDelegate)
```

## Parameters

- `delegate`: An object that conforms to the [UIDropInteractionDelegate](../uidropinteractiondelegate.md) protocol.

<a id="return-value"></a>

## Return Value

A drop interaction that has a delegate.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a drop interaction object with a custom delegate object.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIDropInteractionDelegate>) delegate;
```

## Parameters

- `delegate`: An object that conforms to the [UIDropInteractionDelegate](../uidropinteractiondelegate.md) protocol.

<a id="return-value"></a>

## Return Value

A drop interaction that has a delegate.
