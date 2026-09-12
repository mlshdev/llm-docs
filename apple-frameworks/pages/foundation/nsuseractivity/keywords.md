> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/keywords](https://developer.apple.com/documentation/foundation/nsuseractivity/keywords)

# keywords (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of localized keywords that can help users find the activity in search results.

## Declaration

```swift
var keywords: Set<String> { get set }
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. The system indexes the keywords you provide.

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.

# keywords (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of localized keywords that can help users find the activity in search results.

## Declaration

```objectivec
@property (copy) NSSet<NSString *> * keywords;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. The system indexes the keywords you provide.

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.
