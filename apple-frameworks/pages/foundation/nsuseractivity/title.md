> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/title](https://developer.apple.com/documentation/foundation/nsuseractivity/title)

# title (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional, user-visible title for this activity, such as a document name or web page title.

## Declaration

```swift
var title: String? { get set }
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)
- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)
- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Always specify a title string for activity objects that are eligible for searches, and it’s recommended that you include a title string for all user activity objects. For search-related user activity objects, this string is displayed in the search results.

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.

# title (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional, user-visible title for this activity, such as a document name or web page title.

## Declaration

```objectivec
@property (copy, nullable) NSString * title;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)
- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)
- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Always specify a title string for activity objects that are eligible for searches, and it’s recommended that you include a title string for all user activity objects. For search-related user activity objects, this string is displayed in the search results.

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.
