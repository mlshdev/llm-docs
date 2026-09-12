> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplate/pointofinterestdelegate](https://developer.apple.com/documentation/carplay/cppointofinteresttemplate/pointofinterestdelegate)

# pointOfInterestDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The object that serves as the template’s delegate.

## Declaration

```swift
weak var pointOfInterestDelegate: (any CPPointOfInterestTemplateDelegate)? { get set }
```

## See Also

### Handling Template Events

- [CPPointOfInterestTemplateDelegate](../cppointofinteresttemplatedelegate.md): The methods to handle a Point of Interest template’s events.

# pointOfInterestDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The object that serves as the template’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CPPointOfInterestTemplateDelegate> pointOfInterestDelegate;
```

## See Also

### Handling Template Events

- [CPPointOfInterestTemplateDelegate](../cppointofinteresttemplatedelegate.md): The methods to handle a Point of Interest template’s events.
