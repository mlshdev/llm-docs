> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacefactory](https://developer.apple.com/documentation/tvmlkit/tvinterfacefactory)

# TVInterfaceFactory (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A factory for the creation of views and view controllers.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVInterfaceFactory
```

<a id="overview"></a>

## Overview

The app can extend or override the framework implementation by setting [extendedInterfaceCreator](tvinterfacefactory/extendedinterfacecreator.md).

## Topics

### Extending an Interface

- [extendedInterfaceCreator](tvinterfacefactory/extendedinterfacecreator.md): Deprecated. The interface that is being extended.
- [shared()](tvinterfacefactory/shared%28%29.md): Deprecated. Returns the singleton instance of the interface factory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [TVInterfaceCreating](tvinterfacecreating.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.

# TVInterfaceFactory (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A factory for the creation of views and view controllers.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVInterfaceFactory : NSObject
```

<a id="overview"></a>

## Overview

The app can extend or override the framework implementation by setting [extendedInterfaceCreator](tvinterfacefactory/extendedinterfacecreator.md).

## Topics

### Extending an Interface

- [extendedInterfaceCreator](tvinterfacefactory/extendedinterfacecreator.md): Deprecated. The interface that is being extended.
- [sharedInterfaceFactory](tvinterfacefactory/shared%28%29.md): Deprecated. Returns the singleton instance of the interface factory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [TVInterfaceCreating](tvinterfacecreating.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.
