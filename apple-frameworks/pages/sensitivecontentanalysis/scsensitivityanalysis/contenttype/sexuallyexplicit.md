> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysis/contenttype/sexuallyexplicit](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysis/contenttype/sexuallyexplicit)

# sexuallyExplicit (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A content type that indicates the presence of nudity or sexually explicit material.

## Declaration

```swift
static let sexuallyExplicit: SCSensitivityAnalysis.ContentType
```

## Mentioned In

- [Testing your app’s response to sensitive media](../../testing-your-app-s-response-to-sensitive-media.md)

<a id="Discussion"></a>

## Discussion

The Sensitive Content Analysis framework includes this value in [detectedTypes](../detectedtypes.md) when it detects nudity or sexually explicit content in analyzed media.

## See Also

### Identifying content categories

- [goreOrViolence](goreorviolence.md): A content type that indicates the presence of graphic violence or gore.

# SCSensitiveContentTypeSexuallyExplicit (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A content type that indicates the presence of nudity or sexually explicit material.

## Declaration

```objectivec
extern SCSensitiveContentType const SCSensitiveContentTypeSexuallyExplicit;
```

## Mentioned In

- [Testing your app’s response to sensitive media](../../testing-your-app-s-response-to-sensitive-media.md)

<a id="Discussion"></a>

## Discussion

The Sensitive Content Analysis framework includes this value in [detectedTypes](../detectedtypes.md) when it detects nudity or sexually explicit content in analyzed media.

## See Also

### Identifying content categories

- [SCSensitiveContentTypeGoreOrViolence](goreorviolence.md): A content type that indicates the presence of graphic violence or gore.
