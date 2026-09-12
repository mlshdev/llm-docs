> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvdigitentryviewcontroller/clearentry(animated:)](https://developer.apple.com/documentation/tvuikit/tvdigitentryviewcontroller/clearentry(animated:))

# clearEntry(animated:) (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+

Removes all digits from the digit entry view.

## Declaration

```swift
func clearEntry(animated: Bool)
```

## Parameters

- `animated`: A Boolean value indicating whether the digit entry view animates when the digits are cleared.

<a id="Discussion"></a>

## Discussion

The digit entry view animates the digit removal when the `animated` parameter is `YES`.

## See Also

### Entering Information

- [entryCompletionHandler](entrycompletionhandler.md): A completion handler that cues the app that the user has entered the required number of digits for the digit entry view.

# clearEntryAnimated: (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+

Removes all digits from the digit entry view.

## Declaration

```objectivec
- (void) clearEntryAnimated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value indicating whether the digit entry view animates when the digits are cleared.

<a id="Discussion"></a>

## Discussion

The digit entry view animates the digit removal when the `animated` parameter is `YES`.

## See Also

### Entering Information

- [entryCompletionHandler](entrycompletionhandler.md): A completion handler that cues the app that the user has entered the required number of digits for the digit entry view.
