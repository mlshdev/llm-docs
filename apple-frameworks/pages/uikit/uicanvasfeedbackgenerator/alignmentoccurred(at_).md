> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicanvasfeedbackgenerator/alignmentoccurred(at:)](https://developer.apple.com/documentation/uikit/uicanvasfeedbackgenerator/alignmentoccurred(at:))

# alignmentOccurred(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Triggers feedback to indicate when an alignment occurs, such as snapping an object to a guide or ruler.

## Declaration

```swift
func alignmentOccurred(at location: CGPoint)
```

## See Also

### Reporting canvas events

- [pathCompleted(at:)](pathcompleted%28at_%29.md): Triggers feedback to indicate path completion or shape recognition.

# alignmentOccurredAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Triggers feedback to indicate when an alignment occurs, such as snapping an object to a guide or ruler.

## Declaration

```objectivec
- (void) alignmentOccurredAtLocation:(CGPoint) location;
```

## See Also

### Reporting canvas events

- [pathCompletedAtLocation:](pathcompleted%28at_%29.md): Triggers feedback to indicate path completion or shape recognition.
