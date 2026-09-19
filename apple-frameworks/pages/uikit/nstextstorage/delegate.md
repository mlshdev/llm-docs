> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextstorage/delegate

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The delegate for the text storage object.

## Declaration

```swift
weak var delegate: (any NSTextStorageDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use a delegate object to monitor edits occurring to the text contents. Your delegate object must conform to the [NSTextStorageDelegate](../nstextstoragedelegate.md) protocol.

## See Also

### Processing the editing actions

- [NSTextStorageDelegate](../nstextstoragedelegate.md): The optional methods that delegates of text storage objects implement to handle text-edit processing.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The delegate for the text storage object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<NSTextStorageDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use a delegate object to monitor edits occurring to the text contents. Your delegate object must conform to the [NSTextStorageDelegate](../nstextstoragedelegate.md) protocol.

## See Also

### Processing the editing actions

- [NSTextStorageDelegate](../nstextstoragedelegate.md): The optional methods that delegates of text storage objects implement to handle text-edit processing.
