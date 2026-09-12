> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessinstancevariablesdirectly](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessinstancevariablesdirectly)

# accessInstanceVariablesDirectly (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the key-value coding methods should access the corresponding instance variable directly on finding no accessor method for a property.

## Declaration

```swift
class var accessInstanceVariablesDirectly: Bool { get }
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the key-value coding methods should access the corresponding instance variable directly on finding no accessor method for a property, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The default returns [YES](../yes.md). Subclasses can override it to return [NO](../no.md), in which case the key-value coding methods won’t access instance variables.

# accessInstanceVariablesDirectly (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the key-value coding methods should access the corresponding instance variable directly on finding no accessor method for a property.

## Declaration

```objectivec
@property (class, readonly) BOOL accessInstanceVariablesDirectly;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the key-value coding methods should access the corresponding instance variable directly on finding no accessor method for a property, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The default returns [YES](../yes.md). Subclasses can override it to return [NO](../no.md), in which case the key-value coding methods won’t access instance variables.
