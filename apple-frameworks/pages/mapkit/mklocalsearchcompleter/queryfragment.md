> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/queryfragment](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/queryfragment)

# queryFragment (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The search string that you want completions for.

## Declaration

```swift
var queryFragment: String { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a string to this property initiates a search based on that string. The completer object waits a short amount of time before initiating new searches. This delay gives you enough time to update the search string based on typed input from the user. For example, if you’re using a text field to manage the input from the user, use the [textField(\_:shouldChangeCharactersIn:replacementString:)](../../uikit/uitextfielddelegate/textfield%28__shouldchangecharactersin_replacementstring_%29.md) method of the text field’s delegate to update the value of this property, as the following example shows:

```objc
- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range
         replacementString:(NSString *)string {
    self.completer.queryFragment = textField.text;
 
    return YES;
}
```

## See Also

### Specifying the query attributes

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [region](region.md): The region that defines the geographic scope of the search.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point of interest categories to include or exclude in the search.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKLocalSearchCompleter.FilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleter.ResultType](resulttype.md): Options that indicate types of search completions.

# queryFragment (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The search string that you want completions for.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * queryFragment;
```

<a id="Discussion"></a>

## Discussion

Assigning a string to this property initiates a search based on that string. The completer object waits a short amount of time before initiating new searches. This delay gives you enough time to update the search string based on typed input from the user. For example, if you’re using a text field to manage the input from the user, use the [textField:shouldChangeCharactersInRange:replacementString:](../../uikit/uitextfielddelegate/textfield%28__shouldchangecharactersin_replacementstring_%29.md) method of the text field’s delegate to update the value of this property, as the following example shows:

```objc
- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range
         replacementString:(NSString *)string {
    self.completer.queryFragment = textField.text;
 
    return YES;
}
```

## See Also

### Specifying the query attributes

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [region](region.md): The region that defines the geographic scope of the search.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point of interest categories to include or exclude in the search.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKSearchCompletionFilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleterResultType](resulttype.md): Options that indicate types of search completions.
