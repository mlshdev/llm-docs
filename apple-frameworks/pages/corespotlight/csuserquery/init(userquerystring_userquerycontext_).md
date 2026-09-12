> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/init(userquerystring:userquerycontext:)](https://developer.apple.com/documentation/corespotlight/csuserquery/init(userquerystring:userquerycontext:))

# init(userQueryString:userQueryContext:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new user query that searches for the specified term.

## Declaration

```swift
init(userQueryString: String?, userQueryContext: CSUserQueryContext?)
```

## Parameters

- `userQueryString`: The term to search for. You may specify an empty string for this parameter.
- `userQueryContext`: A context object with options for how to run the query and generate results.

<a id="return-value"></a>

## Return Value

An initialized query object.

# initWithUserQueryString:userQueryContext: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a new user query that searches for the specified term.

## Declaration

```objectivec
- (instancetype) initWithUserQueryString:(NSString *) userQueryString userQueryContext:(CSUserQueryContext *) userQueryContext;
```

## Parameters

- `userQueryString`: The term to search for. You may specify an empty string for this parameter.
- `userQueryContext`: A context object with options for how to run the query and generate results.

<a id="return-value"></a>

## Return Value

An initialized query object.
