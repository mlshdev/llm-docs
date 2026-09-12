> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkdecisiontree/rootnode](https://developer.apple.com/documentation/gameplaykit/gkdecisiontree/rootnode)

# rootNode (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The decision node at the root of the decision tree, representing the first attribute to test.

## Declaration

```swift
var rootNode: GKDecisionNode? { get }
```

<a id="Discussion"></a>

## Discussion

To build a manually defined tree, use [GKDecisionNode](../gkdecisionnode.md) methods on that object to create branches leading to child nodes that represent additional attributes to test or final actions.

## See Also

### Creating a Manually Defined Decision Tree

- [init(attribute:)](init%28attribute_%29.md): Creates a decision tree starting with the specified initial attribute to test.

# rootNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The decision node at the root of the decision tree, representing the first attribute to test.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GKDecisionNode * rootNode;
```

<a id="Discussion"></a>

## Discussion

To build a manually defined tree, use [GKDecisionNode](../gkdecisionnode.md) methods on that object to create branches leading to child nodes that represent additional attributes to test or final actions.

## See Also

### Creating a Manually Defined Decision Tree

- [initWithAttribute:](init%28attribute_%29.md): Creates a decision tree starting with the specified initial attribute to test.
