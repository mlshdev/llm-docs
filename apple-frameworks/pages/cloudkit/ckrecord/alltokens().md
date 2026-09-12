> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/alltokens()](https://developer.apple.com/documentation/cloudkit/ckrecord/alltokens())

# allTokens() (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns an array of strings to use for full-text searches of the field’s string-based values.

## Declaration

```swift
func allTokens() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of strings that contains data from the record’s string-based fields.

<a id="discussion"></a>

## Discussion

When performing your own full-text searches, you can use this method to get a list of strings for your search. The method acts only on keys with string values. It breaks each value string apart at whitespace boundaries, creates new strings for each word, adds the new strings to an array, and returns the array. This tokenized version of the record’s string values makes it easier to do string-based comparisons of individual words.

# allTokens (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns an array of strings to use for full-text searches of the field’s string-based values.

## Declaration

```objectivec
- (NSArray<NSString *> *) allTokens;
```

<a id="return-value"></a>

## Return Value

An array of strings that contains data from the record’s string-based fields.

<a id="discussion"></a>

## Discussion

When performing your own full-text searches, you can use this method to get a list of strings for your search. The method acts only on keys with string values. It breaks each value string apart at whitespace boundaries, creates new strings for each word, adds the new strings to an array, and returns the array. This tokenized version of the record’s string values makes it easier to do string-based comparisons of individual words.
