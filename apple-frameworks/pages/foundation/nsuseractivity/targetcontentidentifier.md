> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/targetcontentidentifier](https://developer.apple.com/documentation/foundation/nsuseractivity/targetcontentidentifier)

# targetContentIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A string that identifies the user activity’s content.

## Declaration

```swift
var targetContentIdentifier: String? { get set }
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

A target content identifier is a string you define within your app. This string provides a unique identifier for specific content in your app, like a particular document or the location of a piece of data in a database. This string isn’t visible to the user.

If you set this property, when the system delivers an [NSUserActivity](../nsuseractivity.md) object to an app with multiple scenes, it chooses the [UIScene](../../uikit/uiscene.md) whose [UISceneActivationConditions](../../uikit/uisceneactivationconditions.md) have the best match with the target content identifier. For more information, see [UISceneActivationConditions](../../uikit/uisceneactivationconditions.md).

This property is optional but is highly recommended to create a great multitasking experience for apps that run on iPad. Setting this property doesn’t automatically set [needsSave](needssave.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying app identifiers

- [appEntityIdentifier](appentityidentifier.md): The identifier of an app entity that you associate with the user activity.
- [externalMediaContentIdentifier](externalmediacontentidentifier.md): A unique identifier from the app’s media content catalog for the currently displayed media item.

# targetContentIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A string that identifies the user activity’s content.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * targetContentIdentifier;
```

```objectivec
@property (copy, nullable) NSString * targetContentIdentifier;
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

A target content identifier is a string you define within your app. This string provides a unique identifier for specific content in your app, like a particular document or the location of a piece of data in a database. This string isn’t visible to the user.

If you set this property, when the system delivers an [NSUserActivity](../nsuseractivity.md) object to an app with multiple scenes, it chooses the [UIScene](../../uikit/uiscene.md) whose [UISceneActivationConditions](../../uikit/uisceneactivationconditions.md) have the best match with the target content identifier. For more information, see [UISceneActivationConditions](../../uikit/uisceneactivationconditions.md).

This property is optional but is highly recommended to create a great multitasking experience for apps that run on iPad. Setting this property doesn’t automatically set [needsSave](needssave.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying app identifiers

- [externalMediaContentIdentifier](externalmediacontentidentifier.md): A unique identifier from the app’s media content catalog for the currently displayed media item.
