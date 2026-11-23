> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/mapdelegate

# mapDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The object that serves as the delegate of the map template.

## Declaration

```swift
weak var mapDelegate: (any CPMapTemplateDelegate)? { get set }
```

## See Also

### Responding to map-related events

- [CPMapTemplateDelegate](../cpmaptemplatedelegate.md): The protocol an object implements to handle events from a map template.

# mapDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The object that serves as the delegate of the map template.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CPMapTemplateDelegate> mapDelegate;
```

## See Also

### Responding to map-related events

- [CPMapTemplateDelegate](../cpmaptemplatedelegate.md): The protocol an object implements to handle events from a map template.
