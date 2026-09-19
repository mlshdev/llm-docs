> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctwaiter/init(delegate:)

# init(delegate:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a new waiter with the specified delegate.

## Declaration

```swift
init(delegate: (any XCTWaiterDelegate)?)
```

## Parameters

- `delegate`: The [XCTWaiterDelegate](../xctwaiterdelegate.md) that wait events should be sent to.

# initWithDelegate: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a new waiter with the specified delegate.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<XCTWaiterDelegate>) delegate;
```

## Parameters

- `delegate`: The [XCTWaiterDelegate](../xctwaiterdelegate.md) that wait events should be sent to.
