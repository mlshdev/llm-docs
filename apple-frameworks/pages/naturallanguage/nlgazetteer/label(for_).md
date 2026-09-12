> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlgazetteer/label(for:)](https://developer.apple.com/documentation/naturallanguage/nlgazetteer/label(for:))

# label(for:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the label for the given term.

## Declaration

```swift
func label(for string: String) -> String?
```

## Parameters

- `string`: The term used to find a label.

<a id="return-value"></a>

## Return Value

A string if the term is in the vocabulary; otherwise `nil`.

# labelForString: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the label for the given term.

## Declaration

```objectivec
- (NSString *) labelForString:(NSString *) string;
```

## Parameters

- `string`: The term used to find a label.

<a id="return-value"></a>

## Return Value

A string if the term is in the vocabulary; otherwise `nil`.
