> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/canceltextanimations(identifiers:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/canceltextanimations(identifiers:))

# cancelTextAnimations(identifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Used to support the presentation of grammar issues in text. If it is necessary to cancel the animation of one or more issues, call this to cancel theanimations.

## Declaration

```swift
func cancelTextAnimations(identifiers: [UUID])
```

<a id="discussion"></a>

## Discussion

The UUIDs passed in should be those returned when starting the animations. To cancel all ahimations, use [stopWritingTools()](stopwritingtools%28%29.md) instead.

# cancelTextAnimationsWithIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Used to support the presentation of grammar issues in text. If it is necessary to cancel the animation of one or more issues, call this to cancel theanimations.

## Declaration

```objectivec
- (void) cancelTextAnimationsWithIdentifiers:(NSArray<NSUUID *> *) identifiers;
```

<a id="discussion"></a>

## Discussion

The UUIDs passed in should be those returned when starting the animations. To cancel all ahimations, use [stopWritingTools](stopwritingtools%28%29.md) instead.
