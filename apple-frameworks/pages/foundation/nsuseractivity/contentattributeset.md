> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/contentattributeset](https://developer.apple.com/documentation/foundation/nsuseractivity/contentattributeset)

# contentAttributeSet (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A set of properties that describe the activity.

## Declaration

```swift
@NSCopying var contentAttributeSet: CSSearchableItemAttributeSet? { get set }
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="Discussion"></a>

## Discussion

A [CSSearchableItemAttributeSet](../../corespotlight/cssearchableitemattributeset.md) object encapsulates the set of properties you want to display for a searchable activity.

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.

# contentAttributeSet (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A set of properties that describe the activity.

## Declaration

```objectivec
@property (copy, nullable) CSSearchableItemAttributeSet * contentAttributeSet;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="Discussion"></a>

## Discussion

A [CSSearchableItemAttributeSet](../../corespotlight/cssearchableitemattributeset.md) object encapsulates the set of properties you want to display for a searchable activity.

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
