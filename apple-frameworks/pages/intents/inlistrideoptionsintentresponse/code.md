> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inlistrideoptionsintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INListRideOptionsIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INListRideOptionsIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INListRideOptionsIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.
