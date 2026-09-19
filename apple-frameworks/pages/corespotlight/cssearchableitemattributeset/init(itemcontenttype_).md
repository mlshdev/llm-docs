> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/init(itemcontenttype:)

# init(itemContentType:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 27.2) · iPadOS 9.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.11+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Creates an attribute set for the specified content type.

> Use [init(contentType:)](init%28contenttype_%29.md) instead.

## Declaration

```swift
init(itemContentType: String)
```

## Parameters

- `itemContentType`: The uniform type identifier of the content. For example, `kUTTypePNG` or `kUTTypeMovie`.

<a id="return-value"></a>

## Return Value

An attribute set that represents an item of the specified content type.

# initWithItemContentType: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.2) · iPadOS 9.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.11+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Creates an attribute set for the specified content type.

> Use [initWithContentType:](init%28contenttype_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithItemContentType:(NSString *) itemContentType;
```

## Parameters

- `itemContentType`: The uniform type identifier of the content. For example, `kUTTypePNG` or `kUTTypeMovie`.

<a id="return-value"></a>

## Return Value

An attribute set that represents an item of the specified content type.
