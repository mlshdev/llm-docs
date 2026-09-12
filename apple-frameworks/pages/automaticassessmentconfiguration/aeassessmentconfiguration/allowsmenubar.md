> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsmenubar](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsmenubar)

# allowsMenuBar (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the menu bar during an assessment.

## Declaration

```swift
var allowsMenuBar: Bool { get set }
```

<a id="discussion"></a>

## Discussion

An assessment session hides the menu bar by default, but you can allow it by setting [allowsMenuBar](allowsmenubar.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsMenuBar (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the menu bar during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsMenuBar;
```

<a id="discussion"></a>

## Discussion

An assessment session hides the menu bar by default, but you can allow it by setting [allowsMenuBar](allowsmenubar.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
