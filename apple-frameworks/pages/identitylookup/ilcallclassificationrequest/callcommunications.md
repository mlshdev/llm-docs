> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitylookup/ilcallclassificationrequest/callcommunications

# callCommunications (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The calls the user selected to report.

## Declaration

```swift
var callCommunications: [ILCallCommunication] { get }
```

<a id="Discussion"></a>

## Discussion

The system sorts calls by the date received.

Currently, the user has no way to select multiple calls, so the array should only contain one call. However, in order to future-proof your app, always assume the property might contain more than one call.

# callCommunications (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The calls the user selected to report.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<ILCallCommunication *> * callCommunications;
```

<a id="Discussion"></a>

## Discussion

The system sorts calls by the date received.

Currently, the user has no way to select multiple calls, so the array should only contain one call. However, in order to future-proof your app, always assume the property might contain more than one call.
