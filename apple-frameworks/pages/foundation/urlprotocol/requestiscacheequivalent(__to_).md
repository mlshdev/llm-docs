> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/requestiscacheequivalent(_:to:)](https://developer.apple.com/documentation/foundation/urlprotocol/requestiscacheequivalent(_:to:))

# requestIsCacheEquivalent(\_:to:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether two requests are equivalent for cache purposes.

## Declaration

```swift
class func requestIsCacheEquivalent(_ a: URLRequest, to b: URLRequest) -> Bool
```

## Parameters

- `a`: The request to compare with `bRequest`.
- `b`: The request to compare with `aRequest`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aRequest` and `bRequest` are equivalent for cache purposes, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Requests are considered equivalent for cache purposes if and only if they would be handled by the same protocol and that protocol declares them equivalent after performing implementation-specific checks.

The [URLProtocol](../urlprotocol.md) implementation of this method compares the URLs of the requests to determine if the requests should be considered equivalent. Subclasses can override this method to provide protocol-specific comparisons.

# requestIsCacheEquivalent:toRequest: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether two requests are equivalent for cache purposes.

## Declaration

```objectivec
+ (BOOL) requestIsCacheEquivalent:(NSURLRequest *) a toRequest:(NSURLRequest *) b;
```

## Parameters

- `a`: The request to compare with `bRequest`.
- `b`: The request to compare with `aRequest`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aRequest` and `bRequest` are equivalent for cache purposes, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Requests are considered equivalent for cache purposes if and only if they would be handled by the same protocol and that protocol declares them equivalent after performing implementation-specific checks.

The [NSURLProtocol](../urlprotocol.md) implementation of this method compares the URLs of the requests to determine if the requests should be considered equivalent. Subclasses can override this method to provide protocol-specific comparisons.
