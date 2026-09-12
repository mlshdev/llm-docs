> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/records(matching:)](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/records(matching:))

# records(matching:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of records that match the given search element, or returns an empty array if no records match the search element.

## Declaration

```swift
func records(matching search: ABSearchElement!) -> [Any]!
```

## Parameters

- `search`: The search element to perform the search against.

<a id="return-value"></a>

## Return Value

An array of records that match the given search element, or an empty array if no records match the search element.

<a id="Discussion"></a>

## Discussion

If `search` is `nil`, this method raises an exception.

# recordsMatchingSearchElement: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of records that match the given search element, or returns an empty array if no records match the search element.

## Declaration

```objectivec
- (NSArray *) recordsMatchingSearchElement:(ABSearchElement *) search;
```

## Parameters

- `search`: The search element to perform the search against.

<a id="return-value"></a>

## Return Value

An array of records that match the given search element, or an empty array if no records match the search element.

<a id="Discussion"></a>

## Discussion

If `search` is `nil`, this method raises an exception.
