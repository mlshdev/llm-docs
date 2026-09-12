> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponse/code](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The code indicating whether your app successfully handled the intent.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var code: INSearchForNotebookItemsIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and cannot be changed later.

## See Also

### Getting the Response Code

- [INSearchForNotebookItemsIntentResponseCode](../insearchfornotebookitemsintentresponsecode.md): Deprecated. Constants indicating the state of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The code indicating whether your app successfully handled the intent.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, readonly) INSearchForNotebookItemsIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INSearchForNotebookItemsIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and cannot be changed later.

## See Also

### Getting the Response Code

- [INSearchForNotebookItemsIntentResponseCode](../insearchfornotebookitemsintentresponsecode.md): Deprecated. Constants indicating the state of the response.
