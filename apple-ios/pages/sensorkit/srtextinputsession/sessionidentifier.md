> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srtextinputsession/sessionidentifier](https://developer.apple.com/documentation/sensorkit/srtextinputsession/sessionidentifier)

# sessionIdentifier (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A unique identifier for the keyboard session.

## Declaration

```swift
var sessionIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to correlate the current stream with other streams that use the keyboard.

# sessionIdentifier (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A unique identifier for the keyboard session.

## Declaration

```objectivec
@property (copy, readonly) NSString * sessionIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this property to correlate the current stream with other streams that use the keyboard.
