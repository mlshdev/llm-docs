> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsearchtemplate/delegate

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The object that serves as the search template’s delegate.

## Declaration

```swift
weak var delegate: (any CPSearchTemplateDelegate)? { get set }
```

## See Also

### Providing a Search Template Delegate

- [CPSearchTemplateDelegate](../cpsearchtemplatedelegate.md): The interface for an object that serves as the search template’s delegate.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The object that serves as the search template’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CPSearchTemplateDelegate> delegate;
```

## See Also

### Providing a Search Template Delegate

- [CPSearchTemplateDelegate](../cpsearchtemplatedelegate.md): The interface for an object that serves as the search template’s delegate.
