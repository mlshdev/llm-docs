> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppointofinteresttemplate/pointofinterestdelegate

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
