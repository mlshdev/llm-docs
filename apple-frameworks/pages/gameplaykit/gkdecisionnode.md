> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkdecisionnode](https://developer.apple.com/documentation/gameplaykit/gkdecisionnode)

# GKDecisionNode (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A node for use in manually creating decision trees, representing a specific question and possible answers, or an action that follows from answering other questions.

## Declaration

```swift
class GKDecisionNode
```

<a id="overview"></a>

## Overview

A [GKDecisionNode](gkdecisionnode.md) instance represents an element in a decision tree (a [GKDecisionTree](gkdecisiontree.md) object). Decision trees contain two kinds of nodes. Some nodes, including the tree’s root node, represent individual decisions to be made (also called a question or *attribute*) and reference child nodes for each possible outcome of (or *branch* from) that decision. Each branch can lead to another question node, or to a leaf node—nodes that have no branches represent a final outcome (or *action*) to result from the tree’s decision-making process. After creating a decision tree from a set of nodes, you can present the tree with a set of inputs (values for attributes, or answers to questions) and the tree provides a final action that follows from the branches corresponding to each attribute.

There are two ways to create a decision tree. You use the [GKDecisionNode](gkdecisionnode.md) class directly only when you want to define an entire decision tree manually—that is, to specify each question, the possible branches from each question, and the possible final actions. To create such a decision tree, start with the [GKDecisionTree](gkdecisiontree.md)  [init(attribute:)](gkdecisiontree/init%28attribute_%29.md) initializer, then use the methods listed in Creating Child Nodes for Decision Branches to add branches to the tree.

To instead automatically learn a decision tree given a set of questions and example answers, use the [GKDecisionTree](gkdecisiontree.md)  [init(examples:actions:attributes:)](gkdecisiontree/init%28examples_actions_attributes_%29.md) method.

## Topics

### Creating Child Nodes for Decision Branches

- [createBranch(value:attribute:)](gkdecisionnode/createbranch%28value_attribute_%29.md): Creates a child node that the decision tree should use when the current node’s attribute has the specified value.
- [createBranch(predicate:attribute:)](gkdecisionnode/createbranch%28predicate_attribute_%29.md): Creates a child node that the decision tree should use when the current node’s attribute satisfies the specified predicate.
- [createBranch(weight:attribute:)](gkdecisionnode/createbranch%28weight_attribute_%29.md): Creates a child node that the decision tree should use as the result of a random choice, biased by the specified weight.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Decision Trees

- [GKDecisionTree](gkdecisiontree.md): A data structure that models a set of specific questions, their possible answers, and the actions that follow from a series of answers.

# GKDecisionNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A node for use in manually creating decision trees, representing a specific question and possible answers, or an action that follows from answering other questions.

## Declaration

```objectivec
@interface GKDecisionNode : NSObject
```

<a id="overview"></a>

## Overview

A [GKDecisionNode](gkdecisionnode.md) instance represents an element in a decision tree (a [GKDecisionTree](gkdecisiontree.md) object). Decision trees contain two kinds of nodes. Some nodes, including the tree’s root node, represent individual decisions to be made (also called a question or *attribute*) and reference child nodes for each possible outcome of (or *branch* from) that decision. Each branch can lead to another question node, or to a leaf node—nodes that have no branches represent a final outcome (or *action*) to result from the tree’s decision-making process. After creating a decision tree from a set of nodes, you can present the tree with a set of inputs (values for attributes, or answers to questions) and the tree provides a final action that follows from the branches corresponding to each attribute.

There are two ways to create a decision tree. You use the [GKDecisionNode](gkdecisionnode.md) class directly only when you want to define an entire decision tree manually—that is, to specify each question, the possible branches from each question, and the possible final actions. To create such a decision tree, start with the [GKDecisionTree](gkdecisiontree.md)  [initWithAttribute:](gkdecisiontree/init%28attribute_%29.md) initializer, then use the methods listed in Creating Child Nodes for Decision Branches to add branches to the tree.

To instead automatically learn a decision tree given a set of questions and example answers, use the [GKDecisionTree](gkdecisiontree.md)  [initWithExamples:actions:attributes:](gkdecisiontree/init%28examples_actions_attributes_%29.md) method.

## Topics

### Creating Child Nodes for Decision Branches

- [createBranchWithValue:attribute:](gkdecisionnode/createbranch%28value_attribute_%29.md): Creates a child node that the decision tree should use when the current node’s attribute has the specified value.
- [createBranchWithPredicate:attribute:](gkdecisionnode/createbranch%28predicate_attribute_%29.md): Creates a child node that the decision tree should use when the current node’s attribute satisfies the specified predicate.
- [createBranchWithWeight:attribute:](gkdecisionnode/createbranch%28weight_attribute_%29.md): Creates a child node that the decision tree should use as the result of a random choice, biased by the specified weight.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Decision Trees

- [GKDecisionTree](gkdecisiontree.md): A data structure that models a set of specific questions, their possible answers, and the actions that follow from a series of answers.
