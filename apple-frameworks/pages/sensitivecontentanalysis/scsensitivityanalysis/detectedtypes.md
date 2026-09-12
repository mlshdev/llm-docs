> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysis/detectedtypes](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysis/detectedtypes)

# detectedTypes (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A property that contains the categories of sensitive content that analysis detects.

## Declaration

```swift
var detectedTypes: Set<SCSensitivityAnalysis.ContentType> { get }
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)
- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)

<a id="Discussion"></a>

## Discussion

The Sensitive Content Analysis framework sets this property when analysis determines that media contains sensitive content. Check this property to determine the specific types of sensitive content, such as [sexuallyExplicit](contenttype/sexuallyexplicit.md) or [goreOrViolence](contenttype/goreorviolence.md). The framework populates this set only when [isSensitive](issensitive.md) is `true`.

For example, the following code checks for specific content types after determining that media is sensitive:

```swift
let analysis = try await analyzer.analyzeImage(at: imageURL)

guard analysis.isSensitive else {
    displayContent(imageURL)
    return
}

// Check for specific harm types.
let detectedTypes = analysis.detectedTypes

if detectedTypes.contains(.sexuallyExplicit) {
    showContentWarning(
        message: "This image may contain nudity.",
        allowAccess: true
    )
}

if detectedTypes.contains(.goreOrViolence) {
    blockContent(
        message: "This image may contain violence or gore.",
        offerResources: true
    )
}
```

## See Also

### Identifying content categories

- [SCSensitivityAnalysis.ContentType](contenttype.md): A type that identifies a category of sensitive content.

# detectedTypes (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A property that contains the categories of sensitive content that analysis detects.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nonnull) NSSet<NSString *> * detectedTypes;
```

## Mentioned In

- [Detecting sensitive content in media and providing intervention options](../detecting-nudity-in-media-and-providing-intervention-options.md)
- [Testing your app’s response to sensitive media](../testing-your-app-s-response-to-sensitive-media.md)

<a id="Discussion"></a>

## Discussion

The Sensitive Content Analysis framework sets this property when analysis determines that media contains sensitive content. Check this property to determine the specific types of sensitive content, such as [SCSensitiveContentTypeSexuallyExplicit](contenttype/sexuallyexplicit.md) or [SCSensitiveContentTypeGoreOrViolence](contenttype/goreorviolence.md). The framework populates this set only when [sensitive](issensitive.md) is `true`.

For example, the following code checks for specific content types after determining that media is sensitive:

```swift
let analysis = try await analyzer.analyzeImage(at: imageURL)

guard analysis.isSensitive else {
    displayContent(imageURL)
    return
}

// Check for specific harm types.
let detectedTypes = analysis.detectedTypes

if detectedTypes.contains(.sexuallyExplicit) {
    showContentWarning(
        message: "This image may contain nudity.",
        allowAccess: true
    )
}

if detectedTypes.contains(.goreOrViolence) {
    blockContent(
        message: "This image may contain violence or gore.",
        offerResources: true
    )
}
```

## See Also

### Identifying content categories

- [SCSensitiveContentType](contenttype.md): A type that identifies a category of sensitive content.
