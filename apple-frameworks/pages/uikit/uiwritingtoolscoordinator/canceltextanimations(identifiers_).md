> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/canceltextanimations(identifiers:)](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/canceltextanimations(identifiers:))

# cancelTextAnimations(identifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Used to support the presentation of grammar issues in text. If it is necessary to cancel the animation of one or more issues, call this to cancel theanimations.

## Declaration

```swift
func cancelTextAnimations(identifiers: [UUID])
```

<a id="discussion"></a>

## Discussion

The UUIDs passed in should be those returned when starting the animations. To cancel all ahimations, use [stopWritingTools()](stopwritingtools%28%29.md) instead.

# cancelTextAnimationsWithIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Used to support the presentation of grammar issues in text. If it is necessary to cancel the animation of one or more issues, call this to cancel theanimations.

## Declaration

```objectivec
- (void) cancelTextAnimationsWithIdentifiers:(NSArray<NSUUID *> *) identifiers;
```

<a id="discussion"></a>

## Discussion

The UUIDs passed in should be those returned when starting the animations. To cancel all ahimations, use [stopWritingTools](stopwritingtools%28%29.md) instead.
