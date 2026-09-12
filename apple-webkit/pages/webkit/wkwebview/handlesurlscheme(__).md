> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/handlesurlscheme(_:)](https://developer.apple.com/documentation/webkit/wkwebview/handlesurlscheme(_:))

# handlesURLScheme(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns a Boolean value that indicates whether WebKit natively supports resources with the specified URL scheme.

## Declaration

```swift
class func handlesURLScheme(_ urlScheme: String) -> Bool
```

## Parameters

- `urlScheme`: The URL scheme associated with the resource.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if WebKit provides native support for the URL scheme, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

# handlesURLScheme: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns a Boolean value that indicates whether WebKit natively supports resources with the specified URL scheme.

## Declaration

```objectivec
+ (BOOL) handlesURLScheme:(NSString *) urlScheme;
```

## Parameters

- `urlScheme`: The URL scheme associated with the resource.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if WebKit provides native support for the URL scheme, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.
