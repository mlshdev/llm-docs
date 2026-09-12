> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndecision-swift.struct/isstrongdecision](https://developer.apple.com/documentation/cinematic/cndecision-swift.struct/isstrongdecision)

# isStrongDecision

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A flag representing whether this is a strong decision.

## Declaration

```swift
var isStrongDecision: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A strong decision keeps focus for as long as possible on the detected subject.

## See Also

### Instance Properties

- [focusDetectionID](focusdetectionid-swift.property.md)
- [isUserDecision](isuserdecision.md): A flag representing whether this is a user-created decision or a base decision.
- [time](time.md): The first presentation time that the subject should be in focus.
