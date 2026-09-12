> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkdecisionnode/createbranch(value:attribute:)](https://developer.apple.com/documentation/gameplaykit/gkdecisionnode/createbranch(value:attribute:))

# createBranch(value:attribute:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a child node that the decision tree should use when the current node’s attribute has the specified value.

## Declaration

```swift
func createBranch(value: NSNumber, attribute: any NSObjectProtocol) -> Self
```

## Parameters

- `value`: The value for this node’s attribute that should result in following the newly created branch.
- `attribute`: The attribute for the child node to create.

<a id="return-value"></a>

## Return Value

The newly created child node.

<a id="Discussion"></a>

## Discussion

Use this method to specify a possible result of testing this node’s attribute (that is, an answer for this node’s question). The `attribute` parameter an have either of two kinds of values: if this test produces the decision tree’s final result (or action), the value identifies that action; if the next step in the decision tree is to be another question, the value identifies the next attribute to test (or question to ask).

The `value` parameter is a specific value for this node’s attribute, so this method is useful for questions that must have one of a few specific answers. (If a question has many possible answers, see the [createBranch(predicate:attribute:)](createbranch%28predicate_attribute_%29.md) method instead.) For example, a strategy combat game might use this method to choose an attack based on the type of opponent:

**Swift**

```swift
 
enum MyEnemyType: Int {
    case Water, Electric, Fire
}
 
let tree = GKDecisionTree(attribute: "HP?")
let root = tree.rootNode
 
root.createBranch(withValue: MyEnemyType.Water.rawValue, attribute: "Water Blast")
root.createBranch(withValue: MyEnemyType.Electric.rawValue, attribute: "Electric Shock"];
root.createBranch(withValue: MyEnemyType.Fire.rawValue, attribute: "Fire"];
```

**Objective-C**

```objc
typedef NS_ENUM(NSInteger, MyEnemyType) {
    MyEnemyTypeWater,
    MyEnemyTypeElectric,
    MyEnemyTypeFire
};
 
GKDecisionTree *tree = [[GKDecisionTree alloc] initWithAttribute:@"Type?"];
GKDecisionNode *root = tree.rootNode;
 
[root createBranchWithValue:@(MyEnemyTypeWater) attribute:@"Water Blast"];
[root createBranchWithValue:@(MyEnemyTypeElectric) attribute:@"Electric Shock"];
[root createBranchWithValue:@(MyEnemyTypeFire) attribute:@"Fire"];
```

## See Also

### Creating Child Nodes for Decision Branches

- [createBranch(predicate:attribute:)](createbranch%28predicate_attribute_%29.md): Creates a child node that the decision tree should use when the current node’s attribute satisfies the specified predicate.
- [createBranch(weight:attribute:)](createbranch%28weight_attribute_%29.md): Creates a child node that the decision tree should use as the result of a random choice, biased by the specified weight.

# createBranchWithValue:attribute: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a child node that the decision tree should use when the current node’s attribute has the specified value.

## Declaration

```objectivec
- (instancetype) createBranchWithValue:(NSNumber *) value attribute:(id<NSObject>) attribute;
```

## Parameters

- `value`: The value for this node’s attribute that should result in following the newly created branch.
- `attribute`: The attribute for the child node to create.

<a id="return-value"></a>

## Return Value

The newly created child node.

<a id="Discussion"></a>

## Discussion

Use this method to specify a possible result of testing this node’s attribute (that is, an answer for this node’s question). The `attribute` parameter an have either of two kinds of values: if this test produces the decision tree’s final result (or action), the value identifies that action; if the next step in the decision tree is to be another question, the value identifies the next attribute to test (or question to ask).

The `value` parameter is a specific value for this node’s attribute, so this method is useful for questions that must have one of a few specific answers. (If a question has many possible answers, see the [createBranchWithPredicate:attribute:](createbranch%28predicate_attribute_%29.md) method instead.) For example, a strategy combat game might use this method to choose an attack based on the type of opponent:

**Swift**

```swift
 
enum MyEnemyType: Int {
    case Water, Electric, Fire
}
 
let tree = GKDecisionTree(attribute: "HP?")
let root = tree.rootNode
 
root.createBranch(withValue: MyEnemyType.Water.rawValue, attribute: "Water Blast")
root.createBranch(withValue: MyEnemyType.Electric.rawValue, attribute: "Electric Shock"];
root.createBranch(withValue: MyEnemyType.Fire.rawValue, attribute: "Fire"];
```

**Objective-C**

```objc
typedef NS_ENUM(NSInteger, MyEnemyType) {
    MyEnemyTypeWater,
    MyEnemyTypeElectric,
    MyEnemyTypeFire
};
 
GKDecisionTree *tree = [[GKDecisionTree alloc] initWithAttribute:@"Type?"];
GKDecisionNode *root = tree.rootNode;
 
[root createBranchWithValue:@(MyEnemyTypeWater) attribute:@"Water Blast"];
[root createBranchWithValue:@(MyEnemyTypeElectric) attribute:@"Electric Shock"];
[root createBranchWithValue:@(MyEnemyTypeFire) attribute:@"Fire"];
```

## See Also

### Creating Child Nodes for Decision Branches

- [createBranchWithPredicate:attribute:](createbranch%28predicate_attribute_%29.md): Creates a child node that the decision tree should use when the current node’s attribute satisfies the specified predicate.
- [createBranchWithWeight:attribute:](createbranch%28weight_attribute_%29.md): Creates a child node that the decision tree should use as the result of a random choice, biased by the specified weight.
