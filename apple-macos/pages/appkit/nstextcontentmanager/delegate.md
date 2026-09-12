> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/delegate](https://developer.apple.com/documentation/appkit/nstextcontentmanager/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the content manager object.

## Declaration

```swift
weak var delegate: (any NSTextContentManagerDelegate)? { get set }
```

## See Also

### Customizing and validating text elements

- [NSTextContentManagerDelegate](../nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
- [NSTextContentManager.EnumerationOptions](enumerationoptions.md): Values that control the order in which the framework enumerates text elements.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The delegate for the content manager object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextContentManagerDelegate> delegate;
```

## See Also

### Customizing and validating text elements

- [NSTextContentManagerDelegate](../nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
- [NSTextContentManagerEnumerationOptions](enumerationoptions.md): Values that control the order in which the framework enumerates text elements.
