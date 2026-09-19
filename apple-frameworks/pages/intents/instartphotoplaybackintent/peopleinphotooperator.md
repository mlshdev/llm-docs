> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/instartphotoplaybackintent/peopleinphotooperator

# peopleInPhotoOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The operator that defines how to search for people in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var peopleInPhotoOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the photo must contain all, some, or none of the people listed in the [peopleInPhoto](peopleinphoto.md) property.

## See Also

### Getting the People in the Photos

- [peopleInPhoto](peopleinphoto.md): Deprecated. The people in the photos.

# peopleInPhotoOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The operator that defines how to search for people in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator peopleInPhotoOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator peopleInPhotoOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the photo must contain all, some, or none of the people listed in the [peopleInPhoto](peopleinphoto.md) property.

## See Also

### Getting the People in the Photos

- [peopleInPhoto](peopleinphoto.md): Deprecated. The people in the photos.
