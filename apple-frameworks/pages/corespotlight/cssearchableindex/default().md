> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/default()](https://developer.apple.com/documentation/corespotlight/cssearchableindex/default())

# default() (Swift)

**Framework:** Core Spotlight  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the default on-device index.

## Declaration

```swift
class func `default`() -> Self
```

<a id="return-value"></a>

## Return Value

The default on-device index.

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

The default index doesn’t protect data or support batch updates, so use it only during prototyping or testing your Spotlight features. In your production code, create named indexes using [init(name:)](init%28name_%29.md) or [init(name:protectionClass:)](init%28name_protectionclass_%29.md) instead of using this index for your content.

## See Also

### Creating an index

- [init(name:)](init%28name_%29.md): Returns an on-device index with the specified name.
- [init(name:protectionClass:)](init%28name_protectionclass_%29.md): Returns an on-device index with the specified name and data protection class.

# defaultSearchableIndex (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the default on-device index.

## Declaration

```objectivec
+ (instancetype) defaultSearchableIndex;
```

<a id="return-value"></a>

## Return Value

The default on-device index.

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

The default index doesn’t protect data or support batch updates, so use it only during prototyping or testing your Spotlight features. In your production code, create named indexes using [initWithName:](init%28name_%29.md) or [initWithName:protectionClass:](init%28name_protectionclass_%29.md) instead of using this index for your content.

## See Also

### Creating an index

- [initWithName:](init%28name_%29.md): Returns an on-device index with the specified name.
- [initWithName:protectionClass:](init%28name_protectionclass_%29.md): Returns an on-device index with the specified name and data protection class.
