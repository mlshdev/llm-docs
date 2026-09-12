> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacefactory/extendedinterfacecreator](https://developer.apple.com/documentation/tvmlkit/tvinterfacefactory/extendedinterfacecreator)

# extendedInterfaceCreator (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The interface that is being extended.

> Please use SwiftUI or UIKit

## Declaration

```swift
var extendedInterfaceCreator: (any TVInterfaceCreating)? { get set }
```

## Mentioned In

- [Creating TVML Elements](../creating-tvml-elements.md)

<a id="Discussion"></a>

## Discussion

An app can extend or override framework implementation by setting the [extendedInterfaceCreator](extendedinterfacecreator.md) property. An app must provide its own methods to handle custom registered elements.

## See Also

### Extending an Interface

- [shared()](shared%28%29.md): Deprecated. Returns the singleton instance of the interface factory.

# extendedInterfaceCreator (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The interface that is being extended.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<TVInterfaceCreating> extendedInterfaceCreator;
```

## Mentioned In

- [Creating TVML Elements](../creating-tvml-elements.md)

<a id="Discussion"></a>

## Discussion

An app can extend or override framework implementation by setting the [extendedInterfaceCreator](extendedinterfacecreator.md) property. An app must provide its own methods to handle custom registered elements.

## See Also

### Extending an Interface

- [sharedInterfaceFactory](shared%28%29.md): Deprecated. Returns the singleton instance of the interface factory.
