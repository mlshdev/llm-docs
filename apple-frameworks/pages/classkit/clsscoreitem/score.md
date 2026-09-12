> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsscoreitem/score](https://developer.apple.com/documentation/classkit/clsscoreitem/score)

# score (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The score earned by a user in completing the task.

## Declaration

```swift
var score: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Judge the value given against the activity item’s [maxScore](maxscore.md). For example, if a quiz has eight questions, the maximum score might be 8, and the score might be an integer in the range `[0, 8]`.

## See Also

### Managing the Score

- [maxScore](maxscore.md): The maximum possible score that the user can earn on a given task.

# score (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The score earned by a user in completing the task.

## Declaration

```objectivec
@property (nonatomic, assign) double score;
```

<a id="Discussion"></a>

## Discussion

Judge the value given against the activity item’s [maxScore](maxscore.md). For example, if a quiz has eight questions, the maximum score might be 8, and the score might be an integer in the range `[0, 8]`.

## See Also

### Managing the Score

- [maxScore](maxscore.md): The maximum possible score that the user can earn on a given task.
