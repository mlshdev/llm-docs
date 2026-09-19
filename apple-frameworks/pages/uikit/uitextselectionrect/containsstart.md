> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextselectionrect/containsstart

# containsStart (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the rectangle contains the start of the selection.

## Declaration

```swift
var containsStart: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is used to determine the placement of the selection handles in bidirectional text. It provides a clue to the system about whether the start of the selection is in the specified rectangle.

## See Also

### Determining the Selection Status

- [containsEnd](containsend.md): A Boolean value that indicates whether the rectangle contains the end of the selection.

# containsStart (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the rectangle contains the start of the selection.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL containsStart;
```

<a id="Discussion"></a>

## Discussion

The value of this property is used to determine the placement of the selection handles in bidirectional text. It provides a clue to the system about whether the start of the selection is in the specified rectangle.

## See Also

### Determining the Selection Status

- [containsEnd](containsend.md): A Boolean value that indicates whether the rectangle contains the end of the selection.
