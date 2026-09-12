> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicanvasfeedbackgenerator/pathcompleted(at:)](https://developer.apple.com/documentation/uikit/uicanvasfeedbackgenerator/pathcompleted(at:))

# pathCompleted(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Triggers feedback to indicate path completion or shape recognition.

## Declaration

```swift
func pathCompleted(at location: CGPoint)
```

## See Also

### Reporting canvas events

- [alignmentOccurred(at:)](alignmentoccurred%28at_%29.md): Triggers feedback to indicate when an alignment occurs, such as snapping an object to a guide or ruler.

# pathCompletedAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Triggers feedback to indicate path completion or shape recognition.

## Declaration

```objectivec
- (void) pathCompletedAtLocation:(CGPoint) location;
```

## See Also

### Reporting canvas events

- [alignmentOccurredAtLocation:](alignmentoccurred%28at_%29.md): Triggers feedback to indicate when an alignment occurs, such as snapping an object to a guide or ruler.
