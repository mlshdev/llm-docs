> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/persistentidentifier](https://developer.apple.com/documentation/foundation/nsuseractivity/persistentidentifier)

# persistentIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 5.0+

A unique and persistent value you use to identify the activity.

## Declaration

```swift
var persistentIdentifier: NSUserActivityPersistentIdentifier? { get set }
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Set this property to a value that identifies the user activity so you can later delete it with [deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:)](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md). For example, if the user checks the weather for Cupertino each morning from home, the weather app sets the persistent identifier to the city name (Cupertino). When the user deletes Cupertino from the weather app, the app deletes the user activity associated with the identifier, “Cupertino”.

```swift
let userActivity = NSUserActivity(activityType: WeatherLookup.userActivityType)
userActivity.persistentIdentifier = "Cupertino"
```

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.

# persistentIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 5.0+

A unique and persistent value you use to identify the activity.

## Declaration

```objectivec
@property (copy, nullable) NSUserActivityPersistentIdentifier persistentIdentifier;
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Set this property to a value that identifies the user activity so you can later delete it with [deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler:](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md). For example, if the user checks the weather for Cupertino each morning from home, the weather app sets the persistent identifier to the city name (Cupertino). When the user deletes Cupertino from the weather app, the app deletes the user activity associated with the identifier, “Cupertino”.

```swift
let userActivity = NSUserActivity(activityType: WeatherLookup.userActivityType)
userActivity.persistentIdentifier = "Cupertino"
```

## See Also

### Describing the activity

- [activityType](activitytype.md): The user activity object’s activity type.
- [title](title.md): An optional, user-visible title for this activity, such as a document name or web page title.
- [keywords](keywords.md): A set of localized keywords that can help users find the activity in search results.
- [NSUserActivityPersistentIdentifier](../nsuseractivitypersistentidentifier.md): The type that defines a persistent identifier value for an activity.
- [contentAttributeSet](contentattributeset.md): A set of properties that describe the activity.
