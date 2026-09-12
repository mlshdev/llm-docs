> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxanalysisstate](https://developer.apple.com/documentation/professional_video_applications/fxanalysisstate)

# FxAnalysisState (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 4.1+

The possible states of frame analysis, as reported by the host application.

## Declaration

```swift
typealias FxAnalysisState = Int
```

## Parameters

- `kFxAnalysisState_NotAnalyzing`: Not currently analyzing.
- `kFxAnalysisState_AnalysisRequested`: Analysis requested.
- `kFxAnalysisState_AnalysisStarted`: Analysis started.
- `kFxAnalysisState_AnalysisCompleted`: Analysis completed.
- `kFxAnalysisState_AnalysisInterrupted`: Analysis interrupted.

<a id="discussion"></a>

## Discussion

Query the analysis state with [analysisStateForEffect()](fxanalysisapi/analysisstateforeffect%28%29.md).

## Topics

### States of Analysis

- [kFxAnalysisState_NotAnalyzing](kfxanalysisstate_notanalyzing.md): Not currently analyzing.
- [kFxAnalysisState_AnalysisRequested](kfxanalysisstate_analysisrequested.md): Analysis requested.
- [kFxAnalysisState_AnalysisStarted](kfxanalysisstate_analysisstarted.md): Analysis started.
- [kFxAnalysisState_AnalysisCompleted](kfxanalysisstate_analysiscompleted.md): Analysis completed.
- [kFxAnalysisState_AnalysisInterrupted](kfxanalysisstate_analysisinterrupted.md): Analysis interrupted.

# FxAnalysisState (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

The possible states of frame analysis, as reported by the host application.

## Declaration

```objectivec
typedef NSUInteger FxAnalysisState;
```

## Parameters

- `kFxAnalysisState_NotAnalyzing`: Not currently analyzing.
- `kFxAnalysisState_AnalysisRequested`: Analysis requested.
- `kFxAnalysisState_AnalysisStarted`: Analysis started.
- `kFxAnalysisState_AnalysisCompleted`: Analysis completed.
- `kFxAnalysisState_AnalysisInterrupted`: Analysis interrupted.

<a id="discussion"></a>

## Discussion

Query the analysis state with [analysisStateForEffect](fxanalysisapi/analysisstateforeffect%28%29.md).

## Topics

### States of Analysis

- [kFxAnalysisState_NotAnalyzing](kfxanalysisstate_notanalyzing.md): Not currently analyzing.
- [kFxAnalysisState_AnalysisRequested](kfxanalysisstate_analysisrequested.md): Analysis requested.
- [kFxAnalysisState_AnalysisStarted](kfxanalysisstate_analysisstarted.md): Analysis started.
- [kFxAnalysisState_AnalysisCompleted](kfxanalysisstate_analysiscompleted.md): Analysis completed.
- [kFxAnalysisState_AnalysisInterrupted](kfxanalysisstate_analysisinterrupted.md): Analysis interrupted.
