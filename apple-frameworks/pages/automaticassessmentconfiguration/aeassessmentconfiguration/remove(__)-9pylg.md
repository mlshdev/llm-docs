> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/remove(_:)-9pylg

# remove(\_:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Removes the availability of a previously added executable participant.

## Declaration

```swift
func remove(_ binaryExecutable: AEAssessmentBinaryExecutable)
```

## Parameters

- `binaryExecutable`: The executable that you want to remove from the list of allowed participants.

# removeBinaryExecutable: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Removes the availability of a previously added executable participant.

## Declaration

```objectivec
- (void) removeBinaryExecutable:(AEAssessmentBinaryExecutable *) binaryExecutable;
```

## Parameters

- `binaryExecutable`: The executable that you want to remove from the list of allowed participants.
