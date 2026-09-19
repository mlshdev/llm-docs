> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cncontactstore/enumeratorforchangehistoryfetchrequest:error:

# enumeratorForChangeHistoryFetchRequest:error:

**Interface language:** Objective-C

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Enumerates a change history fetch request.

## Declaration

```objectivec
- (CNFetchResult<NSEnumerator<CNChangeHistoryEvent *> *> *) enumeratorForChangeHistoryFetchRequest:(CNChangeHistoryFetchRequest *) request error:(NSError **) error;
```

## Parameters

- `request`: A description of the events to fetch.
- `error`: If the fetch fails, contains an [NSError](../../foundation/nserror.md) object with more information.

<a id="Return-Value"></a>

## Return Value

An enumerator of the events matching the result, or `nil` if there was an error.

<a id="Discussion"></a>

## Discussion

Executes the fetch request and returns an enumerator for the results. This can prevent all events from loading into memory at once. An error that occurs during enumeration may throw an exception.

## See Also

### Fetching change history info

- [currentHistoryToken](currenthistorytoken.md): The current history token.
