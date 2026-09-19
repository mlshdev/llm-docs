> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/increatenoteintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The code indicating whether you successfully handled the intent.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var code: INCreateNoteIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set at initialization time and cannot be changed later.

## See Also

### Getting the Response Code

- [INCreateNoteIntentResponseCode](../increatenoteintentresponsecode.md): Deprecated. Constants indicating the state of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The code indicating whether you successfully handled the intent.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, readonly) INCreateNoteIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INCreateNoteIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set at initialization time and cannot be changed later.

## See Also

### Getting the Response Code

- [INCreateNoteIntentResponseCode](../increatenoteintentresponsecode.md): Deprecated. Constants indicating the state of the response.
