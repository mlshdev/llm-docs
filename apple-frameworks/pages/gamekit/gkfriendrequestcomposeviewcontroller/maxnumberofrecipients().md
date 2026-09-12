> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendrequestcomposeviewcontroller/maxnumberofrecipients()](https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontroller/maxnumberofrecipients())

# maxNumberOfRecipients() (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Returns the maximum number of recipients permitted in a single request.

> No longer supported.

## Declaration

```swift
class func maxNumberOfRecipients() -> Int
```

<a id="return-value"></a>

## Return Value

The maximum number of recipients.

<a id="Discussion"></a>

## Discussion

If you add more recipients than the value returned from this method, GameKit throws an exception.

# maxNumberOfRecipients (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Returns the maximum number of recipients permitted in a single request.

> No longer supported.

## Declaration

```objectivec
+ (NSUInteger) maxNumberOfRecipients;
```

<a id="return-value"></a>

## Return Value

The maximum number of recipients.

<a id="Discussion"></a>

## Discussion

If you add more recipients than the value returned from this method, GameKit throws an exception.
