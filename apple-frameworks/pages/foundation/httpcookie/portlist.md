> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/portlist](https://developer.apple.com/documentation/foundation/httpcookie/portlist)

# portList (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s port list.

## Declaration

```swift
var portList: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

The list of ports for the cookie, returned as an array of `NSNumber` objects containing integers. If the cookie has no port list, the value of this property is `nil` and the cookie will be sent to any port. Otherwise, the cookie is only sent to ports specified in the port list.

## See Also

### Getting cookie host properties

- [domain](domain.md): The domain of the cookie.
- [path](path.md): The cookie’s path.

# portList (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie’s port list.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSNumber *> * portList;
```

<a id="Discussion"></a>

## Discussion

The list of ports for the cookie, returned as an array of `NSNumber` objects containing integers. If the cookie has no port list, the value of this property is `nil` and the cookie will be sent to any port. Otherwise, the cookie is only sent to ports specified in the port list.

## See Also

### Getting cookie host properties

- [domain](domain.md): The domain of the cookie.
- [path](path.md): The cookie’s path.
