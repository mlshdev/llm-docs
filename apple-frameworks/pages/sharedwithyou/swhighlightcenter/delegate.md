> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/delegate

# delegate (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The delegate object for the highlight center.

## Declaration

```swift
weak var delegate: (any SWHighlightCenterDelegate)? { get set }
```

## See Also

### Setting the delegate

- [SWHighlightCenterDelegate](../swhighlightcenterdelegate.md): The protocol you use to notify the delegate when the list or rank order of surfaced highlights changes.

# delegate (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The delegate object for the highlight center.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite, nullable) id<SWHighlightCenterDelegate> delegate;
```

## See Also

### Setting the delegate

- [SWHighlightCenterDelegate](../swhighlightcenterdelegate.md): The protocol you use to notify the delegate when the list or rank order of surfaced highlights changes.
