> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsproxy/responds(to:)](https://developer.apple.com/documentation/foundation/nsproxy/responds(to:))

# responds(to:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiving class responds to a given selector.

## Declaration

```swift
class func responds(to aSelector: Selector) -> Bool
```

## Parameters

- `aSelector`: A selector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiving class responds to `aSelector` messages, otherwise [false](https://developer.apple.com/documentation/swift/false).

# respondsToSelector: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiving class responds to a given selector.

## Declaration

```objectivec
+ (BOOL) respondsToSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A selector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiving class responds to `aSelector` messages, otherwise [false](https://developer.apple.com/documentation/swift/false).
