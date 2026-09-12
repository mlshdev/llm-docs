> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitemenumerationoptions](https://developer.apple.com/documentation/appkit/nsdraggingitemenumerationoptions)

# NSDraggingItemEnumerationOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.7+

A group of constants that specify options to use when enumerating dragging items.

## Declaration

```swift
struct NSDraggingItemEnumerationOptions
```

## Topics

### Constants

- [concurrent](nsdraggingitemenumerationoptions/concurrent.md): A constant that indicates the enumeration processes dragging items concurrently.
- [clearNonenumeratedImages](nsdraggingitemenumerationoptions/clearnonenumeratedimages.md): A constant that indicates the enumeration clears the image components provider for all dragging items that don’t meet the classes and search options criteria.

### Initializers

- [init(rawValue:)](nsdraggingitemenumerationoptions/init%28rawvalue_%29.md): Creates a dragging enumeration option with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.

# NSDraggingItemEnumerationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

A group of constants that specify options to use when enumerating dragging items.

## Declaration

```objectivec
enum NSDraggingItemEnumerationOptions : NSUInteger;
```

## Topics

### Constants

- [NSDraggingItemEnumerationConcurrent](nsdraggingitemenumerationoptions/concurrent.md): A constant that indicates the enumeration processes dragging items concurrently.
- [NSDraggingItemEnumerationClearNonenumeratedImages](nsdraggingitemenumerationoptions/clearnonenumeratedimages.md): A constant that indicates the enumeration clears the image components provider for all dragging items that don’t meet the classes and search options criteria.

## See Also

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.
