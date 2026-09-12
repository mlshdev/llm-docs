> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ininteraction/intentresponse](https://developer.apple.com/documentation/intents/ininteraction/intentresponse)

# intentResponse (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The response object that your app created in response to the request.

## Declaration

```swift
@NSCopying var intentResponse: INIntentResponse? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set at initialization time and cannot be changed later. Use this property to retrieve your app’s response to the specified [intent](intent.md) object.

## See Also

### Getting the Intent and Response

- [intent](intent.md): The intent object that describes the user’s request.

# intentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The response object that your app created in response to the request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INIntentResponse * intentResponse;
```

```objectivec
@property (atomic, copy, readonly, nullable) INIntentResponse * intentResponse;
```

<a id="Discussion"></a>

## Discussion

This property is set at initialization time and cannot be changed later. Use this property to retrieve your app’s response to the specified [intent](intent.md) object.

## See Also

### Getting the Intent and Response

- [intent](intent.md): The intent object that describes the user’s request.
