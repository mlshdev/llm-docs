> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/totalpathpauses](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/totalpathpauses)

# totalPathPauses (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The total number of pauses while drawing a path for a word.

## Declaration

```swift
var totalPathPauses: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property encompasses the number of pauses in a continuous QuickPath touch-input gesture. The framework registers a path pause when the user’s finger stays within an area that’s the size of the width of one key for more than two seconds.

## See Also

### Quantifying Key Use

- [totalWords](totalwords.md): The total number of typed words for the keyboard.
- [totalAlteredWords](totalalteredwords.md): The total number of altered words for the keyboard.
- [totalTaps](totaltaps.md): The total number of taps for the keyboard.
- [totalDrags](totaldrags.md): The total number of drags for the keyboard.
- [totalDeletes](totaldeletes.md): The total number of deletions for the keyboard.
- [totalEmojis](totalemojis.md): The total number of emojis for the keyboard.
- [totalPaths](totalpaths.md): The total number of completed paths for the keyboard.
- [totalPathTime](totalpathtime.md): The total time to complete paths for the keyboard.
- [totalPathLength](totalpathlength.md): The total length of completed paths for the keyboard.
- [totalAutoCorrections](totalautocorrections.md): The total number of autocorrections for the keyboard.
- [totalSpaceCorrections](totalspacecorrections.md): The total number of space corrections for the keyboard.
- [totalRetroCorrections](totalretrocorrections.md): The total number of retro corrections for the keyboard.
- [totalTranspositionCorrections](totaltranspositioncorrections.md): The total number of transposition corrections for the keyboard.
- [totalInsertKeyCorrections](totalinsertkeycorrections.md): The total number of Insert key corrections for the keyboard.
- [totalSkipTouchCorrections](totalskiptouchcorrections.md): The total number of skip touch corrections for the keyboard.

# totalPathPauses (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The total number of pauses while drawing a path for a word.

## Declaration

```objectivec
@property (readonly) NSInteger totalPathPauses;
```

<a id="Discussion"></a>

## Discussion

The value of this property encompasses the number of pauses in a continuous QuickPath touch-input gesture. The framework registers a path pause when the user’s finger stays within an area that’s the size of the width of one key for more than two seconds.

## See Also

### Quantifying Key Use

- [totalWords](totalwords.md): The total number of typed words for the keyboard.
- [totalAlteredWords](totalalteredwords.md): The total number of altered words for the keyboard.
- [totalTaps](totaltaps.md): The total number of taps for the keyboard.
- [totalDrags](totaldrags.md): The total number of drags for the keyboard.
- [totalDeletes](totaldeletes.md): The total number of deletions for the keyboard.
- [totalEmojis](totalemojis.md): The total number of emojis for the keyboard.
- [totalPaths](totalpaths.md): The total number of completed paths for the keyboard.
- [totalPathTime](totalpathtime.md): The total time to complete paths for the keyboard.
- [totalPathLength](totalpathlength.md): The total length of completed paths for the keyboard.
- [totalAutoCorrections](totalautocorrections.md): The total number of autocorrections for the keyboard.
- [totalSpaceCorrections](totalspacecorrections.md): The total number of space corrections for the keyboard.
- [totalRetroCorrections](totalretrocorrections.md): The total number of retro corrections for the keyboard.
- [totalTranspositionCorrections](totaltranspositioncorrections.md): The total number of transposition corrections for the keyboard.
- [totalInsertKeyCorrections](totalinsertkeycorrections.md): The total number of Insert key corrections for the keyboard.
- [totalSkipTouchCorrections](totalskiptouchcorrections.md): The total number of skip touch corrections for the keyboard.
