> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextcontentstorage/delegate

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the content storage object.

## Declaration

```swift
weak var delegate: (any NSTextContentStorageDelegate)? { get set }
```

## See Also

### Accessing paragraphs

- [NSTextContentStorageDelegate](../nstextcontentstoragedelegate.md): The optional methods that delegates of content storage objects implement to handle content processing.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the content storage object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextContentStorageDelegate> delegate;
```

## See Also

### Accessing paragraphs

- [NSTextContentStorageDelegate](../nstextcontentstoragedelegate.md): The optional methods that delegates of content storage objects implement to handle content processing.
