> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchtextfielddelegate/searchtextfield(_:didselect:)

# searchTextField(\_:didSelect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when a person selects a search suggestion in the search text field.

## Declaration

```swift
optional func searchTextField(_ searchTextField: UISearchTextField, didSelect suggestion: any UISearchSuggestion)
```

## Parameters

- `searchTextField`: The search text field displaying search suggestions.
- `suggestion`: The suggestion a person selects.

<a id="Discussion"></a>

## Discussion

Implement this method to execute any necessary updates when a person chooses a search suggestion.

# searchTextField:didSelectSuggestion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when a person selects a search suggestion in the search text field.

## Declaration

```objectivec
- (void) searchTextField:(UISearchTextField *) searchTextField didSelectSuggestion:(id<UISearchSuggestion>) suggestion;
```

## Parameters

- `searchTextField`: The search text field displaying search suggestions.
- `suggestion`: The suggestion a person selects.

<a id="Discussion"></a>

## Discussion

Implement this method to execute any necessary updates when a person chooses a search suggestion.
