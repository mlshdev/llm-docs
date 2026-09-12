> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkdecisiontree/init(attribute:)](https://developer.apple.com/documentation/gameplaykit/gkdecisiontree/init(attribute:))

# init(attribute:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a decision tree starting with the specified initial attribute to test.

## Declaration

```swift
init(attribute: any NSObjectProtocol)
```

## Parameters

- `attribute`: The first attribute to test (or question to answer) when evaluating the tree.

<a id="return-value"></a>

## Return Value

A new decision tree.

<a id="Discussion"></a>

## Discussion

The decision tree returned by this initializer is incomplete. To build a manually defined tree, use the [rootNode](rootnode.md) property to access the node corresponding to the initial attribute, and use [GKDecisionNode](../gkdecisionnode.md) methods on that object to create branches leading to child nodes that represent additional attributes to test or final actions.

## See Also

### Creating a Manually Defined Decision Tree

- [rootNode](rootnode.md): The decision node at the root of the decision tree, representing the first attribute to test.

# initWithAttribute: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a decision tree starting with the specified initial attribute to test.

## Declaration

```objectivec
- (instancetype) initWithAttribute:(id<NSObject>) attribute;
```

## Parameters

- `attribute`: The first attribute to test (or question to answer) when evaluating the tree.

<a id="return-value"></a>

## Return Value

A new decision tree.

<a id="Discussion"></a>

## Discussion

The decision tree returned by this initializer is incomplete. To build a manually defined tree, use the [rootNode](rootnode.md) property to access the node corresponding to the initial attribute, and use [GKDecisionNode](../gkdecisionnode.md) methods on that object to create branches leading to child nodes that represent additional attributes to test or final actions.

## See Also

### Creating a Manually Defined Decision Tree

- [rootNode](rootnode.md): The decision node at the root of the decision tree, representing the first attribute to test.
