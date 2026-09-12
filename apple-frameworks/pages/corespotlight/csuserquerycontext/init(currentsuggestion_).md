> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext/init(currentsuggestion:)](https://developer.apple.com/documentation/corespotlight/csuserquerycontext/init(currentsuggestion:))

# init(currentSuggestion:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new query context object with an optional suggested search string.

## Declaration

```swift
init(currentSuggestion: CSSuggestion?)
```

## Parameters

- `currentSuggestion`: The suggested text completion that the person selected in your interface. Specify `nil` if the person hasn’t chosen a suggestion.

<a id="return-value"></a>

## Return Value

An initialized user query context object. Configure the properties of the returned object and use it to construct a [CSUserQuery](../csuserquery.md) object.

# userQueryContextWithCurrentSuggestion: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new query context object with an optional suggested search string.

## Declaration

```objectivec
+ (CSUserQueryContext *) userQueryContextWithCurrentSuggestion:(CSSuggestion *) currentSuggestion;
```

## Parameters

- `currentSuggestion`: The suggested text completion that the person selected in your interface. Specify `nil` if the person hasn’t chosen a suggestion.

<a id="return-value"></a>

## Return Value

An initialized user query context object. Configure the properties of the returned object and use it to construct a [CSUserQuery](../csuserquery.md) object.
