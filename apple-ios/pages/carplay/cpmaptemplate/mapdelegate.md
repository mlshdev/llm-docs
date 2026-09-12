> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/mapdelegate](https://developer.apple.com/documentation/carplay/cpmaptemplate/mapdelegate)

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

### Handling Map Template Events

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

### Handling Map Template Events

- [CPMapTemplateDelegate](../cpmaptemplatedelegate.md): The protocol an object implements to handle events from a map template.
