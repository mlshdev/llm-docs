> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/intent](https://developer.apple.com/documentation/intents/ininteraction/intent)

# intent (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The intent object that describes the user’s request.

## Declaration

```swift
@NSCopying var intent: INIntent { get }
```

<a id="Discussion"></a>

## Discussion

This property is set at initialization time and cannot be changed later. Use the object in this property to get information about the user’s initial request.

## See Also

### Getting the Intent and Response

- [intentResponse](intentresponse.md): The response object that your app created in response to the request.

# intent (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The intent object that describes the user’s request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INIntent * intent;
```

```objectivec
@property (atomic, copy, readonly) INIntent * intent;
```

<a id="Discussion"></a>

## Discussion

This property is set at initialization time and cannot be changed later. Use the object in this property to get information about the user’s initial request.

## See Also

### Getting the Intent and Response

- [intentResponse](intentresponse.md): The response object that your app created in response to the request.
