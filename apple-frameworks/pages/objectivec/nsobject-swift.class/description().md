> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/description()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/description())

# description() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a string that represents the contents of the receiving class.

## Declaration

```swift
class func description() -> String
```

<a id="return-value"></a>

## Return Value

A string that represents the contents of the receiving class.

<a id="Discussion"></a>

## Discussion

The debugger’s print-object command invokes this method to produce a textual description of an object.

`NSObject`’s implementation of this method simply prints the name of the class.

## See Also

### Related Documentation

- [description](../nsobjectprotocol/description.md): A textual representation of the receiver.

# description (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a string that represents the contents of the receiving class.

## Declaration

```objectivec
+ (NSString *) description;
```

<a id="return-value"></a>

## Return Value

A string that represents the contents of the receiving class.

<a id="Discussion"></a>

## Discussion

The debugger’s print-object command invokes this method to produce a textual description of an object.

`NSObject`’s implementation of this method simply prints the name of the class.

## See Also

### Related Documentation

- [description](../nsobjectprotocol/description.md): A textual representation of the receiver.
