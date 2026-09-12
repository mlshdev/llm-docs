> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/handle](https://developer.apple.com/documentation/intents/inperson/handle)

# handle (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

The unique identifier that your app assigned to the user.

> Use personHandle instead

## Declaration

```swift
var handle: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the string that you specified at initialization time. Use this string to identify the user uniquely in your app. For example, you might specify an email address, phone number, or account name associated with the user. Siri may show this string when asking the user to choose from among several people with similar names.

# handle (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

The unique identifier that your app assigned to the user.

> Use personHandle instead

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * handle;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * handle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the string that you specified at initialization time. Use this string to identify the user uniquely in your app. For example, you might specify an email address, phone number, or account name associated with the user. Siri may show this string when asking the user to choose from among several people with similar names.
