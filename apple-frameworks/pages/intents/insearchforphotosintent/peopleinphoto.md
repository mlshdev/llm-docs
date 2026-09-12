> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintent/peopleinphoto](https://developer.apple.com/documentation/intents/insearchforphotosintent/peopleinphoto)

# peopleInPhoto (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The people identified in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var peopleInPhoto: [INPerson]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [INPerson](../inperson.md) objects, your search should return only photos that contain the specified people. Use the operator in the [peopleInPhotoOperator](peopleinphotooperator.md) property to determine whether to search for photos containing all, some, or none of the specified people.

## See Also

### Getting the People in the Photos

- [peopleInPhotoOperator](peopleinphotooperator.md): Deprecated. The operator that defines how to search for people in the photos.

# peopleInPhoto (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The people identified in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * peopleInPhoto;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * peopleInPhoto;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [INPerson](../inperson.md) objects, your search should return only photos that contain the specified people. Use the operator in the [peopleInPhotoOperator](peopleinphotooperator.md) property to determine whether to search for photos containing all, some, or none of the specified people.

## See Also

### Getting the People in the Photos

- [peopleInPhotoOperator](peopleinphotooperator.md): Deprecated. The operator that defines how to search for people in the photos.
