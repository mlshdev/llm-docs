> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable/teamidentifier

# teamIdentifier (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Team identifier the running executable’s signature must match, or `nil` to skip the team check.

## Declaration

```swift
var teamIdentifier: String? { get }
```

# teamIdentifier (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Team identifier the running executable’s signature must match, or `nil` to skip the team check.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * teamIdentifier;
```
