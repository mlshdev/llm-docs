> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtransaction/init(action:)](https://developer.apple.com/documentation/callkit/cxtransaction/init(action:))

# init(action:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new transaction with the specified action.

## Declaration

```swift
convenience init(action: CXAction)
```

## Parameters

- `action`: The action to add to the transaction.

<a id="return-value"></a>

## Return Value

A new transaction with the specified action.

<a id="Discussion"></a>

## Discussion

This initializer is a convenience for using the designated initializer and calling the [addAction(\_:)](addaction%28__%29.md) method passing `action`.

## See Also

### Creating New Transactions

- [init(actions:)](init%28actions_%29.md): Initializes a new transaction with the specified actions.

# initWithAction: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new transaction with the specified action.

## Declaration

```objectivec
- (instancetype) initWithAction:(CXAction *) action;
```

## Parameters

- `action`: The action to add to the transaction.

<a id="return-value"></a>

## Return Value

A new transaction with the specified action.

<a id="Discussion"></a>

## Discussion

This initializer is a convenience for using the designated initializer and calling the [addAction:](addaction%28__%29.md) method passing `action`.

## See Also

### Creating New Transactions

- [initWithActions:](init%28actions_%29.md): Initializes a new transaction with the specified actions.
