> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/userinfo-swift.property](https://developer.apple.com/documentation/foundation/nsexception/userinfo-swift.property)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing application-specific data pertaining to the receiver.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if no application-specific data exists. As an example, if a method’s return value caused the exception to be raised, the return value might be available to the exception handler through this method.

## See Also

### Related Documentation

- [init(name:reason:userInfo:)](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.

### Querying an NSException Object

- [name](name-swift.property.md): A string used to uniquely identify the receiver.
- [reason](reason-swift.property.md): A string containing a “human-readable” reason for the receiver.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing application-specific data pertaining to the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

`nil` if no application-specific data exists. As an example, if a method’s return value caused the exception to be raised, the return value might be available to the exception handler through this method.

## See Also

### Related Documentation

- [initWithName:reason:userInfo:](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .

### Querying an NSException Object

- [name](name-swift.property.md): A string used to uniquely identify the receiver.
- [reason](reason-swift.property.md): A string containing a “human-readable” reason for the receiver.
