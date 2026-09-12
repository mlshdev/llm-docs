> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable/teamidentifier](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable/teamidentifier)

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
