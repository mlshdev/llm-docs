> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/delegate

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

The object that serves as the delegate to the list template.

> For selection, use the handler on [CPSelectableListItem](../cpselectablelistitem.md) instead.

## Declaration

```swift
weak var delegate: (any CPListTemplateDelegate)? { get set }
```

## See Also

### Responding to List Events

- [CPListTemplateDelegate](../cplisttemplatedelegate.md): Deprecated. The interface an object implements to serve as the delegate for a list template.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

The object that serves as the delegate to the list template.

> For selection, use the handler on [CPSelectableListItem](../cpselectablelistitem.md) instead.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CPListTemplateDelegate> delegate;
```

## See Also

### Responding to List Events

- [CPListTemplateDelegate](../cplisttemplatedelegate.md): Deprecated. The interface an object implements to serve as the delegate for a list template.
