> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scsensitivityanalysis/contenttype](https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysis/contenttype)

# SCSensitivityAnalysis.ContentType (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that identifies a category of sensitive content.

## Declaration

```swift
struct ContentType
```

<a id="Discussion"></a>

## Discussion

The Sensitive Content Analysis framework uses content type values to indicate the specific nature of sensitive material detected in images or videos. Check the [detectedTypes](detectedtypes.md) property to retrieve the set of content types the framework detects in analyzed media. This information enables your app to provide tailored responses based on the specific type of sensitive content present.

## Topics

### Identifying content categories

- [sexuallyExplicit](contenttype/sexuallyexplicit.md): A content type that indicates the presence of nudity or sexually explicit material.
- [goreOrViolence](contenttype/goreorviolence.md): A content type that indicates the presence of graphic violence or gore.

### Creating a content type

- [init(rawValue:)](contenttype/init%28rawvalue_%29.md): Creates a content type from a raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying content categories

- [detectedTypes](detectedtypes.md): A property that contains the categories of sensitive content that analysis detects.

# SCSensitiveContentType (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that identifies a category of sensitive content.

## Declaration

```objectivec
typedef NSString * SCSensitiveContentType;
```

<a id="Discussion"></a>

## Discussion

The Sensitive Content Analysis framework uses content type values to indicate the specific nature of sensitive material detected in images or videos. Check the [detectedTypes](detectedtypes.md) property to retrieve the set of content types the framework detects in analyzed media. This information enables your app to provide tailored responses based on the specific type of sensitive content present.

## Topics

### Identifying content categories

- [SCSensitiveContentTypeSexuallyExplicit](contenttype/sexuallyexplicit.md): A content type that indicates the presence of nudity or sexually explicit material.
- [SCSensitiveContentTypeGoreOrViolence](contenttype/goreorviolence.md): A content type that indicates the presence of graphic violence or gore.

## See Also

### Identifying content categories

- [detectedTypes](detectedtypes.md): A property that contains the categories of sensitive content that analysis detects.
