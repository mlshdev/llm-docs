> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aesendpriority](https://developer.apple.com/documentation/coreservices/aesendpriority)

# AESendPriority (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the processing priority for a sent Apple event.

## Declaration

```swift
typealias AESendPriority = Int16
```

<a id="discussion"></a>

## Discussion

When you call the `AESend(_:_:_:_:_:_:_:)` function, you pass a value of type `AESendPriority` for the `sendPriority` parameter. [Priority Constants for the AESend Function (Deprecated in macOS)](apple_events/1542840-priority_constants_for_the_aesen.md) lists the valid constant values for a variable or parameter of this type.

# AESendPriority (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the processing priority for a sent Apple event.

## Declaration

```objectivec
typedef SInt16 AESendPriority;
```

<a id="discussion"></a>

## Discussion

When you call the `AESend` function, you pass a value of type `AESendPriority` for the `sendPriority` parameter. [Priority Constants for the AESend Function (Deprecated in macOS)](1542840-priority_constants_for_the_aesen.md) lists the valid constant values for a variable or parameter of this type.
