> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csquerycontinuationactiontype](https://developer.apple.com/documentation/corespotlight/csquerycontinuationactiontype)

# CSQueryContinuationActionType (Swift)

**Framework:** Core Spotlight  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Indicates that the activity type to continue is a search or query.

## Declaration

```swift
let CSQueryContinuationActionType: String
```

<a id="Discussion"></a>

## Discussion

To support search continuation, be sure to include the `CoreSpotlightContinuation` key in your Info.plist file with the value `true`. When users continue a query they started in Spotlight, the system calls your app delegate’s `application(_:willContinueUserActivityWithType:)` method with `CSQueryContinuationActionType`. Then, your app delegate receives an [NSUserActivity](../foundation/nsuseractivity.md) object that contains a `userInfo` dictionary that includes the [CSSearchQueryString](cssearchquerystring.md) key in its `application(_:continue:restorationHandler:)` method. You use the query string associated with this key to continue the search.

## See Also

### Continuing an activity

- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.

# CSQueryContinuationActionType (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Indicates that the activity type to continue is a search or query.

## Declaration

```objectivec
extern NSString * const CSQueryContinuationActionType;
```

<a id="Discussion"></a>

## Discussion

To support search continuation, be sure to include the `CoreSpotlightContinuation` key in your Info.plist file with the value `true`. When users continue a query they started in Spotlight, the system calls your app delegate’s `application(_:willContinueUserActivityWithType:)` method with `CSQueryContinuationActionType`. Then, your app delegate receives an [NSUserActivity](../foundation/nsuseractivity.md) object that contains a `userInfo` dictionary that includes the [CSSearchQueryString](cssearchquerystring.md) key in its `application(_:continue:restorationHandler:)` method. You use the query string associated with this key to continue the search.

## See Also

### Continuing an activity

- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.
