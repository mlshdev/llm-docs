> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintentresponse/code](https://developer.apple.com/documentation/intents/inrequestrideintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INRequestRideIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INRequestRideIntentResponseCode](../inrequestrideintentresponsecode.md): Constants indicating the state of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INRequestRideIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INRequestRideIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INRequestRideIntentResponseCode](../inrequestrideintentresponsecode.md): Constants indicating the state of the response.
