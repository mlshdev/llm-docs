> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsscoreitem/init(identifier:title:score:maxscore:)](https://developer.apple.com/documentation/classkit/clsscoreitem/init(identifier:title:score:maxscore:))

# init(identifier:title:score:maxScore:) (Swift)

**Framework:** ClassKit  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Initializes an activity item that holds a score value.

## Declaration

```swift
init(identifier: String, title: String, score: Double, maxScore: Double)
```

## Parameters

- `identifier`: A unique string identifier for the activity item.
- `title`: A human readable name for the activity item.
- `score`: The score earned during completion of a task.
- `maxScore`: The maximum possible score, against which the reported score should be judged.

# initWithIdentifier:title:score:maxScore: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Initializes an activity item that holds a score value.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier title:(NSString *) title score:(double) score maxScore:(double) maxScore;
```

## Parameters

- `identifier`: A unique string identifier for the activity item.
- `title`: A human readable name for the activity item.
- `score`: The score earned during completion of a task.
- `maxScore`: The maximum possible score, against which the reported score should be judged.
