> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/activitytype](https://developer.apple.com/documentation/foundation/nsuseractivity/activitytype)

# activityType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user activity object’s activity type.

## Declaration

```swift
var activityType: String { get }
```

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This property is set at initialization time and can’t be changed later. Typically, you specify activity type strings using a reverse-DNS format that uniquely identifies the activity.

## See Also

### Describing the activity

- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.

# activityType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user activity object’s activity type.

## Declaration

```objectivec
@property (copy, readonly) NSString * activityType;
```

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This property is set at initialization time and can’t be changed later. Typically, you specify activity type strings using a reverse-DNS format that uniquely identifies the activity.

## See Also

### Describing the activity

- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [persistentIdentifier](persistentidentifier.md): A unique and persistent value you use to identify the activity.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.
