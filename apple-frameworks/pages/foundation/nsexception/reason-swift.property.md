> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexception/reason-swift.property](https://developer.apple.com/documentation/foundation/nsexception/reason-swift.property)

# reason (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing a “human-readable” reason for the receiver.

## Declaration

```swift
var reason: String? { get }
```

## See Also

### Related Documentation

- [init(name:reason:userInfo:)](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.

### Querying an NSException Object

- [name](name-swift.property.md): A string used to uniquely identify the receiver.
- [userInfo](userinfo-swift.property.md): A dictionary containing application-specific data pertaining to the receiver.

# reason (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing a “human-readable” reason for the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * reason;
```

## See Also

### Related Documentation

- [initWithName:reason:userInfo:](init%28name_reason_userinfo_%29.md): Initializes and returns a newly allocated exception object.
- [exceptionWithName:reason:userInfo:](exceptionwithname_reason_userinfo_.md): Creates and returns an exception object .

### Querying an NSException Object

- [name](name-swift.property.md): A string used to uniquely identify the receiver.
- [userInfo](userinfo-swift.property.md): A dictionary containing application-specific data pertaining to the receiver.
