> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkdecisiontree/randomsource](https://developer.apple.com/documentation/gameplaykit/gkdecisiontree/randomsource)

# randomSource (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The randomizer to be used when evaluating parts of the tree that branch randomly.

## Declaration

```swift
@NSCopying var randomSource: GKRandomSource { get set }
```

<a id="Discussion"></a>

## Discussion

Some of the branches in a decision tree may not depend on an external input; instead, when evaluating the tree with the [findAction(forAnswers:)](findaction%28foranswers_%29.md) method, the tree automatically chooses an answer at random. (In a manually created decision tree, you can create random branches with the [createBranch(weight:attribute:)](../gkdecisionnode/createbranch%28weight_attribute_%29.md) method.) The tree uses this random source when randomly choosing answers.

## See Also

### Evaluating a Tree to Make Decisions

- [findAction(forAnswers:)](findaction%28foranswers_%29.md): Searches the decision tree, following the branches corresponding to each of the specified answers, and returns the resulting action object.

# randomSource (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The randomizer to be used when evaluating parts of the tree that branch randomly.

## Declaration

```objectivec
@property (nonatomic, copy) GKRandomSource * randomSource;
```

<a id="Discussion"></a>

## Discussion

Some of the branches in a decision tree may not depend on an external input; instead, when evaluating the tree with the [findActionForAnswers:](findaction%28foranswers_%29.md) method, the tree automatically chooses an answer at random. (In a manually created decision tree, you can create random branches with the [createBranchWithWeight:attribute:](../gkdecisionnode/createbranch%28weight_attribute_%29.md) method.) The tree uses this random source when randomly choosing answers.

## See Also

### Evaluating a Tree to Make Decisions

- [findActionForAnswers:](findaction%28foranswers_%29.md): Searches the decision tree, following the branches corresponding to each of the specified answers, and returns the resulting action object.
