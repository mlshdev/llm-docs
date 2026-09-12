> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvdigitentryviewcontroller/entrycompletionhandler](https://developer.apple.com/documentation/tvuikit/tvdigitentryviewcontroller/entrycompletionhandler)

# entryCompletionHandler (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A completion handler that cues the app that the user has entered the required number of digits for the digit entry view.

## Declaration

```swift
var entryCompletionHandler: (String) -> Void { get set }
```

## Parameters

- `entry`: The digits that the user entered into the digit entry view.

<a id="Discussion"></a>

## Discussion

Your app should respond with any required actions in response to the user’s entry.

## See Also

### Entering Information

- [clearEntry(animated:)](clearentry%28animated_%29.md): Removes all digits from the digit entry view.

# entryCompletionHandler (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A completion handler that cues the app that the user has entered the required number of digits for the digit entry view.

## Declaration

```objectivec
@property (nonatomic, copy) void (^entryCompletionHandler)(NSString *entry);
```

## Parameters

- `entry`: The digits that the user entered into the digit entry view.

<a id="Discussion"></a>

## Discussion

Your app should respond with any required actions in response to the user’s entry.

## See Also

### Entering Information

- [clearEntryAnimated:](clearentry%28animated_%29.md): Removes all digits from the digit entry view.
