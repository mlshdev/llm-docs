> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstorage/delegate](https://developer.apple.com/documentation/appkit/nstextcontentstorage/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the content storage object.

## Declaration

```swift
weak var delegate: (any NSTextContentStorageDelegate)? { get set }
```

## See Also

### Accessing paragraphs

- [NSTextContentStorageDelegate](../nstextcontentstoragedelegate.md): The optional methods that delegates of content storage objects implement to handle content processing.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the content storage object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextContentStorageDelegate> delegate;
```

## See Also

### Accessing paragraphs

- [NSTextContentStorageDelegate](../nstextcontentstoragedelegate.md): The optional methods that delegates of content storage objects implement to handle content processing.
