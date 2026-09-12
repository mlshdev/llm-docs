> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeautocorrectmode/aeautocorrectmodenone](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeautocorrectmode/aeautocorrectmodenone)

# AEAutocorrectModeNone

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

A mode that indicates autocorrect doesn’t check anything.

## Declaration

```objectivec
AEAutocorrectModeNone
```

<a id="Discussion"></a>

## Discussion

Set the [autocorrectMode](../aeassessmentconfiguration/autocorrectmode-swift.property.md) value of an [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance to [AEAutocorrectModeNone](aeautocorrectmodenone.md) to disable all autocorrect features during an assessment.

```objc
config.autocorrectMode = AEAutocorrectModeNone;
```

This is the default value of the [autocorrectMode](../aeassessmentconfiguration/autocorrectmode-swift.property.md) property.

## See Also

### Modes

- [AEAutocorrectModePunctuation](../aeassessmentconfiguration/autocorrectmode-swift.struct/punctuation.md): A mode in which autocorrect checks punctuation as the user types.
- [AEAutocorrectModeSpelling](../aeassessmentconfiguration/autocorrectmode-swift.struct/spelling.md): A mode in which autocorrect checks for spelling as the user types.
