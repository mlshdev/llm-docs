> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/absearchelement/matchesrecord(_:)

# matchesRecord(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Tests whether or not a record matches a search element.

## Declaration

```swift
func matchesRecord(_ record: ABRecord!) -> Bool
```

## Parameters

- `record`: The record to be tested against the search object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `record` argument satisfies the conditions in the search element; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `record` is `nil`, this method raises an exception.

# matchesRecord: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Tests whether or not a record matches a search element.

## Declaration

```objectivec
- (BOOL) matchesRecord:(ABRecord *) record;
```

## Parameters

- `record`: The record to be tested against the search object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `record` argument satisfies the conditions in the search element; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `record` is `nil`, this method raises an exception.
