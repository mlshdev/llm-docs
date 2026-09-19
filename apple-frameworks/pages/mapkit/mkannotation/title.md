> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkannotation/title

# title (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The string containing the annotation’s title.

## Declaration

```swift
optional var title: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this optional property to supply a string that the annotation displays in the callout for the associated annotation view. If you specify a [detailCalloutAccessoryView](../mkannotationview/detailcalloutaccessoryview.md) object, setting the title isn’t required.

## See Also

### Title attributes

- [subtitle](subtitle.md): The string containing the annotation’s subtitle.

# title (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The string containing the annotation’s title.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

Use this optional property to supply a string that the annotation displays in the callout for the associated annotation view. If you specify a [detailCalloutAccessoryView](../mkannotationview/detailcalloutaccessoryview.md) object, setting the title isn’t required.

## See Also

### Title attributes

- [subtitle](subtitle.md): The string containing the annotation’s subtitle.
