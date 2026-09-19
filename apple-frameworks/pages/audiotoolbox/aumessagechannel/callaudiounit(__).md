> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/aumessagechannel/callaudiounit(_:)

# callAudioUnit(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Sends an audio unit a custom data message.

## Declaration

```swift
optional func callAudioUnit(_ message: [AnyHashable : Any]) -> [AnyHashable : Any]
```

## Parameters

- `message`: The data to send the audio unit.

<a id="return-value"></a>

## Return Value

A dictionary with custom data.

<a id="Discussion"></a>

## Discussion

The valid values for key and value types are `NSArray`, `NSDictionary`, `NSOrderedSet`, `NSSet`, `NSString`, `NSData`, `NSNull`, `NSNumber`, and `NSDate`.

# callAudioUnit: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Sends an audio unit a custom data message.

## Declaration

```objectivec
- (NSDictionary *) callAudioUnit:(NSDictionary *) message;
```

## Parameters

- `message`: The data to send the audio unit.

<a id="return-value"></a>

## Return Value

A dictionary with custom data.

<a id="Discussion"></a>

## Discussion

The valid values for key and value types are `NSArray`, `NSDictionary`, `NSOrderedSet`, `NSSet`, `NSString`, `NSData`, `NSNull`, `NSNumber`, and `NSDate`.
