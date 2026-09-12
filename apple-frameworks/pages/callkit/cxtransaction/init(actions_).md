> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtransaction/init(actions:)](https://developer.apple.com/documentation/callkit/cxtransaction/init(actions:))

# init(actions:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new transaction with the specified actions.

## Declaration

```swift
init(actions: [CXAction])
```

## Parameters

- `actions`: The actions to added to the transaction.

<a id="return-value"></a>

## Return Value

A new transaction with the specified actions.

<a id="Discussion"></a>

## Discussion

This initializer is a convenience for using the designated initializer and calling the [addAction(\_:)](addaction%28__%29.md) method passing each object in `actions`.

## See Also

### Creating New Transactions

- [init(action:)](init%28action_%29.md): Initializes a new transaction with the specified action.

# initWithActions: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new transaction with the specified actions.

## Declaration

```objectivec
- (instancetype) initWithActions:(NSArray<CXAction *> *) actions;
```

## Parameters

- `actions`: The actions to added to the transaction.

<a id="return-value"></a>

## Return Value

A new transaction with the specified actions.

<a id="Discussion"></a>

## Discussion

This initializer is a convenience for using the designated initializer and calling the [addAction:](addaction%28__%29.md) method passing each object in `actions`.

## See Also

### Creating New Transactions

- [initWithAction:](init%28action_%29.md): Initializes a new transaction with the specified action.
