> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/configurationsbybinaryexecutable](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/configurationsbybinaryexecutable)

# configurationsByBinaryExecutable (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The collection of executable participants available during an assessment, along with their associated configurations.

## Declaration

```swift
var configurationsByBinaryExecutable: [AEAssessmentBinaryExecutable : AEAssessmentBinaryExecutableConfiguration] { get }
```

<a id="discussion"></a>

## Discussion

Add executables with [setConfiguration(\_:for:)](setconfiguration%28__for_%29-16sed.md) and remove them with `AEAssessmentConfiguration/removeBinaryExecutable(_:)`.

> **See Also**

> [AEAssessmentBinaryExecutable](../aeassessmentbinaryexecutable.md)

# configurationsByBinaryExecutable (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The collection of executable participants available during an assessment, along with their associated configurations.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<AEAssessmentBinaryExecutable *,AEAssessmentBinaryExecutableConfiguration *> * configurationsByBinaryExecutable;
```

<a id="discussion"></a>

## Discussion

Add executables with [setConfiguration:forBinaryExecutable:](setconfiguration%28__for_%29-16sed.md) and remove them with `AEAssessmentConfiguration/removeBinaryExecutable(_:)`.

> **See Also**

> [AEAssessmentBinaryExecutable](../aeassessmentbinaryexecutable.md)
