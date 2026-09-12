> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintent/init()](https://developer.apple.com/documentation/intents/ingetridestatusintent/init())

# init() (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the get ride status intent object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks for the status of a ride. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# init (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the get ride status intent object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks for the status of a ride. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
