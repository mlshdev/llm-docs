> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/init(delegate:)](https://developer.apple.com/documentation/uikit/uidraginteraction/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a drag interaction object with a custom delegate object.

## Declaration

```swift
init(delegate: any UIDragInteractionDelegate)
```

## Parameters

- `delegate`: The object that configures and controls a drag interaction.

<a id="return-value"></a>

## Return Value

A drag interaction that has a delegate.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a drag interaction object with a custom delegate object.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIDragInteractionDelegate>) delegate;
```

## Parameters

- `delegate`: The object that configures and controls a drag interaction.

<a id="return-value"></a>

## Return Value

A drag interaction that has a delegate.
