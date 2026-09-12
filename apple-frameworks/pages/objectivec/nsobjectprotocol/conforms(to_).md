> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/conforms(to:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/conforms(to:))

# conforms(to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver conforms to a given protocol.

## Declaration

```swift
func conforms(to aProtocol: Protocol) -> Bool
```

## Parameters

- `aProtocol`: A protocol object that represents a particular protocol.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver conforms to `aProtocol`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

This method works identically to the [conforms(to:)](../nsobject-swift.class/conforms%28to_%29.md) class method declared in [NSObject](../nsobject-swift.class.md). It’s provided as a convenience so that you don’t need to get the class object to find out whether an instance can respond to a given set of messages.

## See Also

### Testing Object Inheritance, Behavior, and Conformance

- [isKind(of:)](iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [isMember(of:)](ismember%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of a given class.
- [responds(to:)](responds%28to_%29.md): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.

# conformsToProtocol: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver conforms to a given protocol.

## Declaration

```objectivec
- (BOOL) conformsToProtocol:(Protocol *) aProtocol;
```

## Parameters

- `aProtocol`: A protocol object that represents a particular protocol.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver conforms to `aProtocol`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

This method works identically to the [conformsToProtocol:](../nsobject-swift.class/conforms%28to_%29.md) class method declared in [NSObject](../nsobject-swift.class.md). It’s provided as a convenience so that you don’t need to get the class object to find out whether an instance can respond to a given set of messages.

## See Also

### Testing Object Inheritance, Behavior, and Conformance

- [isKindOfClass:](iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [isMemberOfClass:](ismember%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of a given class.
- [respondsToSelector:](responds%28to_%29.md): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.
