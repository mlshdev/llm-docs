> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassviewcontroller/canaddsecureelementpass(configuration:)](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontroller/canaddsecureelementpass(configuration:))

# canAddSecureElementPass(configuration:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether PassKit can create a Secure Element pass using the specified configuration.

## Declaration

```swift
class func canAddSecureElementPass(configuration: PKAddSecureElementPassConfiguration) -> Bool
```

## Parameters

- `configuration`: The configuration to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit validates the configuration; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# canAddSecureElementPassWithConfiguration: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether PassKit can create a Secure Element pass using the specified configuration.

## Declaration

```objectivec
+ (BOOL) canAddSecureElementPassWithConfiguration:(PKAddSecureElementPassConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit validates the configuration; otherwise, [false](https://developer.apple.com/documentation/swift/false).
