> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbardelegate/searchbar(_:shouldchangetextinranges:replacementtext:)](https://developer.apple.com/documentation/uikit/uisearchbardelegate/searchbar(_:shouldchangetextinranges:replacementtext:))

# searchBar(\_:shouldChangeTextInRanges:replacementText:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
optional func searchBar(_ searchBar: UISearchBar, shouldChangeTextInRanges ranges: [NSValue], replacementText: String) -> Bool
```

## Parameters

- `searchBar`: The search bar asking the delegate
- `ranges`: The ranges of the text that should be deleted before replacing
- `replacementText`: The replacement text

<a id="return-value"></a>

## Return Value

Returns true if the text at the `ranges` should be replaced.

<a id="discussion"></a>

## Discussion

Asks the delegate if the text at the specified `ranges` should be replaced with `text`.

If this method returns YES then the search bar will, at its own discretion, choose any one of the specified `ranges` of text and replace it with the specified `replacementText` before deleting the text at the other ranges. If the delegate does not implement this method then the `searchBar:shouldChangeTextInRange:replacementText:` method will be called and passed the union range instead. If the delegate also does not implement that method then YES is assumed.

# searchBar:shouldChangeTextInRanges:replacementText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (BOOL) searchBar:(UISearchBar *) searchBar shouldChangeTextInRanges:(NSArray<NSValue *> *) ranges replacementText:(NSString *) replacementText;
```

## Parameters

- `searchBar`: The search bar asking the delegate
- `ranges`: The ranges of the text that should be deleted before replacing
- `replacementText`: The replacement text

<a id="return-value"></a>

## Return Value

Returns true if the text at the `ranges` should be replaced.

<a id="discussion"></a>

## Discussion

Asks the delegate if the text at the specified `ranges` should be replaced with `text`.

If this method returns YES then the search bar will, at its own discretion, choose any one of the specified `ranges` of text and replace it with the specified `replacementText` before deleting the text at the other ranges. If the delegate does not implement this method then the `searchBar:shouldChangeTextInRange:replacementText:` method will be called and passed the union range instead. If the delegate also does not implement that method then YES is assumed.
