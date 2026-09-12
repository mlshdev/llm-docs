> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemactivityidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitemactivityidentifier)

# CSSearchableItemActivityIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The key you use to access a searchable item in a user activity object.

## Declaration

```swift
let CSSearchableItemActivityIdentifier: String
```

<a id="discussion"></a>

## Discussion

Use this key to access the unique identifier for the searchable item from the [userInfo](../foundation/nsuseractivity/userinfo.md) dictionary of a [NSUserActivity](../foundation/nsuseractivity.md) object.

## See Also

### Continuing a search or activity

- [CSSearchableItemActionType](cssearchableitemactiontype.md): Indicates that the activity type to continue is related to a searchable item.
- [CSQueryContinuationActionType](csquerycontinuationactiontype.md): Indicates that the activity type to continue is a search or query.
- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.

# CSSearchableItemActivityIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The key you use to access a searchable item in a user activity object.

## Declaration

```objectivec
extern NSString * const CSSearchableItemActivityIdentifier;
```

<a id="discussion"></a>

## Discussion

Use this key to access the unique identifier for the searchable item from the [userInfo](../foundation/nsuseractivity/userinfo.md) dictionary of a [NSUserActivity](../foundation/nsuseractivity.md) object.

## See Also

### Continuing a search or activity

- [CSSearchableItemActionType](cssearchableitemactiontype.md): Indicates that the activity type to continue is related to a searchable item.
- [CSQueryContinuationActionType](csquerycontinuationactiontype.md): Indicates that the activity type to continue is a search or query.
- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.
