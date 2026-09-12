> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csimportextension/update(_:forfileat:)](https://developer.apple.com/documentation/corespotlight/csimportextension/update(_:forfileat:))

# update(\_:forFileAt:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Provides searchable attributes for a file at the specified URL.

## Declaration

```swift
func update(_ attributes: CSSearchableItemAttributeSet, forFileAt contentURL: URL) throws
```

## Parameters

- `attributes`: The attribute set for the file at `contentURL`.
- `contentURL`: The URL of the file to provide attributes for.

<a id="Discussion"></a>

## Discussion

When Core Spotlight invokes this method, update the properties of the attribute set according to the content in the specified file. For a complete list of properties available, see [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md).

> **Important**

>  Core Spotlight indexes files in batches and may call this method simultaneously on multiple queues with different values of `contentURL`.

# updateAttributes:forFileAtURL:error: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Provides searchable attributes for a file at the specified URL.

## Declaration

```objectivec
- (BOOL) updateAttributes:(CSSearchableItemAttributeSet *) attributes forFileAtURL:(NSURL *) contentURL error:(NSError **) error;
```

## Parameters

- `attributes`: The attribute set for the file at `contentURL`.
- `contentURL`: The URL of the file to provide attributes for.
- `error`: A pointer to an error that Core Spotlight provides if the update fails.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

When Core Spotlight invokes this method, update the properties of the attribute set according to the content in the specified file. For a complete list of properties available, see [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md).

> **Important**

>  Core Spotlight indexes files in batches and may call this method simultaneously on multiple queues with different values of `contentURL`.
