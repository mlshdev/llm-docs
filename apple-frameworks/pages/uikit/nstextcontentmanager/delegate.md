> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanager/delegate](https://developer.apple.com/documentation/uikit/nstextcontentmanager/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate for the content manager object.

## Declaration

```objectivec
@property (weak, nullable) id<NSTextContentManagerDelegate> delegate;
```

## See Also

### Customizing and validating text elements

- [NSTextContentManagerDelegate](../nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
- [NSTextContentManagerEnumerationOptions](enumerationoptions.md): Values that control the order in which the framework enumerates text elements.
