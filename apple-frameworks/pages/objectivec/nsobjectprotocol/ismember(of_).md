> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/ismember(of:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/ismember(of:))

# isMember(of:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver is an instance of a given class.

## Declaration

```swift
func isMember(of aClass: AnyClass) -> Bool
```

## Parameters

- `aClass`: A class object representing the Objective-C class to be tested.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is an instance of `aClass`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

For example, in this code, [isMember(of:)](ismember%28of_%29.md) would return [NO](../no.md):

```objc
NSMutableData *myData = [NSMutableData dataWithCapacity:30];
id anArchiver = [[NSArchiver alloc] initForWritingWithMutableData:myData];
if ([anArchiver isMemberOfClass:[NSCoder class]])
    ...
```

Class objects may be compiler-created objects but they still support the concept of membership. Thus, you can use this method to verify that the receiver is a specific Class object.

## See Also

### Testing Object Inheritance, Behavior, and Conformance

- [isKind(of:)](iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [responds(to:)](responds%28to_%29.md): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.
- [conforms(to:)](conforms%28to_%29.md): Returns a Boolean value that indicates whether the receiver conforms to a given protocol.

# isMemberOfClass: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver is an instance of a given class.

## Declaration

```objectivec
- (BOOL) isMemberOfClass:(Class) aClass;
```

## Parameters

- `aClass`: A class object representing the Objective-C class to be tested.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver is an instance of `aClass`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

For example, in this code, [isMemberOfClass:](ismember%28of_%29.md) would return [NO](../no.md):

```objc
NSMutableData *myData = [NSMutableData dataWithCapacity:30];
id anArchiver = [[NSArchiver alloc] initForWritingWithMutableData:myData];
if ([anArchiver isMemberOfClass:[NSCoder class]])
    ...
```

Class objects may be compiler-created objects but they still support the concept of membership. Thus, you can use this method to verify that the receiver is a specific Class object.

## See Also

### Testing Object Inheritance, Behavior, and Conformance

- [isKindOfClass:](iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [respondsToSelector:](responds%28to_%29.md): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.
- [conformsToProtocol:](conforms%28to_%29.md): Returns a Boolean value that indicates whether the receiver conforms to a given protocol.
